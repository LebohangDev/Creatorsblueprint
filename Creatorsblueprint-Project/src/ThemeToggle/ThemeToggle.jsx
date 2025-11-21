
import { motion } from 'framer-motion';
import styles from './ThemeToggle.module.css';
import { useEffect } from 'react';

function ThemeToggle({ theme, setTheme }) {

    // run theme change on first render 
    useEffect(() => {
        toggleTheme();

    }, []);


    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        // creating attribute data-theme on html with the current theme 
        document.documentElement.setAttribute('data-theme', newTheme);

    };

    return (
        <motion.button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Toggle theme"
            whileHover={{
                scale: 1.1,
                rotate: 15,
            }}
            whileTap={{
                scale: 0.95,
                rotate: -15
            }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 17
            }}
        >
            <motion.i
                className={theme === 'dark' ? "ri-sun-line" : "ri-moon-line"}
                initial={{ rotate: 0, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{ rotate: 180, scale: 0 }}
                whileHover={{ rotate: 180 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
                key={theme}
            />
        </motion.button>
    );
}

export default ThemeToggle;

