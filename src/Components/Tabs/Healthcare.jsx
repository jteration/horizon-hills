import * as React from 'react';

class Healthcare extends React.Component {
  render() {
    return (
      <section className="section is-flex is-column">
        <h3 className="tab-heading">Top Tier Healthcare</h3>
        <img
          alt="Man surgerying"
          className="is-centered-img"
          width="1024"
          src={`${process.env.PUBLIC_URL}/img/surgery-thin.jpg`}
        />
        <hr />
        <p>
          <a
            href="https://www.cpwshop.com/purchaseprivilege.page"
            target="_blank"
            rel="noopener noreferrer"
          >
            UCHealth Medical Center of the Rockies
          </a>{' '}
          (8.8 miles from Horizon Hills) is located off of I-25 in Loveland,
          Colorado. This hospital specializes in heart and trauma care, but
          offers a full spectrum of services including orthopedics, neurology,
          Senior care, women’s care, and transplant services just to name a few.{' '}
        </p>
        <p>
          <a
            href="https://www.bannerhealth.com/locations/loveland/mckee-medical-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            McKee Medical Center
          </a>{' '}
          (5.6 miles from Horizon Hills) is just north of State Highway 34 on N.
          Boise Avenue in Loveland, Colorado. Founded in 1976, this acute care
          hospital has 132 beds and offers some of the most advanced care in the
          world in terms of cancer treatment, orthopedic care, and robotic
          surgery.{' '}
        </p>
        <p>
          <a
            href="https://healthy.kaiserpermanente.org/colorado-denver-boulder-mountain-northern/facilities/Loveland-Medical-Offices-300539"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kaiser Permanente Medical Offices
          </a>{' '}
          (9.1 miles from Horizon Hills) does not offer as many of the advanced
          services as the two previously mentioned medical institutions, but it
          does provide most basic services including pharmacy, laboratory, and
          medical imaging. Dermatology, endocrinology, and pain management
          services are also available at this Kaiser office.{' '}
        </p>
      </section>
    );
  }
}

export default Healthcare;
