import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='components'>
      <Sidebar />
      <Form />
      </div>
    </div>
  );
}

export default App;
