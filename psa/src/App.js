import './App.css';
import { Home } from './screens/Home/index';

var cors = require('cors');
App.use(cors());
function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
