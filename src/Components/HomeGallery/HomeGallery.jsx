import * as React from 'react';
import Home from './Home';
import './HomeGallery.css';

const homeArr = [
  {
    name: 'Lifestyle D53',
    sqft: '1972 Square Feet',
    bedrooms: '3 Bedrooms',
    bathrooms: '2 Bathrooms',
    img: {
      src: '/img/house1.jpg',
      alt: 'Home',
    },
  },
  {
    name: 'Lifestyle 493',
    sqft: '2204 Square Feet',
    bedrooms: '4 Bedrooms',
    bathrooms: '2 Bathrooms',
    img: {
      src: '/img/house2.jpg',
      alt: 'Home',
    },
  },
  {
    name: 'Lifestyle 487',
    sqft: '1152 Square Feet',
    bedrooms: '3 Bedrooms',
    bathrooms: '2 Bathrooms',
    img: {
      src: '/img/house3.jpg',
      alt: 'Home',
    },
  },
  {
    name: 'Lifestyle 468',
    sqft: '1600 Square Feet',
    bedrooms: '3 Bedrooms',
    bathrooms: '2 Bathrooms',
    img: {
      src: '/img/house4.jpg',
      alt: 'Home',
    },
  },
];

class HomeGallery extends React.Component {
  state = {
    activeHome: 0,
  };
  _handleArrowClick = (direction) => {
    if (direction === 'left' && this.state.activeHome !== 0) {
      const currentHome = this.state.activeHome;
      const newHome = currentHome - 1;
      this.setState({ activeHome: newHome });
    }
    if (direction === 'right' && this.state.activeHome !== homeArr.length - 1) {
      const currentHome = this.state.activeHome;
      const newHome = currentHome + 1;
      this.setState({ activeHome: newHome });
    }
  };
  _renderHomes = () => {
    return (
      <Home
        _handleArrowClick={this._handleArrowClick}
        home={homeArr[this.state.activeHome]}
      />
    );
  };
  render() {
    return <div className="home-container">{this._renderHomes()}</div>;
  }
}

export default HomeGallery;
