import "./style.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import InputField from './inputField';
import TextField from "./textField";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <InputField />
        <TextField />
    </div>
);