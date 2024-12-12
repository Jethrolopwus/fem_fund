import  { createContext, ReactNode, useContext, useState, } from 'react';

interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
  }

  const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

  interface ThemeProviderProps {
    children: ReactNode; 
  }


  export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
  
    const toggleTheme = () => {
      setIsDark((prev) => !prev);
    };
  
    return (
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
  export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
  };
  