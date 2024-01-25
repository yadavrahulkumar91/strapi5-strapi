import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import '@hackmd/codemirror/lib/codemirror.css';
import '@hackmd/codemirror/theme/material.css';



const CodeMirrorField = ({ onChange, value }) => {
    return (
        <CodeMirror
            value={value}
            options={{
                mode: 'javascript',
                lineNumbers: true,
            }}
            onBeforeChange={(editor, data, value) => {
                onChange(value);
            }}
        />
    );
};

export default CodeMirrorField;
