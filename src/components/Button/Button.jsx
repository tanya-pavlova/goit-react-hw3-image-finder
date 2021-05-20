import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.module.css';

const Button = ({ onClick }) => {
    return (
        <button
            className={styles.Button}
            type="button"
            data-action="load-more"
            onClick={onClick}
        >
            Show more
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};
export default Button;