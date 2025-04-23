import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Code } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import NavLink from './ui/NavLink';

interface HeaderProps {
  scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
            <Code className="h-6 w-6" />
            <span className="font-bold text-xl">Njenga W</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>
            
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
          
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mr-4"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 z-40 pt-20">
          <nav className="flex flex-col items-center space-y-8 p-8 text-lg">
            <NavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <NavLink href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</NavLink>
            <NavLink href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
            <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;