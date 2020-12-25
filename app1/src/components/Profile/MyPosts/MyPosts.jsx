import React from 'react';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';

import s from './MyPosts.module.css';



const MyPosts = (props) => {

let postElements = props.postData
  .map ( (post) => <Post message={post.message} likes={post.likes} />);

let newPostElement = React.createRef();

let addPost = () => {
  props.dispatch(addPostActionCreator());
  
}

let onPostChange = () => {
  let text = newPostElement.current.value;
  let action = updateNewPostTextActionCreator(text);
  props.dispatch(action);
  
}

  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea 
          onChange={onPostChange} 
          ref={newPostElement} 
          value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;