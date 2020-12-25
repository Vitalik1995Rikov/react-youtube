import React from 'react';

import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg" />
      </div>
      <div className={s.descriptionBlock}>
        ava+descrirtion
      </div>
    </div>
  )
}

export default ProfileInfo;