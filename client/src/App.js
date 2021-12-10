import './App.css';
import Main from './components/main';

const App = () => {
  return (
    <div className="App">
      <header></header>
      <main>
        <h2>Iaido App</h2>
        <Main />
      </main>
      <footer>
        <p>An application by Zedd Enterprises.</p>
      </footer>
    </div>
  );
}

export default App;
