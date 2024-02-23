// //new.js

// import React, { Component } from 'react';
// import CodeMirror from 'react-codemirror';
// import 'codemirror/lib/codemirror.css'; // Import CodeMirror styles

// // class App extends Component {
//  function App({onChange, name, value, attribute})   {
//     constructor(props) {
//         super(props);
//         this.state = {
//             code: "// Code",
//         };
//     }

//     updateCode = (newCode) => {
//         this.setState({
//             code: newCode,
//         });
//     };

//     render() {
//         const options = {
//             lineNumbers: true,
//         };
//         return <CodeMirror value={this.state.code} 
//         // onChange={this.updateCode} 
//             onChange={(e) =>
//                 onChange({
//                     target: { name, value: e.currentTarget.value, type: attribute.type },
//                 })
//             }
//         options={options} />;
//     }
// }

// export default App;



import React, { useState } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css'; // Import CodeMirror styles

function App({ onChange, name, value, attribute }) {
    const [code, setCode] = useState("// Code");

    const updateCode = (newCode) => {
        setCode(newCode);
    };

    const options = {
        lineNumbers: true,
    };

    return (
        <CodeMirror
            value={code}
            onChange={(e) =>
                onChange({
                    target: { name, value: e.target.value, type: attribute.type },
                })
            }
            options={options}
        />
    );
}

export default App;
