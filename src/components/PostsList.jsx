import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";

function PostsList(){
    const [entredBody, setEnterendBody] = useState('');
    const [entredAuthor, setEnterendAuthor] = useState('');
    function onbodychangeEventHandler(event){
        setEnterendBody(   event.target.value); 
    }
     function onauthorchangeEventHandler(event){
        setEnterendAuthor(   event.target.value);
    }
     return(
        <>
            <NewPost onBodychange={onbodychangeEventHandler} onAuthorchange={onauthorchangeEventHandler}/>
             <ul>
                <Post body={entredBody} author={entredAuthor}/>
             </ul>
        </>
     )
}

export default PostsList;