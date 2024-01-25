//new.js

import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css'; // Import CodeMirror styles

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: "// Code",
        };
    }

    updateCode = (newCode) => {
        this.setState({
            code: newCode,
        });
    };

    render() {
        const options = {
            lineNumbers: true,
        };
        return <CodeMirror value={this.state.code} 
        onChange={this.updateCode} 
        options={options} />;
    }
}

export default App;
