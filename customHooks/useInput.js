import React, {useState} from 'react';

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const OnChange = event => {
        setValue(event.target.value)
    }

    const clear = () => {
        setValue('');
    }

    return {
        bind: {
            value, OnChange
        },
        value, clear
    }
}

export default useInput;
