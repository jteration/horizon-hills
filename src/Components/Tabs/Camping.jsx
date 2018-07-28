import * as React from 'react';

class Camping extends React.Component {
  render() {
    return (
      <section className="section">
        <h3>Camping</h3>
        <p>
          There’s nothing like waking up, stepping out of your tent or RV, and
          experiencing the natural beauty of northern Colorado. Sharing camping
          trips with friends and family has long been one of the most popular
          vacation activities in this area and residents of Horizon HIlls have
          no shortage of campground options.
        </p>
        <p>
          <a
            href="https://www.colorado.gov/pacific/evrpd/estes-park-campground-marys-lake"
            target="_blank"
            rel="noopener noreferrer"
          >
            Estes Park
          </a>{' '}
          (36 miles from Horizon Hills) has many campgrounds to choose from, but
          the most popular may be at Mary’s Lake. There are more than 150
          campsites in this area that can accommodate tents, RVs, and even big
          rigs. Spectacular views of Twin Sisters Peaks frame the scenery around
          Mary’s Lake. There are activities for campers of all ages including
          fishing, hiking, and horseback riding. This campground is a longtime
          favorite that keeps families coming back year after year.{' '}
        </p>
        <p>
          <a
            href="https://www.larimer.org/naturalresources/parks/flatiron-reservoir"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flatiron Reservoir Campground
          </a>{' '}
          (12.4 miles from Horizion Hills) is open year-round and features 37
          camp sites, including 3 tipis. This campground is a favorite for
          fishing enthusiasts, because no swimming or boating are allowed on the
          waters and the reservoir is kept well stocked with trout. If the
          fishing is slow, Pinewood Reservoir is nearby.
        </p>
        <p>
          <a
            href="https://www.larimer.org/naturalresources/parks/hermit-park"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hermit Hollow
          </a>{' '}
          (36 Miles from Horizon Hills) is also a very popular campground
          located just a couple miles southeast of Estes Park. If you’re looking
          for simple, clean amenities, this is a nice place to take the family.
          Permits are required and the campground supports both tent and RV
          camping. There are cabins available as well.{' '}
        </p>
      </section>
    );
  }
}

export default Camping;
