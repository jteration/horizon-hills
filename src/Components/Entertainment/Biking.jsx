import * as React from 'react';

class Biking extends React.Component {
  render() {
    return (
      <section className="section">
        <h3>Biking Scenic Trails </h3>
        <p>
          If a bicycle and mile after mile of open trails are your idea of
          freedom, there are plenty of trails near Horizon Hills and many more
          that are worth a day trip.
        </p>
        <p>
          <a
            href="https://www.bouldercounty.org/open-space/parks-and-trails/hall-ranch/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hall Ranch
          </a>{' '}
          (26 miles from Horizon Hills) is one of the best known and most
          popular spots for biking in Lyons, Colorado. If you’re willing to deal
          with crowds, especially on weekends, this trail has a little something
          for everyone. Beginner and intermediate riders are encouraged to being
          at the{' '}
          <a
            href="https://www.mtbproject.com/trail/44668/antelope-trail"
            target="_blank"
            rel="noopener noreferrer"
          >
            Antelope trailhead.
          </a>
        </p>
        <p>
          <a
            href="https://www.singletracks.com/bike-trails/rabbit-mountain-loop.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rabbit Mountain Loop
          </a>{' '}
          (21 miles from Horizon Hills) is an easy to intermediate ride
          consisting of a five mile loop in Lyons, Colorado. Locals enjoy this
          short ride as an after-work activity due to the fact that it is less
          crowded than the more popular trails in the area.{' '}
        </p>
        <p>
          <a
            href="https://www.mtbproject.com/trail/7004139/besant-point-trail"
            target="_blank"
            rel="noopener noreferrer"
          >
            Besant Point Trail
          </a>{' '}
          (16.2 miles west of Horizon Hills) is a great introduction to biking
          in Berthoud, Colorado. This trail is considered to be easy by mountain
          bike standards and offers riders mountain views and trails ranging
          from 1.5 to 6 miles. There’s even a hidden offroad loop around the
          reservoir for those looking for a minor adventure.{' '}
        </p>
        <p>
          <a
            href="https://www.larimer.org/naturalresources/parks/devils-backbone"
            target="_blank"
            rel="noopener noreferrer"
          >
            Devil’s Backbone Open Space
          </a>{' '}
          (8 miles from Horizon Hills) is located just west of Loveland and is
          free to the public. This trail is considered to be
          intermediate-to-difficult by mountain bike standards. Those able to
          brave the challenge are rewarded with an exciting ride through one of
          the most geologically diverse backdrops in Colorado.{' '}
        </p>
      </section>
    );
  }
}

export default Biking;
