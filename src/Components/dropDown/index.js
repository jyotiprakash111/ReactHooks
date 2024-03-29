import React, { Component } from 'react';

class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      colours: {}
    };
  }

  componentDidMount() {
    this.setState({
      countries: [
        {id: 'AFG', name: 'Afghanistan'},
        {id: 'ALA', name: 'Åland Islands'},
        {id: 'ALB', name: 'Albania'}
      ]
    });
  }


  render () {
    const { countries } = this.state;

    let countriesList = countries.length > 0
    	&& countries.map((item, i) => {
        console.log(item)
      return (
        <option key={i} value={item.id}>{item.name}</option>
      )
    }, this);

    return (
      <div>
        <select>
          {countriesList}
        </select>
      </div>
    );
  }
}

export default Countries;