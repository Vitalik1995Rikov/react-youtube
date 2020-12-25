import React from 'react';

import s from './Post.module.css';

const Post = (props) => {
  return (


    <div className={s.item}>
      <img src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png" />
            {props.message}
      <div>
        <span>likes:</span>{props.likes}
      </div>
    </div>
  )


}

export default Post;