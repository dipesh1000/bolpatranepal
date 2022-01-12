import React from 'react';

const UserInfoBox = () => {
  return (
    <div className="user_info_box">
      <div class="user_info">
        <div className="user_image_container">
          <img
            src="https://media.ttmind.com/Media/tech/article_51_7-18-20181-15-10PM.jpg"
            alt=""
          />
        </div>
        <h3>Ram Bahadur Karki</h3>
      </div>
      <div class="user_info_meta">
        <ul>
          <li>
            User type <span>Trial</span>
          </li>
          <li>
            Joined on
            <span>2021-12-12</span>
          </li>
          <li>
            Expires on
            <span>2021-12-12</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserInfoBox;
