import React from 'react';
import useWindowSize from "./useWindowSize";

const WindowSizeComponent = () => {
    const size = useWindowSize();

    return (
        <div>
            {size.width}px / {size.height}px
        </div>
    );
}

export default WindowSizeComponent;