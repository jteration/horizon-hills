import * as React from 'react';

class Golfing extends React.Component {
  render() {
    return (
      <section className="section is-flex is-column">
        <h3 className="tab-heading">World Class Golf</h3>
        <img
          alt="Man golfing"
          className="is-centered-img"
          width="1024"
          src={`/img/mangolf-thin.jpg`}
        />
        <hr />
        <p>
          During the spring and summer months, northern Colorado is home to some
          of the most beautiful golf courses in the world. Horizon Hill’s
          central location makes it easy for golf enthusiasts to pack up their
          clubs, hop on I-25 and enjoy a round or two at many nearby courses.
        </p>
        <p>
          <a
            href="https://tpc.com/colorado/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TPC Colorado
          </a>{' '}
          (2.3 miles from Horizon Hills in Berthud, CO): TPC Colorado is the
          first ground-up golf course development in Colorado in the last ten
          years and opened in 2018. This Par-72 course boasts majestic views of
          the Rocky Mountains as well as a variable course ranging from 4,000 to
          7,600 yards. Horizon Hills residents won’t even need to use the
          highway to travel to this course.
        </p>
        <p>
          <a
            rel="noopener noreferrer"
            href="http://www.cityofloveland.org/departments/parks-recreation/golf-courses/the-olde-course-at-loveland"
            target="_blank"
          >
            The Olde Course at Loveland
          </a>{' '}
          (6.6 miles from Horizon Hills in Loveland, CO): Often referred to as
          the “Grand Dame” of golf in Loveland, The Olde Course was first
          constructed in December of 1959. Today, this 18-hole course is a
          mainstay for the Loveland golfing community and features tree-lined
          fairways, six ponds, undulating greens, and even an island.{' '}
        </p>
        <p>
          <a
            rel="noopener noreferrer"
            href="https://www.highlandmeadowsgolfcourse.com/"
            target="_blank"
          >
            Highland Meadows
          </a>{' '}
          (12.7 miles from Horizon Hills in Windsor, CO): Established in 2004,
          Highland Meadows’ 30 acres of open space make it easy to get away from
          it all and focus on your swing. In addition to the challenging course
          and magnificent views, Highland Meadows “Big Red Barn” is a popular
          wedding and banquet venue. If you’re just looking for a place to grab
          a bite and a drink, Raff’s Tavern is a popular place to eat after your
          round is finished.
        </p>
        <p>
          <a
            rel="noopener noreferrer"
            href="https://ptarmigancc.com/"
            target="_blank"
          >
            Ptarmigan
          </a>{' '}
          (14.4 miles from Horizon Hills in Fort Collins, CO): This Jack
          Nicklaus signature golf course boasts some of the finests links east
          of the Rocky Mountains. This country club style property is the site
          of banquets, weddings, and other large gatherings in addition to golf.
          There are mens’ and womens’ leagues available as well as youth
          lessons.
        </p>
        <button
          onClick={() => this.props._toggleModal('Golfing Tab')}
          className="button is-danger is-medium tab-button"
        >
          Get in touch today!
        </button>
      </section>
    );
  }
}

export default Golfing;
