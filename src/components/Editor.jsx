import React from "react";
import PropTypes from 'prop-types';
export const Editor = (props) => {
    const onChange = (e) => {
        if (e)
            props.setText(e.target.value)
    }
    return <>
        <textarea onChange={(val) => onChange(val)} id="editor" type="text" placeholder="Editor" />
    </>
}
Editor.propTypes = {
    setText: PropTypes.func
}
