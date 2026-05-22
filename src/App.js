import React from 'react';


function App() {
  const message = "We are learning React";
  const para = "This is a abinaya, I am studying MERN stack";
  const comp = "A computer system is a combination of hardware and software components that work together to process, store, and output information.";
  const PI = 3.14;
  const description = 'The value of pi is approximately ${PI}.';
  const picture = <img src= "./flower.jpg" alt= "react" style={{borderRadius:25, height:300, width:300}}/>;
  
  const welcome = (props) => {
    return <div>{props.children}</div>
  }
  return(
    <div>
      <welcome>
      <h1 style={{backgroundColor: 'pink'}}>{message}</h1>
      <p style={{backgroundColor: 'teal'}}>{para}</p>
      <p style={{backgroundColor: 'purple'}}>{comp}</p>
      <p style={{backgroundColor: 'skyblue'}}>{description}</p>
      <div>{picture}</div>
     
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About</a></li>
</ul>
     </welcome>
    </div>

  )
  
}

export default App;
