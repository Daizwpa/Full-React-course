import  React from "react";

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

export default Book;