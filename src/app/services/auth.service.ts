import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import * as firebase from "firebase";
import { auth } from "firebase";
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { User } from "../model/user";
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: "root"
})
export class AuthService {

  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
  ) {
    // Get the auth state, then fetch the Firestore user document or return null
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );
  }

  async signInViaGoogle() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.authenticateWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  async signOut() {
    await this.afAuth.signOut();
    await this.router.navigate(["/"]);
  }

  private async authenticateWithPopup(provider): Promise<UserCredential> {
    try {
      const credential = await this.afAuth.signInWithPopup(provider);
      console.log("You have been successfully logged in!");
      return credential;
    } catch (e) {
      console.error(e);
    }
  }

  private async updateUserData(user: firebase.User): Promise<User> {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    await userRef.set(userData, {merge: true});
    return userData;
  }
}
