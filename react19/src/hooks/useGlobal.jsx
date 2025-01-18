import React, { useState } from 'react';

const useGlobal = () => {
    const [react18, setReact18] = useState('#00FFFF');
    return {
        react18,
        setReact18
    };
}
 
export default useGlobal;