import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import DazerIndexContainer from './containers/DazerIndexContainer';
import DazerShowContainer from './containers/DazerShowContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <Router history={browserHistory}>
        <Route path='/' >
          <IndexRoute component={DazerIndexContainer} />
          <Route path="/dazers" component={DazerIndexContainer}/>
          <Route path="/dazers/:id" component={DazerShowContainer}/>
        </Route>
      </Router>
    );
  }
}

export default App;
