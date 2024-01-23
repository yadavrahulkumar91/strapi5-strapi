
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { useIntl } from "react-intl";

import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';


// import sampleData from "./sampledata";

// import Codemirror from "./codemirror"
import Codemirror2 from "./codemirror2"
import { UnControlled as CodeMirror } from 'react-codemirror2'

const Input = React.forwardRef((props, ref) => {
    const { attribute, disabled, intlLabel, name, onChange, required, value } =
        props; // these are just some of the props passed by the content-manager

    const { formatMessage } = useIntl();

    const handleChange = (e) => {
        onChange({
            target: { name, type: attribute.type, value: e.currentTarget.value },
        });
    };

    return (
        <label>
            {formatMessage(intlLabel)}
            <input
                ref={ref}
                name={name}
                disabled={disabled}
                value={value}
                required={required}
                onChange={handleChange}
            />

            {/* <JSONInput
              
                locale={locale}
                ref={ref}
                name={name}
                disabled={disabled}
                value={value}
                required={required}
                onChange={handleChange}
            /> */}

            {/* <div style={{ maxWidth: "1400px", maxHeight: "100%" }}>
                <JSONInput
                    placeholder={sampleData} // data to display
                    theme="light_mitsuketa_tribute"
                    locale={locale}
                    colors={{
                        string: "#DAA520" // overrides theme colors with whatever color value you want
                    }}
                    height="550px"

                    ref={ref}
                    name={name}
                    disabled={disabled}
                    value={value}
                    required={required}
                    onChange={handleChange}
                />
            </div> */}
            {/* <Codemirror
                ref={ref}
                name={name}
                disabled={disabled}
                value={value}
                required={required}
                onChange={handleChange} /> */}


            {/* <Codemirror2
        
                // options={{
                //     mode: 'xml',
                //     theme: 'material',
                //     lineNumbers: true
                // }}
                // onChange={(editor, data, value) => {
                // }}

                ref={ref}
                name={name}
                disabled={disabled}
                value={value}
                required={required}
                onChange={handleChange} */}
            />

        </label>
    );
});

export default Input;