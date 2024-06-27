
import './App.css';
import Task from './task';
import TaskList from './ListTask';
import AddTask from './AddTask';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
   
    <Task/>
    <TaskList/>
    <AddTask/>
  
   
    </div>
  </Provider>
  );
}

export default App;
