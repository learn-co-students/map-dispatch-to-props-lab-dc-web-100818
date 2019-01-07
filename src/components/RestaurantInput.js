import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
//addRestaurant is our action creator - needs to take in a restaurant as an argument
import { connect } from 'react-redux';

export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state)
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

export default connect(null, { addRestaurant })(RestaurantInput)

// const mapDispatchToProps = dispatch =>{
//   return {
//     addRestaurant: dispatch(addRestaurant())
//   }
// }

//connect this component by wrapping RestaurantInput below
// export default connect(null, mapDispatchToProps)(RestaurantInput);
