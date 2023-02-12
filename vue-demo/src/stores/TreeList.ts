export interface TreeList {
  name: string;
  checked: boolean;
  children?: TreeList[] | [];
}
