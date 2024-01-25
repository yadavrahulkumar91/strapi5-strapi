import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css'; // Import CodeMirror styles

class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: props.value || "// Code", // Set initial code based on props.value
        };
    }

    updateCode = (newCode) => {
        this.setState({
            code: newCode,
        });
        // Call the parent component's onChange with the updated code
        this.props.onChange({
            target: { name: this.props.name, type: this.props.attribute.type, value: newCode },
        });
    };

    render() {
        const options = {
            lineNumbers: true,
        };
        return <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} />;
    }
}

export default New;
