import React, { Component } from 'react';
import { Link } from 'react-router';
import Dazer from '../components/Dazer';

class DazerIndexContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      dazers: []
    }
  }

  componentDidMount(){
    fetch('/api/v1/dazers')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(body => {
      this.setState({
        dazers: body
      })
    } )

    .catch(error => console.error(`Error in fetch: ${error.message}`));

  }
  render(){
    let dazerComponents =
      this.state.dazers.map((dazer) => {
        return(
        <Link to={`/dazers/${dazer.id}`} key={dazer.id}>
          <Dazer
            key={dazer.id}
            id={dazer.id}
            name={dazer.name}
          />
        </Link>
        )
      })
    return(
      <div>
        <h1>S A T U R D A Z E</h1>
        {dazerComponents}
      </div>
    )
  }
}

export default DazerIndexContainer;
