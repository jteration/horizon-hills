import * as React from 'react';
import Home from './Home';
import './HomeGallery.css';

const homeArr = [
  {
    name: 'Lifestyle D53',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et enim in massa pulvinar porttitor. Aliquam vestibulum enim sed consequat blandit. Nunc molestie dolor odio, at luctus ligula viverra aliquet. Quisque tempus lectus at vulputate pulvinar. Aenean aliquam eros in velit lobortis lobortis. Etiam vulputate quam ut neque facilisis, ut feugiat odio fermentum. Maecenas eget massa lectus. Quisque feugiat dui non arcu porttitor fermentum non non sem. Proin molestie venenatis dolor quis varius.',
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
      'Pellentesque nec purus quam. Maecenas dui augue, consequat non gravida et, scelerisque quis arcu. Praesent dignissim magna libero, porttitor facilisis massa porttitor pharetra. Nam non cursus lectus. Duis ullamcorper nunc lectus, vel maximus metus accumsan ac. Nam sagittis nisl ut consectetur sollicitudin. Mauris at lacinia felis. Maecenas sed euismod erat. Mauris suscipit ex ac elit scelerisque blandit. Sed luctus sit amet felis et laoreet. Vestibulum vestibulum quam sed tellus pharetra, at rutrum quam dapibus. Phasellus at efficitur ipsum. Proin consectetur non elit eget cursus. Morbi venenatis venenatis nisi vel sollicitudin.',
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
      'In hac habitasse platea dictumst. Integer ultricies, ex non scelerisque lacinia, arcu nisi ullamcorper dolor, nec lacinia nibh tortor ut augue. Cras ac consectetur lorem. Donec sit amet porta leo, eget ultricies nunc. Integer varius velit consectetur massa scelerisque ullamcorper. Maecenas eleifend tempus eros eu imperdiet. Vivamus eu massa quis ex tempor condimentum.',
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
      'Quisque accumsan vel diam eu rhoncus. Sed vel imperdiet ipsum, a dignissim lacus. Phasellus porttitor magna at nulla consectetur, vitae pulvinar erat gravida. Integer suscipit vehicula sapien et cursus. Proin vulputate neque enim, porttitor tincidunt diam venenatis vel. Aliquam libero neque, tincidunt in sodales et, pharetra in lacus. Sed vestibulum eros ante, a accumsan neque euismod ut. Nam a leo consectetur massa maximus volutpat. In et diam diam. Proin non purus leo.',
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
      <div className="columns">
        <div className="home-container column is-8 is-offset-2 content">
          {this._renderHomes()}
        </div>
      </div>
    );
  }
}

export default HomeGallery;
