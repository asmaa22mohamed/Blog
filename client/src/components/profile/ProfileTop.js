import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    user: { name, image, email },
  },
}) => {
  return (
    <div className='profile-top bg-primary p-2'>
      <img className='round-img my-1' src='' alt='' />
      <h1 className='large'>{name}</h1>
      <p className='lead'>{email}</p>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
