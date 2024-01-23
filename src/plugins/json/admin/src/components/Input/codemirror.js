import { basicSetup, EditorView } from "codemirror"
import { keymap } from "@codemirror/view"

function moveToLine(view) {
    let line = prompt("Which line?")
    if (!/^\d+$/.test(line) || +line <= 0 || +line > view.state.doc.lines)
        return false
    let pos = view.state.doc.line(+line).from
    view.dispatch({ selection: { anchor: pos }, userEvent: "select" })
    return true
}

new EditorView({
    doc: "a\nb\nc\n",
    extensions: [
        keymap.of([{ key: "Alt-l", run: moveToLine }]),
        basicSetup,
    ],
    parent: document.body
})
