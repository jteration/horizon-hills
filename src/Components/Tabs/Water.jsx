import * as React from 'react';

class Water extends React.Component {
  render() {
    return (
      <section className="section is-flex is-column">
        <h3 className="tab-heading">Water Sports and Fishing</h3>
        <img
          alt="Carter Lake"
          className="is-centered-img"
          width="1024"
          src="/img/carter.jpg"
        />
        <hr />
        <p>
          Summertime in northern Colorado means enjoying one of the dozens of
          lakes or reservoirs that border the front range. Anglers are drawn in
          by the wide variety of fish stocked in these bodies of water,
          including largemouth bass, rainbow trout, walleye, bluegill, perch,
          and crappie. If you aren’t looking to fish or are just tired from a
          day of casting, relax by taking a nice swim or float in the water.{' '}
        </p>
        <p>
          <a
            href="http://cpw.state.co.us/placestogo/parks/BoydLake"
            target="_blank"
            rel="noopener noreferrer"
          >
            Boyde Lake State Park
          </a>{' '}
          (6.9 miles from Horizon Hills) in Loveland, CO has a lot to offer, but
          the main attraction is the park’s dedication to water sports. With
          more than 1,700 acres of lake, there’s room for every type of water
          vehicle including sailboats, jet skis, fishing boats, and canoes.
          Swim, float, paddle, and motor to your heart’s content at this lake
          paradise in the shadow of the rockies.{' '}
        </p>
        <p>
          <a
            href="https://www.larimer.org/naturalresources/parks/carter-lake"
            target="_blank"
            rel="noopener noreferrer"
          >
            Carter Lake Reservoir
          </a>{' '}
          (12.8 miles from Horizon Hills) in Berthoud, CO features 3 boat-launch
          ramps and 5 campgrounds numbering more than 150 campsites. Carter lake
          is a popular spot for swimming, sailing and fishing. The lake can be
          particularly crowded on weekends and while there are no shortage of
          boat rentals available, be sure to reserve your rental well in advance
          if it’s during peak season.
        </p>
        <p>
          <a
            href="http://www.visitloveland.org/fishing/lon-hagler-reservoir"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lon Hagler Reservoir
          </a>{' '}
          (4.6 miles from Horizon HIlls) southwest of Loveland, CO is known for
          the wide variety of species stocked in its waters. This body of water
          offers quality boat fishing, but is a favorite of shore fisherman.
          It’s also a great place to take children who are beginners when it
          comes to angling. Lon Hagler is also famous for Tiger Muskie, though
          they are notoriously difficult to catch.{' '}
        </p>
      </section>
    );
  }
}

export default Water;
