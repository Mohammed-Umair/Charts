import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import { ThemeProvider } from '@mui/material';
import theme from './Theme/Theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>

      <LandingPage/>
      </ThemeProvider>
    </div>
  );
}

export default App;
