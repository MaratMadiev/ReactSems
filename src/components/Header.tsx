import React from 'react';
import styles from './Header.module.scss';
import { useColorScheme } from '@mui/material';
import { isDarkWithSystem } from './ThemeButton';

export const Header: React.FC = () => {
    const {mode} = useColorScheme();
    const isDark = isDarkWithSystem(mode);

    if (!mode) return null;

    return (
    <header className={isDark ? styles.header : styles.header_light}>
        <h1 className={isDark ? styles.title : styles.title_light}>Dashboard</h1>
    </header>
    );
}


