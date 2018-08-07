import * as React from 'react';

class Home extends React.Component {
  render() {
    const { home, _handleArrowClick } = this.props;
    const name = home.name;
    const description = home.description;
    const sqft = home.sqft;
    const bedrooms = home.bedrooms;
    const bathrooms = home.bathrooms;
    const img = home.img;
    return (
      <React.Fragment>
        <h2>Example Homes</h2>
        <hr className="green-rule" />
        <p className="home-description has-text-justified">{description}</p>
        <div className="home-img-container">
          <div onClick={() => _handleArrowClick('left')} className="left-arrow">
            <i className="fas fa-caret-left fa-4x" />
          </div>
          <div className="img-container">
            <figure className="image is-16by9">
              <img src={img.src} alt={img.alt} />
            </figure>
          </div>
          <div
            onClick={() => _handleArrowClick('right')}
            className="right-arrow"
          >
            <i className="fas fa-caret-right fa-4x" />
          </div>
        </div>
        <div className="home-info-container content">
          <h3>{name}</h3>
          <p>
            {sqft}, {bedrooms}, {bathrooms}
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
