import React from 'react';
import ReactDom from 'react-dom';
// CSS
import './index.css';
// Gol"Rich Dad Poor Dad"bel varibale
/* const image= "./dad.jpg";
const title = "Rich Dad Poor Dad";
const author = "Robert T. Kiyosaki"; */
const data =[
  {
    title : "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki" ,
    image : "./dad.jpg"
  },

];
// component
function ListBook(){
  return (
    <section>
      {data.map((obj)=> <Book {...obj}></Book>)}
      
    </section>
  );
}
function Book({title, author, image}){
 /*  let image = p.image;
  let title = p.title;
  let author = p.author; */
  return (
    <article className='cadr'>
      <img src={image} style={{width:"150px"}} alt="t"/>
      <p>{title}</p>
      <h4>{author}</h4>

    </article>
  );
}

ReactDom.render(<ListBook/>, document.getElementById('root'));