import * as React from 'react';
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
    text: 'Golfing',
  },
  {
    text: 'Hiking',
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
    text: 'Healthcare',
  },

  {
    text: 'Other',
  },
];

class Entertainment extends React.Component {
  state = {
    activeTab: 'Hunting',
  };
  _handleTabToggle = (tab) => {
    this.setState({ activeTab: tab });
  };
  _renderTabs = (arr) => {
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
            />,
          );
        } else {
          tabArr.push(
            <Tab
              key={arr[i].text}
              active=""
              text={arr[i].text}
              _handleTabToggle={this._handleTabToggle}
            />,
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
            />,
          );
        } else {
          tabArr2.push(
            <Tab
              key={arr[i].text}
              active=""
              text={arr[i].text}
              _handleTabToggle={this._handleTabToggle}
            />,
          );
        }
      }
    }
    return [<ul key="tabs1">{tabArr}</ul>, <ul key="tabs2">{tabArr2}</ul>];
  };
  _renderActiveContent = () => {
    switch (this.state.activeTab) {
      case 'Biking':
        return <Biking />;
      case 'Camping':
        return <Camping />;
      case 'Golfing':
        return <Golfing />;
      case 'Hiking':
        return <Hiking />;
      case 'Hunting':
        return <Hunting />;
      case 'Snow':
        return <Snow />;
      case 'Water':
        return <Water />;
      case 'Healthcare':
        return <Healthcare />;
      case 'Other':
        return <Other />;
      case 'Restrictions':
        return <Restrictions />;
      default:
        return null;
    }
  };
  render() {
    return (
      <section id="features" className="section">
        <div className="columns box">
          <div className="column">
            <div className="columns">
              <div className="column tab-intro content is-8 is-offset-2">
                <h1 className="has-text-centered">The Great Outdoors</h1>
                <p>
                  There are no shortage of outdoor activities in the areas
                  surrounding Horizon Hills. The Rocky Mountains are practically
                  in our backyard. If you’re looking for biking, hiking,
                  camping, hunting, water sports, skiing or snowboarding, you’re
                  in the right place.
                </p>
              </div>
            </div>
            <div className="tabs is-boxed is-medium is-centered">
              {this._renderTabs(tabs)}
            </div>
            <div className="content">{this._renderActiveContent()}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Entertainment;
