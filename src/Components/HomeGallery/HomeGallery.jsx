import * as React from 'react';
import Home from './Home';
import './HomeGallery.css';

const homeArr = [
  {
    name: 'Lifestyle D53',
    description:
      "Use what you see, don't plan it. Don't hurry. Take your time and enjoy. Very easy to work these to death. We'll play with clouds today.",
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
    description:
      "Let's have a happy little tree in here. Just think about these things in your mind and drop em' on canvas. In this world, everything can be happy.",
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
    description:
      "How to paint. That's easy. What to paint. That's much harder. Nice little clouds playing around in the sky. You got your heavy coat out yet? It's getting colder. We can fix anything.",
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
    description:
      "We don't want to set these clouds on fire. Just beat the devil out of it. You can work and carry-on and put lots of little happy things in here. That's what makes life fun. That you can make these decisions. That you can create the world that you want.",
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
    return (
      <section className="section">
        <div className="columns">
          <div className="home-container column is-8 is-offset-2 content">
            {this._renderHomes()}
          </div>
        </div>
      </section>
    );
  }
}

export default HomeGallery;
