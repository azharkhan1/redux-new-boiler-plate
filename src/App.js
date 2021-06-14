import './App.css';
import {useSelector , useDispatch } from 'react-redux';
import {increament , decreament} from './actions';
import ComponentA from './components/ComponentA';


function App() {
  const counter = useSelector( state=> state.counter)
  const login = useSelector( state=> state.login)
  const dispatch = useDispatch()

  console.log({login , counter})
  console.log({increament , decreament});
  return (
    <div className="App">
     <ComponentA/>
      <h2>Counter iis {counter}</h2>
      <button onClick={()=>dispatch(increament())}>Increament</button>
      <button onClick={()=>dispatch(decreament())}>Decreament</button>
    </div>
  );
}

export default App;
