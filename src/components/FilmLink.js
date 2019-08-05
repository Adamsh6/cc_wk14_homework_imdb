import React, {Component} from 'react';

class FilmLink extends Component {
  render(){
    return(
      <h2><a href={this.props.link}>{this.props.children}</a></h2>
    )
  }
}

export default FilmLink;
