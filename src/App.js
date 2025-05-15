import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <div className='container-fluid cont'>
        <header className="App-header">
          <h1>Todo lista</h1>
        
        </header>
        <div className='section container'>
          <Todos/>


        </div>
        <footer className='text-center bg-light'>Szalóki Klaudia</footer>

      </div>

    </div>
  );
}

export default App;
