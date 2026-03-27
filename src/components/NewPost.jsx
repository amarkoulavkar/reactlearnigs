import classes from './NewPost.module.css';
import {useState} from 'react'; 
 
function NewPost(props) { 
   

 
  return (
    <>
 <form className={classes.form}>
      <p>
        <label htmlFor="body">Body</label>
        <textarea id="body" required rows={3}  onChange={props.onBodychange}   />
        
      </p>
      <p>
        <label htmlFor="name">Author</label>
        <input type="text" id="name" required  onChange={props.onAuthorchange}/>
      </p>
    </form>
    
    </>
   
  );
}

export default NewPost;