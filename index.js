import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Loki from './ClassComp/Class1';
import Func from './FuncComp/Func';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
    <Loki name='Lokesh'/>
    <Func name='Nani' age='24'/>

</div>)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

