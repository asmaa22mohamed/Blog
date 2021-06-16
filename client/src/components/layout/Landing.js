import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from '../footer/Footer';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <>
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='x-large' style={{ color: 'white' }}>
              Welcome to{' '}
              <h1 style={{ color: 'white' }}>
                <span>Awa</span>Inspires
              </h1>
            </h1>
            <p className='lead'>
              Create a user profile/portfolio, share posts and get help from
              other people
            </p>
            <div className='buttons'>
              <Link to='/register' className='btn btn-primary'>
                Sign Up
              </Link>
              <Link to='/login' className='btn btn-light'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
