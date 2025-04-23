import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  primary?: boolean;
  href?: string;
  download?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, primary, href, download, onClick, className = '' }: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const styleClasses = primary
    ? 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600'
    : 'bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 focus:ring-gray-500';
  
  const allClasses = `${baseClasses} ${styleClasses} ${className}`;
  
  if (href) {
    return (
      <a href={href} download={download} className={allClasses}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={allClasses}>
      {children}
    </button>
  );
};

export default Button;