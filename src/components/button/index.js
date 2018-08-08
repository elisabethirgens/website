import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './button.module.scss';

const Button = ({ to, text }) => (
  <Link to={to} className={`buttonNormal ${styles.button}`}>
    {text}
    <FontAwesomeIcon icon={['fas', 'arrow-right']} />
  </Link>
);

Button.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
};

export default Button;