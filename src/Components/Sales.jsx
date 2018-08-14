import * as React from 'react';
import './Sales.css';

class Sales extends React.Component {
  render() {
    const { _toggleModal } = this.props;
    return (
      <section id="buy" className="sales section">
        <div className="columns">
          <div className="column content">
            <h2 id="purchase" className="sales-h2">
              Purchase a Custom Home in Campion Today
            </h2>
            <hr className="green-rule sales-rule" />
            <p>
              Groundbreaking for this development is scheduled for August 2018.
              Upon completion, Horizon Hills will be the site of more than 250
              single-family manufactured homes. Each 1500 sq/ft home will
              feature a dedicated foundation with a crawl space, 3 bedrooms, 2
              bathrooms, and an attached 2-car garage. The cost of these
              low-maintenance homes begins at $189,000 with additional options
              available.
            </p>
            <p>
              Lots are filling up quickly. If you are interested in securing one
              for yourself, reach out to Jess Rodriguez by phone at{' '}
              <a href="tel:1-970-800-4166">1-970-800-4166</a>, by email at{' '}
              <a href="mailto:contact@horizonhillscampionco.com">
                contact@horizonhillscampionco.com
              </a>{' '}
              or by filling out this{' '}
              <a onClick={() => _toggleModal()}>
                <strong>Contact Us</strong>
              </a>{' '}
              Form.
            </p>
            <h2>Why Move to Campion, Colorado?</h2>
            <p>
              If you’re tired of the hustle and bustle of city life or simply
              want a change of scenery, Campion, Colorado may be your ideal
              destination. Adults aged 55 and better who enjoy the great
              outdoors, privacy, and independence will find the community at
              Horizon Hills perfect for their needs. For those who love a view,
              this is likely to be the last manufactured home development that
              will ever be built west of I-25 with an unobstructed view of the
              front range.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Sales;
