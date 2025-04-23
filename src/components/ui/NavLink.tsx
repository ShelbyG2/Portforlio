import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    
    if (onClick) onClick();
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
    >
      {children}
    </a>
  );
};

export default NavLink;