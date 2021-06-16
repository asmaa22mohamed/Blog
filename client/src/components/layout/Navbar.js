import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/profiles'></Link>
      </li>
      <li>
        <Link to='/posts'>Blogs</Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' /> <span className='hide-sm'>Profile</span>
        </Link>
      </li>
      <li>
        <Link onClick={logout} to='/'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/posts'>Blogs</Link>
      </li>
      <li>
        <Link to='/profiles'>People</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <h1
            style={{
              float: 'left',
              height: 'inherit',
              marginLeft: '2em',
              color: 'white',
            }}
          >
            <span
              style={{
                margin: '3px',
                fontFamily: 'Candal, serif',
                color: '#05f7ff',
              }}
            >
              Awa
            </span>
            Inspires
          </h1>
        </Link>
      </h1>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
