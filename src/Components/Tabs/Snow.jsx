import * as React from 'react';

class Snow extends React.Component {
  render() {
    return (
      <section className="section is-flex is-column">
        <h3 className="tab-heading">
          Skiing, Snowboarding, and Fun in the Rockies
        </h3>
        <img
          alt="Winter park"
          className="is-centered-img"
          width="1024"
          src="./img/winter.jpg"
        />
        <hr />
        <p>
          Northern Colorado is home to some of the best snow in the United
          States and residents of Horizon Hills don’t have to travel far to
          enjoy it. Skiing, snowboarding, snowshoeing, snowmobiling, and other
          snow sports are available to enjoy at resorts dotting the mountains.{' '}
        </p>
        <p>
          <a
            href="https://www.eldora.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eldora Mountain Resort
          </a>{' '}
          (54.4 miles from Horizon Hills) is located just west of Boulder,
          Colorado and boasts 680 acres of skiable terrain that is sure to
          entertain and challenge skiers of all skill levels. The Nordic Center
          is a can’t miss feature at Eldora and consists of 40 kilometers of
          trails that are perfect for cross-country skiing, skate skiing, and
          snowshoeing.{' '}
        </p>
        <p>
          <a
            href="https://skiloveland.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Loveland Ski Area
          </a>{' '}
          (101 miles from Horizon Hills) can be found west of Georgetown near
          the Continental Divide. When conditions permit, this ski resort
          features free snowcat skiing. These 18 passenger vehicles allow skiers
          to access some of the most exhilarating terrain in the Loveland Ski
          Area that is unreachable by lift. Other unique amenities including a
          childcare facility, 9 restaurants, and 2 sport shops are also
          available.
        </p>
        <p>
          <a
            href="https://www.winterparkresort.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Winter Park Resort
          </a>{' '}
          (109 miles from Horizon Hills) has been one of Colorado’s top ski
          destinations for more than 75 years. It’s easy to see why considering
          there are more than 3,000 skiable acres with the highest topping
          12,060 feet. You won’t have to wait long at this resort, since its
          lifts have a capacity to move more than 40,000 people in an hour.
        </p>
      </section>
    );
  }
}

export default Snow;
