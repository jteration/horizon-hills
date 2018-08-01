import * as React from 'react';

class Hunting extends React.Component {
  render() {
    return (
      <section className="section is-flex is-column">
        <h3 className="tab-heading">Hunting The Front Range</h3>
        <img
          alt="Pineridge"
          className="is-centered-img"
          width="1024"
          src={`${process.env.PUBLIC_URL}/img/pineridge-thin.jpg`}
        />
        <hr />
        <p>
          From elk to pheasant to goat and everything in between, the hunting
          grounds around Horizon Hills are full of game. No matter if you’re
          using a bow or a gun, there are plenty of opportunities to bag the big
          one. Just remember to purchase the appropriate license from{' '}
          <a
            href="https://www.cpwshop.com/purchaseprivilege.page"
            target="_blank"
            rel="noopener noreferrer"
          >
            Colorado Parks and Wildlife
          </a>.
        </p>
        <p>
          <a
            href="https://www.stillrovenfarm.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stillroven Farm
          </a>{' '}
          (9.6 miles from Horizon Hills) was founded in 1970 in Berthoud,
          Colorado and is the oldest private upland hunting club in Colorado.
          This is a family-owned, membership-only bird hunting preserve that
          features 30 indoor/outdoor kennels that make sure your canine
          companion enjoys their time spent hunting as much as you do.{' '}
        </p>
        <p>
          <a
            href="http://berthoudsportsmansclub.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Berthoud Sportsmans Club
          </a>{' '}
          is a private organization limited to 135 members that maintains
          hunting and fishing rights around Loveland Lake just northwest of
          Berthoud. The wait list to join the Sportsmans Club can be as long as
          three years for new residents and you must be endorsed by two current
          members. Time to start making friends if you want to enjoy these great
          outdoors!
        </p>
      </section>
    );
  }
}

export default Hunting;
