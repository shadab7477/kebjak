declare module 'wouter' {
  import * as React from 'react';

  export interface LinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  }

  export const Link: React.FC<LinkProps>;
  export const Route: React.FC<any>;
  export const Switch: React.FC<any>;
  export const useLocation: () => [string, (path: string) => void];
  export const useRoute: (pattern: string) => [boolean, any];
}
