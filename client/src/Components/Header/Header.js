import React from 'react';
import PropTypes from 'prop-types';
import css from './Header.css';

export const Header = (props) => {
  return(
    <div className={css.Header}>
      <i className={props.icon} aria-hidden="true"></i>
      <h2 className={css.title}>{props.title}</h2>
    </div>
  )
}
Header.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string
};

Header.defaultProps = {
  title: 'This is awesome!',
  icon: 'fa fa-id-card'
};
export default Header