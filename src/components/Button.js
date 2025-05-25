import React from 'react';

export function Button({ vis, visSet }) {

    return vis ? <div onClick={() => visSet(false)}></div> : null;
}

export default Button;