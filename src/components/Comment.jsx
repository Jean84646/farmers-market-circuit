import React from 'react';
import PropTypes from 'prop-types';

function Comment(props){
  function clickLike(){
    props.onClickLike(props);
  }
  function clickDislike(){
    props.onClickDislike(props);
  }
  let iHaveSpace = {
    marginLeft: '10',
    marginRight: '10'
  }
  return(
    <div>
      <h6>{props.comment}</h6>
      <i className="fa fa-thumbs-up" style={iHaveSpace} onClick={clickLike}></i>{props.like}
      <i className="fa fa-thumbs-down" style={iHaveSpace} onClick={clickDislike}></i>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  like: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onClickLike: PropTypes.func,
  onClickDislike: PropTypes.func
};

export default Comment;
