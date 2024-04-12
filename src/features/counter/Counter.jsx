import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement ,reset,incrementByAmount} from './counterSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Counter() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount,setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;
    const resetAll = () =>{
        setIncrementAmount(0);
        dispatch(reset());
    }
    return (
        <section className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-4 mb-4">Counter</h1>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-primary btn-lg mr-3" onClick={() => { dispatch(increment()) }}>+</button>
                <h1 className="m-0 p-5">{count}</h1>
                <button className="btn btn-primary btn-lg ml-3" onClick={() => { dispatch(decrement()) }}>-</button>
            </div>
            <input 
                type='text'
                value={incrementAmount}
                onChange={(e) => {setIncrementAmount(e.target.value)}}
            />
                <button className="btn btn-primary btn-lg ml-3" onClick={() => {dispatch(incrementByAmount(addValue))}}>add value</button>
                <button className="btn btn-primary btn-lg ml-3" onClick={ resetAll }>reset</button>
        </section>
    );
}

export default Counter;
