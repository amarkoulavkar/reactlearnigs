import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";

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
        <Modal>
                <NewPost onBodychange={onbodychangeEventHandler} onAuthorchange={onauthorchangeEventHandler}/>
        </Modal>
            
             <ul>
                <Post body={entredBody} author={entredAuthor}/>
             </ul>
        </>
     )
}

export default PostsList;