import './editor.css'

import React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';



class PostEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = editorState => this.setState({editorState});
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
      }

    _onH1Click() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'HEADING'));
    }
    _onH2Click() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
    }
    _onH3Click() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
    }
    _onBoldClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }
    _onUnderlineClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
    }
    _onItalicClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
    }
    _onSTRIKETHROUGHClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'STRIKETHROUGH'));
    }
    _onCodeClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'CODE'));
    }

    handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
    
        if (newState) {
          this.onChange(newState);
          this.convertContentToHTML()
          return 'handled';
        }
    
        return 'not-handled';
      }

      convertContentToHTML = () => {
        // let currentContentAsHTML = convertToHTML(this.state.editorState.getCurrentContent());
        // setConvertedContent(currentContentAsHTML);
    }
    
    render() {
        console.log(this.state.editorState)
        return (
            <div className='editorContainer'>
                {/* <div className='toolbar'>
                    <button onClick={this._onH1Click.bind(this)}>H1</button>
                    <button onClick={this._onH2Click.bind(this)}>H2</button>
                    <button onClick={this._onH3Click.bind(this)}>H3</button>
                    <button onClick={this._onBoldClick.bind(this)}>Bold</button>
                    <button onClick={this._onUnderlineClick.bind(this)}>Underline</button>
                    <button onClick={this._onItalicClick.bind(this)}>Italic</button>
                    <button onClick={this._onCodeClick.bind(this)}>Code</button>
                    <button onClick={this._onSTRIKETHROUGHClick.bind(this)}>STRIKETHROUGH</button>
                </div>
                <Editor
                editorState={this.state.editorState}
                handleKeyCommand={this.handleKeyCommand}
                onChange={this.onChange}
                /> */}
            </div>
        );
    }
}

export default PostEditor;