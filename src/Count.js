import React, { useEffect, useState} from 'react';

function Count() {
    const [count, setCount] = useState(0,1);
    useEffect(() => {
        const countTimer = setInterval(() =>{
            setCount(count => count + 2); 
        }, 1000);
        return () => clearInterval(countTimer);
    }, []);

return(
        <div>
            <h1>Welcome to the our time zone</h1>
            
            <p>count:{count}</p>
        </div>
    );

}export default Count;  