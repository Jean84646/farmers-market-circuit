import React from 'react';
import Schedule from './Schedule';
import SeasonalProduce from './SeasonalProduce';


function Home(){
  var containerStyle = {
    backgroundColor: 'rgb(255, 255, 255, 0.4)'
  }
  return (
    <div className="container" style={containerStyle}>
      <div className="row">
        <div className="col-md-6">
          <Schedule/>
        </div>
        <div className="col-md-6">
          <SeasonalProduce/>
        </div>
      </div>
    </div>
  );
}

export default Home;
