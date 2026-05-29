import React from 'react';

function ReactList () {
    const fruits = ['Apple','Banana','cherry','mango','blackberry','orange','Apple','Banana','cherry','mango','blackberry','orange'
        ,'Apple','Banana','cherry','mango','blackberry','orange'
    ];
    const users =[
        {id: 1, name: 'Greeks', age: 30},
        {id: 2, name: 'qwe', age: 35},
        {id: 3, name: 'asd', age: 60},
    ];
    return(
        <div>
            <h1>Fruits</h1>
            <ul>{fruits.map((f,index) => (<li key={index}>{f}</li>))}</ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} is {user.age} years old.</li>
                   
                ))}
            </ul>
            <table>
                <tr>
                    <td> id </td>
                    <td> Name</td>
                    <td> Age </td>

                </tr>
                    {users.map((user) => (
                     <tr key={user.id}>
                        <td> {user.id} </td>
                        <td>{user.name}</td>
                        <td> {user.age} </td>
                    </tr>
                ))}

            </table>
           <ul>
            {users.map((user) => (
                user.age >30?(
                    <li key={user.id}>{user.name}is over 30 years old.</li>
                ):(<li key={user.id}>{user.name}is under 30 years old.</li>)
                    
                   
                ))}
           </ul>
        </div>
    )
}
export default ReactList;
