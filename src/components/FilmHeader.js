import React, {Component} from 'react';

class FilmHeader extends Component {
  render(){
    return(
    <>
    <h2>{this.props.children}</h2>
    </>
  )
  }
}

export default FilmHeader;
