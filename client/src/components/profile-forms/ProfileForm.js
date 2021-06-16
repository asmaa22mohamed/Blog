import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  createProfile,
  getCurrentProfile,
  Upload_img,
} from '../../actions/profile';

const initialState = {
  name: '',
  email: '',
};

const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
  Upload_img,
  auth,
}) => {
  const [formData, setFormData] = useState(initialState);
  const [img_upload, Setimg_upload] = useState('');
  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const { name, email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, profile ? true : false);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Edit Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Add some changes to your profile
      </p>
      <form
        class='form my-1'
        onSubmit={(e) => {
          e.preventDefault();

          Upload_img(auth.user._id, img_upload);
        }}
      >
        <input
          class='choose-file'
          type='file'
          name='image '
          onChange={(e) => Setimg_upload(e)}
        />

        <button class='upload btn btn-primary' type='submit'>
          Upload
        </button>
      </form>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='username'
            name='name'
            value={name}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='email'
            name='email'
            value={email}
            onChange={onChange}
          />
        </div>

        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  Upload_img: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  createProfile,
  getCurrentProfile,
  Upload_img,
})(ProfileForm);
