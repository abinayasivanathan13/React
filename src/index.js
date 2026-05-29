import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Bio from './Bio';
import UpdatePage from './UpdatePage';
import Count from './Count';
import ReactList from './ReactList';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
root.render(<Bio />);
root.render(<UpdatePage />);
root.render(<Count />);
root.render(<ReactList />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
