import React from 'react';

function Bio() {
  const firstName = "Abinaya";
  const lastName = "Sivanathan";
  const message = "We are learning React";

  const welcome = (props) => {
    return <div>{props.children}</div>
  }

  const element = React.createElement(
      "button",{
        className: "btn",
        onClick: () => alert("Clicked!"),
        children: ['Click Me']
      },
      "Click Me"
  );
  return(
    <welcome >
    <h1 style={{backgroundColor: 'teal'}}>My name is {firstName} {lastName}</h1>
    <h4>{message}</h4>
    {element}
    </welcome>
    )
  
}
export default Bio;
