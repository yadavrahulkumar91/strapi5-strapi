import * as React from "react";
import { useIntl } from "react-intl";
import { Controlled } from 'react-codemirror2';
import '@hackmd/codemirror/mode/javascript/javascript';

const Input = React.forwardRef((props, ref) => {
    const { attribute, disabled, intlLabel, name, onChange, required, value } =
        props;

    const { formatMessage } = useIntl();

    const handleChange = (editor, data, value) => {
        onChange({
            target: { name, type: attribute.type, value },
        });
    };

    return (
        <div>
            <label>{formatMessage(intlLabel)}</label>
            {/* <Controlled
                ref={ref}
                value={value}
                onBeforeChange={(editor, data, value) => handleChange(editor, data, value)}
                options={{
                    mode: 'javascript', // Set the appropriate mode for your use case
                    theme: 'material', // Choose a theme
                    lineNumbers: true, // Optionally, show line numbers
                    // Add more options based on your requirements
                }}
            /> */}
        </div>
    );
});

export default Input;
