import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { FetchProvider } from './context/fetchContext';
import { KeyProvider } from './context/keyContext'
import { ModeProvider} from './context/modeContext'
import {IdProvider}  from './context/idContext'
ReactDOM.render(
 
    <KeyProvider >
      <FetchProvider>
         <ModeProvider>
           <IdProvider>
             <React.StrictMode>
                   <App />
             </React.StrictMode>
             </IdProvider>
         </ModeProvider>                           
    </FetchProvider> 
 </KeyProvider> ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
