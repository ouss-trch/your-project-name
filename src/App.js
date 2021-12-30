 import logo from './logo.svg';
import './App.css';
import Photo from './components/profile/profile'
import FullName from './components/profile/name';
import Address from './components/profile/address'
function App() {
  return (
    <div className="App">
     <Photo /> 
     <FullName />
     <Address />
    </div>
  );
}

export default App;
