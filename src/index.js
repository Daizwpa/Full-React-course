import React from 'react';
import ReactDom from 'react-dom';
// CSS
import './index.css';
import {data} from './data'

import Book from './Book'
// Gol"Rich Dad Poor Dad"bel varibale
/* const image= "./dad.jpg";
const title = "Rich Dad Poor Dad";
const author = "Robert T. Kiyosaki"; */

// component
function ListBook(){
  return (
    <section>
      {data.map((obj)=> <Book {...obj}></Book>)}
      
    </section>
  );
}


ReactDom.render(<ListBook/>, document.getElementById('root'));