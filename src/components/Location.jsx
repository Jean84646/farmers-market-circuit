import React from 'react';
import PropTypes from 'prop-types';

function Location(props){
  var locationStyle = {
    border: '1px solid #4d8c3c',
    padding: '10'
  }
  var dayStyle = {
    textAlign: 'center',
    fontWeight: 'bold'
  }
  return(
    <div style={locationStyle}>
      <h3 style={dayStyle}>{props.day}</h3>
      <h3>Location: {props.location}</h3>
      <h3>Hours: {props.hours}</h3>
      <h3>Booth: {props.booth}</h3>
    </div>
  );
};

Location.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired,
};

export default Location;
