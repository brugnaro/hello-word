import React from 'react';

import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';

class StoreLocator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMap: 'none.jpg'
    };
    this.shops = [
      {
        'address': '123 Portland Dr',
        'location': 'Portland'
      },
      {
        'address': '123 Astoria Dr',
        'location': 'Astoria'
      },
      {
        'address': '',
        'location': ''
      }
    ]
  }

  render() {
    let storeButtons = this.shops.map((shop, index) => {
      return (
        <Button key={index} location={shop.location} />
      )
    })
    return(
      <>
        <Header />
          <div>
            {storeButtons}
          </div>
          <Map imagename={this.state.currentMap} location={this.props.location} />
      </>
    );
  }
}

export default StoreLocator;