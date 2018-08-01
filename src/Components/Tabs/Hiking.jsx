import * as React from 'react';

class Hiking extends React.Component {
  render() {
    return (
      <section className="section is-flex is-column">
        <h3 className="tab-heading">Hiking Mountains Big and Small</h3>
        <img
          alt="Horsetooth"
          className="is-centered-img"
          width="1024"
          src={`${process.env.PUBLIC_URL}/img/horsetooth-thin.jpg`}
        />
        <hr />
        <p>
          Lace up your boots and get ready to hike some serious terrain! Horizon
          Hills’ close proximity to the Rocky Mountains means easy access to
          some of the most iconic mountains in the world. Whether you’re looking
          to conquer another 14er or just want to take a walk and enjoy nature’s
          beauty, there are hundreds of miles of trails within a short drive.
        </p>
        <p>
          <a
            href="http://www.cityofloveland.org/departments/parks-recreation/recreation-trails/summit-adventure-trail"
            target="_blank"
            rel="noopener noreferrer"
          >
            Round Mountain National Recreation Area{' '}
          </a>(16.5 miles from Horizon Hills) in Loveland, Colorado is a
          moderate hike consisting of a 9.6 mile, out-and-back trail that rises
          about 3,100/ft. The trail is rocky and dogs are permitted as long as
          they are on a leash. Completing this trail takes 6-8 hours on average.
          Night hiking is not permitted, so start early in the day!
        </p>
        <p>
          <a
            href="https://www.larimer.org/naturalresources/parks/horsetooth-mountain"
            target="_blank"
            rel="noopener noreferrer"
          >
            Horsetooth Mountain Open Space
          </a>{' '}
          (17.4 miles from Horizon Hills) is just west of Fort Collins, Colorado
          and is one of the most popular hikes in the area. Native American
          legend has it that Horseshoe Rock is the fossilized heart of a slain
          giant. Even with that intimidating backstory, this park has many
          trails for hikers of all skill levels. The main trail is a 5-mile loop
          that features a waterfall.
        </p>
        <p>
          <a
            href="https://www.nps.gov/romo/index.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rocky Mountain National Park
          </a>{' '}
          (Less than 40 miles from Horizon Hills) is perhaps the most iconic
          mountain range in the United States. With 76 Mountains more than
          10,000/ft tall, hiking every one could take years. This is truly a
          hiker’s paradise that has trails to test every skill level and views
          that rival mountains anywhere in the world.
        </p>
      </section>
    );
  }
}

export default Hiking;
