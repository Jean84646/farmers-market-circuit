import React from 'react';
import PropTypes from 'prop-types';

function CurrentProduce(props){
  
  return(
    <div>
      <h2>Month: {props.month}</h2>
      {props.selection.map((produce) =>
        <h4>{produce}</h4>
      )}
    </div>
  );
};

CurrentProduce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired,
};

export default CurrentProduce;
