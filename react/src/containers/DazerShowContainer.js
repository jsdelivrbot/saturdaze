import React, { Component } from 'react';
import Dazer from '../components/Dazer';

class DazerShowContainer extends Component {
  constructor(props){
    super(props);
    this.state= {
    dazers: {}
    }
  }

  componentDidMount() {
    fetch(`/api/v1/dazers/${this.props.params.id}/`)
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
    return(
      <div>
        <Dazer
          key={this.state.dazers.id}
          id={this.state.dazers.id}
          name={this.state.dazers.name}
          description={this.state.dazers.description}
        />
      </div>
    )
  }
}

export default DazerShowContainer;
