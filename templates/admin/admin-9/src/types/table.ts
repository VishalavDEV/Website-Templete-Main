export interface TableColumn<T> {
  key: keyof T | string;
  label: string;
  isSortable?: boolean;
  render?: (row: T) => React.ReactNode;
}
