import * as React from 'react';
import ReactGA from 'react-ga';
import Tab from './Tab';
import Biking from './Biking';
import Camping from './Camping';
import Golfing from './Golfing';
import Hiking from './Hiking';
import Hunting from './Hunting';
import Other from './Other';
import Snow from './Snow';
import Water from './Water';
import Healthcare from './Healthcare';
import Restrictions from './Restrictions';
import './TabCentral.css';

const tabs = [
  {
    text: 'Biking',
  },
  {
    text: 'Camping',
  },
  {
    text: 'Healthcare',
  },
  {
    text: 'Other',
  },
  {
    text: 'Restrictions',
  },
  {
    text: 'Hunting',
  },
  {
    text: 'Snow',
  },
  {
    text: 'Water',
  },
  {
    text: 'Golfing',
  },
  {
    text: 'Hiking',
  },
];

class Entertainment extends React.Component {
  state = {
    activeTab: 'Hunting',
  };
  _handleTabToggle = tab => {
    ReactGA.event({
      category: 'Click',
      action: 'Clicked a tab: ' + tab,
    });
    this.setState({ activeTab: tab });
  };
  _renderTabs = arr => {
    const tabArr = [];
    const tabArr2 = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (i >= arr.length / 2) {
        if (arr[i].text === this.state.activeTab) {
          tabArr.push(
            <Tab
              key={arr[i].text}
              active="is-active"
              text={arr[i].text}
              _handleTabToggle={this._handleTabToggle}
            />
          );
        } else {
          tabArr.push(
            <Tab
              key={arr[i].text}
              active=""
              text={arr[i].text}
              _handleTabToggle={this._handleTabToggle}
            />
          );
        }
      } else {
        if (arr[i].text === this.state.activeTab) {
          tabArr2.push(
            <Tab
              key={arr[i].text}
              active="is-active"
              text={arr[i].text}
              _handleTabToggle={this._handleTabToggle}
            />
          );
        } else {
          tabArr2.push(
            <Tab
              key={arr[i].text}
              active=""
              text={arr[i].text}
              _handleTabToggle={this._handleTabToggle}
            />
          );
        }
      }
    }
    return [<ul key="tabs1">{tabArr}</ul>, <ul key="tabs2">{tabArr2}</ul>];
  };
  _renderActiveContent = tab => {
    switch (tab) {
      case 'all':
        return [
          <Biking _toggleModal={this.props._toggleModal} key="Biking" />,
          <Camping _toggleModal={this.props._toggleModal} key="Camping" />,
          <Golfing _toggleModal={this.props._toggleModal} key="Golfing" />,
          <Hiking _toggleModal={this.props._toggleModal} key="Hiking" />,
          <Hunting _toggleModal={this.props._toggleModal} key="Hunting" />,
          <Snow _toggleModal={this.props._toggleModal} key="Snow" />,
          <Water _toggleModal={this.props._toggleModal} key="Water" />,
          <Healthcare
            _toggleModal={this.props._toggleModal}
            key="Healthcare"
          />,
          <Other _toggleModal={this.props._toggleModal} key="Other" />,
          <Restrictions
            _toggleModal={this.props._toggleModal}
            key="Restrictions"
          />,
        ];
      case 'Biking':
        return <Biking _toggleModal={this.props._toggleModal} />;
      case 'Camping':
        return <Camping _toggleModal={this.props._toggleModal} />;
      case 'Golfing':
        return <Golfing _toggleModal={this.props._toggleModal} />;
      case 'Hiking':
        return <Hiking _toggleModal={this.props._toggleModal} />;
      case 'Hunting':
        return <Hunting _toggleModal={this.props._toggleModal} />;
      case 'Snow':
        return <Snow _toggleModal={this.props._toggleModal} />;
      case 'Water':
        return <Water _toggleModal={this.props._toggleModal} />;
      case 'Healthcare':
        return <Healthcare _toggleModal={this.props._toggleModal} />;
      case 'Other':
        return <Other _toggleModal={this.props._toggleModal} />;
      case 'Restrictions':
        return <Restrictions _toggleModal={this.props._toggleModal} />;
      default:
        return null;
    }
  };
  render() {
    return (
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="columns">
            <div className="column tab-intro content">
              <h2 className="has-text-centered tab-main-heading">
                Still Not Convinced?
              </h2>
              <hr className="green-rule" />
              <p className="tab-main-paragraph">
                There are no shortage of activities in the areas surrounding
                Horizon Hills. The Rocky Mountains are practically in our
                backyard. If you’re looking for biking, hiking, camping,
                hunting, water sports, skiing or snowboarding, you’re in the
                right place.
              </p>
            </div>
          </div>
          <div className="tabs is-boxed is-medium is-centered is-hidden-mobile">
            {this._renderTabs(tabs)}
          </div>
          <div className="content is-hidden-mobile tab-info-section">
            {this._renderActiveContent(this.state.activeTab)}
          </div>
          <div className="content is-hidden-tablet tab-info-section">
            {this._renderActiveContent('all')}
          </div>
        </div>
      </div>
    );
  }
}

export default Entertainment;
