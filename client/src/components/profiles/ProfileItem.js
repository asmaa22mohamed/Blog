import React from 'react';
import PropTypes from 'prop-types';

const ProfileItem = ({ profile }) => {
  console.log(profile);
  return (
    <div className='profile bg-light'>
      {profile.image && (
        <img
          src={`http://localhost:5000/api/upload/show/${image}`}
          alt=''
          className='round-img'
        />
      )}
      <div>
        <h2>{profile.name}</h2>
        <p>{profile.email}</p>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
