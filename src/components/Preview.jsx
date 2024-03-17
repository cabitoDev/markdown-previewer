import React from "react";
import PropTypes from 'prop-types';

export const Preview = (props) => {
    return <>
        {props.text}
    </>
}

Preview.propTypes = {
    text: PropTypes.string
}

