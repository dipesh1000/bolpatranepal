import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaRegEdit } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import EditProfile from './EditProfile';
import { fetchProfile } from './redux/Profile.actions';
import UserAboutDetails from './UserAboutDetails';

const UserAboutBox = () => {
  const dispatch = useDispatch();
  const [showEditForm, setShowEditForm] = useState(false);
  const { user, loading } = useSelector((state) => state.profile);
  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  console.log(user, 'line 15');
  const [editForm, setEditForm] = useState(false);
  const handleEditForm = (e) => {
    e.preventDefault();
    setEditForm(true);
    console.log(editForm, 'handle Edit');
  };

  const handleChangeEditForm = (e) => {
    e.preventDefault();
    setShowEditForm(!showEditForm);
  };
  return (
    <div className="user_about_box">
      <div className="user_about_container">
        <div className="box_title_row">
          <div className="box_title">
            {showEditForm ? 'Update About' : 'About'}
          </div>
          <Button type="button" onClick={handleEditForm}>
            <FaRegEdit onClick={handleChangeEditForm} />
          </Button>
        </div>
        {showEditForm ? (
          <EditProfile
            data={user}
            isLoading={loading}
            setShowEditForm={setShowEditForm}
          />
        ) : (
          <UserAboutDetails data={user} isLoading={loading} />
        )}
      </div>
    </div>
  );
};

export default UserAboutBox;
