import React from "react";
import PropTypes from "prop-types";
import css from './Loader.module.css';

export const Loader = props => (
    <svg
        className={css.Loader}
        width={props.width}
        height={props.height}
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        stroke={props.color}
        aria-label={props.label}
    >
        <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)" strokeWidth="2">
                <circle strokeOpacity=".5" cx="18" cy="18" r={props.radius} />
                <path d="M36 18c0-9.94-8.06-18-18-18">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 18 18"
                        to="360 18 18"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                </path>
            </g>
        </g>
    </svg>
);

Loader.propTypes = {
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    label: PropTypes.string,
    radius: PropTypes.number
};

Loader.defaultProps = {
    height: 80,
    width: 80,
    color: "blue",
    label: "audio-loading",
    radius: 18
};

export default Loader;