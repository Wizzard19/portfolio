import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Public from './Routes/Public';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Public />
      </BrowserRouter>
    </div>
  );
}

export default App;
