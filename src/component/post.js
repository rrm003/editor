import './post.css'
// import './new-editor.css'
import NewEditor from './new-editor'
import { EditorState, Editor, convertFromRaw } from 'draft-js';
import React, { Component } from 'react';


class Post extends Component {
    constructor(props) {
        super(props);
        this.handleClick.bind(this);
        this.state = { };
        const content = window.localStorage.getItem('content');
        if (content) {
            this.state.editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(content)));
        } else {
            this.state.editorState = EditorState.createEmpty();
        }
    }

    editPost = () =>{
        alert("Spank Me")
    }

    handleClick = () => {
        this.props.setStateOfParent("");
    }

    render() {
        if (!this.state.editorState) {
            return (
              <h3 className="loading">Loading...</h3>
            );
        }
        let EditButton, EditorDisplay;
        if (this.props.editable){
            EditButton=<button onClick={this.editPost}>Edit</button>
            EditorDisplay = <NewEditor editable={this.props.editable} />
        }else{
            EditorDisplay = <Editor editorState={this.state.editorState}/>
        }
        return (
            <div className='postContainer'>
                {EditButton }
                <button onClick={this.handleClick}>Close</button>
                {EditorDisplay}
            </div>
        );
    }
}

export default Post;