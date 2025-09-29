import logo from './logo.svg';
import './App.css';
import TextCounter from './components/TextCounter';
import TrafficLight from './components/TrafficLight';
import Todolist from './components/TodoList';
import Carts from './components/carts';
import FormSignUp from './components/form';

function App() {
  return (
    <div style={{margin:"30px 30px"}}>
      <TextCounter/>
      <TrafficLight/>
      <Todolist/>
      <Carts/>
      <FormSignUp/>
    </div>
  );
}

export default App;
