import React, { useState } from "react";

import { useIntl } from "react-intl";
import { JSONInput } from '@strapi/design-system';


const Input = React.forwardRef((props, ref) => {
    const { attribute, disabled, intlLabel, name, onChange, required, value } =
        props; // these are just some of the props passed by the content-manager

    const { formatMessage } = useIntl();

    const handleChange = (jsonValue) => {
        onChange({
            target: { name, type: attribute.type, value: jsonValue },
        });
    };


    return (
        <label>
            {formatMessage(intlLabel)}
            <JSONInput
                ref={ref}
                name={name}
                disabled={disabled}
                required={required}
                value={value}
                onChange={handleChange}
            />

        </label>
    );
});

export default Input;