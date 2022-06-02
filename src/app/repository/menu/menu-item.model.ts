export interface MenuItemModel {
  link: string;
  fragment?: string;
  title: string;
  isExternal?: boolean;
  children?: MenuItemModel[];
}
