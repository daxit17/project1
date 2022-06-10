import React, { useState } from 'react';

function Counter(props) {

    const [data,setData] = useState(0);

    const Increment = () => {
        if (data < 10) {
            setData(data + 1);
        }
    }

    const Decrement = () => {
        if (data <= 0) {
            setData(0);
        }else {
            setData(data - 1);
        }
    }

    return (
        <div>
            <p>{data}</p>
            <button onClick={()=>Increment()}>Increment</button>
            <button onClick={()=>Decrement()}>Decrement</button>
        </div>
    );
}

export default Counter;