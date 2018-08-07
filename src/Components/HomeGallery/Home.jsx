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
        <h2 className="homes-header">Example Homes</h2>
        <p className="has-text-justified">
          All of the homes in Horizon Hills will be pre-manufactured from
          Champion Homes, with several different options available based on your
          taste and needs. Select a larger layout with an extra bedroom, or drop
          the extra bedroom in favor of a larger Master Bedroom, Dining Room,
          and Living Room.
        </p>
        <p className="has-text-justified">
          Every home will be move-in ready when it's ready for your arrival. A
          gas range, 18-cubic-foot refrigerator, and wood cabinets highlight our
          beautiful kitchens, and a 60 inch bathtub in every Master Bathroom
          will draw out your stress and leave you as relaxed as you deserve.
        </p>
        <p className="has-text-justified">
          More information on individual units is available by request.
        </p>
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
