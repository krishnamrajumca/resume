
import { ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import NavBar from './components/NavBar';
import About from './pages/about';
import ContactUs from './pages/contact';
import Experience from './pages/experience';
import Skills from './pages/experience/Skills';
import Landing from './pages/landing';
import Projects from './pages/projects';
const theme = createTheme()
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App relative">
        <NavBar />
        <Landing />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <ContactUs />
      </div>
    </ThemeProvider>
  );
}

export default App;
