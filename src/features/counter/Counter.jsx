import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

function Counter() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <section className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-4 mb-4">Counter</h1>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-primary btn-lg mr-3" onClick={() => { dispatch(increment()) }}>+</button>
                <h1 className="m-0 p-5">{count}</h1>
                <button className="btn btn-primary btn-lg ml-3" onClick={() => { dispatch(decrement()) }}>-</button>
            </div>
        </section>
    );
}

export default Counter;
