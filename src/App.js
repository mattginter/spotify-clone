import './App.css';
import Display from './components/Display'
import Player from './components/Player'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Display />
      <Player />
    </div>
  );
}

export default App;
