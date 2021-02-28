import React, { Component } from 'react';
import Statistics from './Statistics';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';

import ButtonNames from '../data/ButtonNames.json';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  totalStatsCounter = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  goodFeegbackPercentageCounter = () => {
    const { good } = this.state;
    const total = this.totalStatsCounter();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.totalStatsCounter();
    const goodFeegbackPercentage = this.goodFeegbackPercentageCounter();
    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            stats={ButtonNames}
            onFeedbackLeave={this.handlerFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            goodFeegbackPercentage={goodFeegbackPercentage}
          />
        </Section>
      </>
    );
  }
}

export default App;
