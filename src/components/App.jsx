import React from 'react';
import Header from './Header';
import Schedule from './Schedule';
import SeasonalProduce from './SeasonalProduce';
import bg from './../img/bg1.jpg';
import CommentControl from './CommentControl'
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Home';


function App(){
  var backgroundStyle = {
    backgroundImage: `url(${bg})`
  }
  var containerStyle = {
    backgroundColor: 'rgb(255, 255, 255, 0.4)'
  }
  return (
    <div style={backgroundStyle}>
      <div className="container" style={containerStyle}>
        <Header/>
        <Link to='/'>Home</Link> | <Link to='/comment'>Leave Comment</Link>
        <Switch>
          <Route exact path='/comment' component={CommentControl} />
          <Route exact path='/' component={Home} />
          <Route exact path='/January' component={Home} />
          <Route exact path='/February' component={Home} />
          <Route exact path='/March' component={Home} />
          <Route exact path='/April' component={Home} />
          <Route exact path='/May' component={Home} />
          <Route exact path='/June' component={Home} />
          <Route exact path='/July' component={Home} />
          <Route exact path='/August' component={Home} />
          <Route exact path='/September' component={Home} />
          <Route exact path='/October' component={Home} />
          <Route exact path='/November' component={Home} />
          <Route exact path='/December' component={Home} />
        </Switch>
        <hr/>
      </div>
    </div>
  );
}

export default App;
