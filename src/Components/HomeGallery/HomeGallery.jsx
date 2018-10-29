import * as React from 'react';
import Slideshow from './Slide/SlideShow';
import './HomeGallery.css';

const imgs = [
  '/img/HomeGallery/Buckhorn-1.jpg',
  '/img/HomeGallery/Buckhorn-2.jpg',
  '/img/HomeGallery/Buckhorn-3.jpg',
  '/img/HomeGallery/Buckhorn-4.jpg',
  '/img/HomeGallery/Buckhorn-5.jpg',
  '/img/HomeGallery/Buckhorn-6.jpg',
  '/img/HomeGallery/Buckhorn-7.jpg',
  '/img/HomeGallery/Buckhorn-8.jpg',
  '/img/HomeGallery/Buckhorn-9.jpg',
];

class HomeGallery extends React.Component {
  render() {
    return (
      <div className="columns">
        <div className="home-container column is-8 is-offset-2 content">
          <h2 className="content has-text-centered siteplan-heading">
            The Siteplan
          </h2>
          <figure className="image is-3x2">
            <img src="/img/Siteplan.jpg" />
          </figure>
          <h2 className="homes-header">Example Homes</h2>
          <p className="has-text-justified">
            All of the homes in Horizon Hills will be pre-manufactured from
            Champion Homes, with several different options available based on
            your taste and needs. Select a larger layout with an extra bedroom,
            or drop the extra bedroom in favor of a larger Master Bedroom,
            Dining Room, and Living Room.
          </p>
          <p className="has-text-justified">
            Every home will be turnkey when it's ready for your arrival. A gas
            range, 18-cubic-foot refrigerator, and wood cabinets highlight our
            beautiful kitchens, and a 60 inch bathtub in the Master Bathroom
            will draw out your stress and leave you as relaxed as you deserve.
          </p>
          <div className="slide-container">
            <Slideshow
              images={imgs}
              duration={5000}
              transitionDuration={1500}
            />
          </div>
          <p className="has-text-centered">
            More information on individual units is available by request.
          </p>
          <div className="buttons is-centered">
            <a
              onClick={() => this.props._toggleModal('Home Gallery')}
              className="button is-danger is-medium"
            >
              Request Info
            </a>
            <a
              href="/Horizon Hills Brochure.pdf"
              onClick={() => this.props._didDownload()}
              className="button is-danger is-medium"
              download
            >
              2018 Decor Brochure
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeGallery;
