import React, { useIntl } from "react-intl";
import New from './new';

const Input = React.forwardRef((props, ref) => {
    const { attribute, disabled, intlLabel, name, onChange, required, value } =
        props;

    const { formatMessage } = useIntl();

    return (
        <label>
            {formatMessage(intlLabel)}
            <New
                ref={ref}
                name={name}
                disabled={disabled}
                value={value}
                required={required}
                attribute={attribute} // Pass the attribute prop to the New component
                onChange={onChange}
            />
        </label>
    );
});

export default Input;
