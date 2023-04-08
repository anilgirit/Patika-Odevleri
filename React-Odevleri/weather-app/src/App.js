import './App.css';
import Container from './components/Container';
import { WeatherProvider } from './context/WeatherContext';


function App() {
  return (
    <WeatherProvider>
      <h1 className='header'>Weather APP</h1>
      <Container />
    </WeatherProvider>
  );
}

export default App;