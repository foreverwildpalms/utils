import React from 'react';
import useInput from "./useInput";

const InputComponen = () => {
  const input = useInput('');

    return (
        <div>
            <input type="text" {...input.bind} />
            <button onClick={input.clear}>Очистить</button>
        </div>
    );
};

export default InputComponen;
