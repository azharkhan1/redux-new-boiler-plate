import react from 'react';
import { useSelector , useDispatch } from 'react-redux';


export default function ComponentA(){
    const login = useSelector(state => state.login)
    const counter = useSelector((state)=> state.counter);
    return (
    <div> 
        Component A {counter}
        Login state is {login ? 'true' : 'false'}
    </div>
        )
}