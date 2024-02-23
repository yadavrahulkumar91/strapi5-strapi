//index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { useIntl } from "react-intl";

import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';

import New from './new'


const Input = React.forwardRef((props, ref) => {
    const { attribute, disabled, intlLabel, name, onChange, required, value } =
        props; // these are just some of the props passed by the content-manager

    const { formatMessage } = useIntl();

    // const handleChange = (e) => {
    //     onChange({
    //         target: { name, type: attribute.type, value: e.currentTarget.value },
    //     });
    // };

    return (
        <label>
            {formatMessage(intlLabel)}
            {/* <input
                ref={ref}
                name={name}
                disabled={disabled}
                value={value}
                required={required}
                onChange={handleChange}
            /> */}
            <New
                ref={ref}
                name={name}
                disabled={disabled}
                value={value}
                required={required}
                // onChange={handleChange}
                onChange={onChange
                }
            />
        </label>
    );
});

export default Input;