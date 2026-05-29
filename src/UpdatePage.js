import React, { useEffect, useState} from 'react';

function UpdateNumber() {
    const [currentNumber, setNumber] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const timer = setInterval(() =>{
            setNumber(new Date().toLocaleTimeString()); 
        }, 1000);

        return() => clearInterval(timer);

    }, []
    );
}
function UpdatePage() {
    const [currentTime,  setCurrentTime] = useState(new Date().toLocaleTimeString());
    
    useEffect(() => {
        const timer = setInterval(() =>{
            setCurrentTime(new Date().toLocaleTimeString()); 
        }, 1000);

        return() => clearInterval(timer);

    }, []);
    return(
        <div>
            <h1>Welcome to the our time zone</h1>
            <p>Current Time: {currentTime}</p>
            {UpdateNumber}
        </div>
    );

}export default UpdatePage;