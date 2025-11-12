import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import './App.css';
import { appTheme } from './themes/muiTheme';
import { Header } from './components/Header';
import { ThemeButton } from './components/ThemeButton';
import { WeatherWidget } from './components/WeatherWidget';
import { ToDoList } from './components/ToDoList';
import { FinanceWidget } from './components/FinanceWidget';


function App() {
  return (
  <ThemeProvider theme = {appTheme}>
    <CssBaseline />
    <Header></Header>
    <ThemeButton></ThemeButton>
    <WeatherWidget></WeatherWidget>
    <FinanceWidget></FinanceWidget>
    <ToDoList></ToDoList>
  </ThemeProvider>);
}

export default App;
