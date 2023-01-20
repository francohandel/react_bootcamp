import logo from './logo.svg';
import './App.css';
import { choice, remove } from './utils/helpers'
import fruits from './utils/fruits'
function App() {
  const x = choice(fruits)
  remove(fruits, x)
  return (
    <div className="App">
      <p>i would like one {x} please</p>
      <p>here you go 1 {x}!</p>
      <p>delicious, may i have another</p>
      <p>i am sorry, we are all out, we now have {fruits.length} left</p>
    </div>
  );
}
export default App;