import { forwardRef, ReactNode, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

interface CustomToggleProps {
  children: ReactNode;
  variant: string;
  onClick: (e: MouseEvent<HTMLAnchorElement>) => void;
}

const CustomToggle = forwardRef<HTMLAnchorElement, CustomToggleProps>(
  ({ children, variant, onClick }, ref) => (
    <Link
      to="/"
      ref={ref}
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onClick(e);
      }}
      className={variant}
      style={{ color: 'unset' }}
    >
      {children}
    </Link>
  )
);

export default CustomToggle;
