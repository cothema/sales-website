export abstract class AbstractRepositoryService<T> {

  protected items: T[] = [];

  protected constructor() {
  }

  async getAll(): Promise<T[]> {
    return this.items;
  }
}
