import * as React from "react";
import { useIntl } from "react-intl";
import CodeMirror from 'codemirror';
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

    React.useEffect(() => {
        const editor = CodeMirror(ref.current, {
            value: value,
            mode: 'javascript', // Set the appropriate mode for your use case
            theme: 'material', // Choose a theme
            lineNumbers: true, // Optionally, show line numbers
            // Add more options based on your requirements
        });

        editor.on('change', handleChange);

        return () => {
            editor.off('change', handleChange);
        };
    }, [ref, value]);

    return (
        <div>
            <label>{formatMessage(intlLabel)}</label>
            <div
                ref={ref}
                name={name}
                disabled={disabled}
                value={value}
                required={required}
                onChange={handleChange}
            />
        </div>
    );
});

export default Input;
