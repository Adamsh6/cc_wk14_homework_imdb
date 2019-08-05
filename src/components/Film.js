import React, {Component} from 'react';

class Film extends Component {
  render(){
    return (
      <a href={this.props.url}><h3>{this.props.children}</h3></a>
    )
  }
}

export default Film;
