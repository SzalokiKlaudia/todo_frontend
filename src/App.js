import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App cont d-flex flex-column min-vh-100">
        <header className="App-header w-100 bg-light">
       
            <h1>Todo lista</h1>
        </header>

        <div className='section container flex-grow-1'>
          <Todos/>


        </div>
        <footer className='text-center bg-light mt-auto'>Szalóki Klaudia</footer>


    </div>
  );
}

export default App;
