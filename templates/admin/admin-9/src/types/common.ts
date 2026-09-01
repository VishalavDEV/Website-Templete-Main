export type ComponentSize = 'sm' | 'md' | 'lg';
export type ComponentVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link';
export type StatusType = 'success' | 'warning' | 'destructive' | 'info' | 'default';

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}
