import { useColorScheme } from "@mui/material";

export const ThemeButton: React.FC = () => {
    const {mode, setMode} = useColorScheme();

    const isDark = isDarkWithSystem(mode);

    const buttonStyleDark = {
        
        padding: '15px 15px',
        border: '1px solid #4e4e4eff',
        borderRadius: '4px',
        backgroundColor: '#323232ff',
        color: '#ffffffff',
        cursor: 'pointer',
        fontSize: '20px',
        fontWeight: '500' as const,
        transition: 'all 0.2s ease',
    };

        const buttonStyleLight = {
        padding: '15px 15px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#f5f5f5',
        color: '#333',
        cursor: 'pointer',
        fontSize: '20px',
        fontWeight: '500' as const,
        transition: 'all 0.2s ease',
    };

    const getButtonText = () => {
        switch (mode) {
            case 'light': return 'Светлая';
            case 'dark': return 'Темная';
            case 'system': return 'Как в системе';
            default: return 'Темная';
        }
    };

    const handleClick = () => {
        switch (mode) {
            case 'light': setMode('dark'); break;
            case 'dark': setMode('system'); break;
            case 'system': setMode('light'); break;
            default: setMode('system');
        }
    };

    
        return (
        <button 
            onClick={handleClick}
            style={isDark ? buttonStyleDark : buttonStyleLight}
            onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = isDark ? '#202020ff' : '#e0e0e0';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = isDark ? '#323232ff' : '#f5f5f5';
            }}
        >
            {getButtonText()}
        </button>
    );
}

export function isDarkWithSystem(mode: 'system' | 'dark' | 'light' | undefined) {
    if (mode === 'dark') return true;
    if (mode === 'system') return window.matchMedia('(prefers-color-scheme: dark)').matches;
    return false;
}