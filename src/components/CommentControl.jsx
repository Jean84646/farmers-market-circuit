import React from "react";
import Comment from './Comment';
import { v4 } from 'uuid';

class CommentControl extends React.Component {

  constructor(props) {
    super(props);
    let _comment = null;
    this.state = {
      masterCommentList: [
        {
          comment: 'I like you a Latte!',
          like: 1,
          id: '1'
        },
        {
          comment: 'Are you locally source?',
          like: 2,
          id: '2'
        },
        {
          comment: 'haha look at that guy above me, bite me!!!!!',
          like: 1,
          id: '3'
        }
      ]
    };
    this.handleNewCommentFormSubmission = this.handleNewCommentFormSubmission.bind(this);
    this.addNewComment = this.addNewComment.bind(this);
  }

  handleNewCommentFormSubmission(event) {
    event.preventDefault();
    this.addNewComment({comment: this._comment.value, like: 0, id: v4()});
    this._comment.value = '';
  }

  addNewComment(newComment) {
    let commentList = this.state.masterCommentList.slice();
    commentList.push(newComment);
    this.setState({masterCommentList: commentList});
  }

  handleClickLike(id) {
    let commentList = this.state.masterCommentList.slice();
    commentList.map((entry) => {
      console.log("test");
      if(entry.id === id) {
        entry.like++;
      }}
    );
    this.setState({masterCommentList: commentList});
  }

  render() {
    var textField = {
      height: '200',
      width: '600',
      padding: '10',
      margin: '20'
    }
    return (
      <div>
        <h3>Leave Comment</h3>
        <form onSubmit={this.handleNewCommentFormSubmission}>
          <textarea style={textField} ref={(textarea) => {this._comment = textarea;}} placeholder="Comment"></textarea>
          <br/>
          <button type="submit">Submit</button>
        </form>
        <hr/>
          {this.state.masterCommentList.map((entry) =>
            <Comment comment={entry.comment}
                     like={entry.like}
                     id={entry.id}
                     onClickLike={this.handleClickLike}
                     key={entry.id} />
          )}
      </div>
    );
  }

}


export default CommentControl;
