import React from 'react';
import PropTypes from 'prop-types';

class Comment extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      showEditForm: false
    };
    this.background = null;
    if (this.props.colorCount%2) {
      this.background = 'oddBg';
    } else {
      this.background = 'evenBg';
    }
    this.handleToggleEditForm = this.handleToggleEditForm.bind(this);
    this.handleClickLike = this.handleClickLike.bind(this);
    this.handleClickDislike = this.handleClickDislike.bind(this);
  }
  handleClickLike(){
    this.props.onClickLike(this.props);
  }
  handleClickDislike(){
    this.props.onClickDislike(this.props);
  }
  handleToggleEditForm(){
    this.setState({showEditForm: true});
  }
  render() {
    return(
      <div className={this.background}>
        <style jsx>{`
            .iHaveSpace {
              margin-left: 10px;
              margin-right: 10px;
            }
            .oddBg {
              background-color: rgb(255, 255, 255, 0.6);
            }
            .evenBg {
              background-color: rgb(255, 255, 255, 0.3);
            }
            .pencilStyle {
              float: right;
              margin-right: 25px;
            }
          `}</style>
        <h6>{this.props.comment}</h6>
        <i className="fa fa-thumbs-up iHaveSpace" onClick={this.handleClickLike}></i>{this.props.like}
        <i className="fa fa-thumbs-down iHaveSpace" onClick={this.handleClickDislike}></i>
        <i className="fa fa-pencil pencilStyle" onClick={this.handleToggleEditForm}>...</i>
        <hr/>
      </div>
    );
  };
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  like: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onClickLike: PropTypes.func,
  onClickDislike: PropTypes.func,
  colorCount: PropTypes.number,
};

export default Comment;
