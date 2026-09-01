export interface NavigationItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
  children?: NavigationItem[];
}
