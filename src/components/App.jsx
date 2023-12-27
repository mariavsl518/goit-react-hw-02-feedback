import { Component } from "react";
import { FeedbackOptions } from "./feedback/FeedbackOptions";
import { Statistics } from "./statistics/Statistics";
import { Section } from "./section/Section";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = (evt) => {
    const tg = evt.target.id;
    switch(tg){
      case 'good': 
        this.setState({good: this.state.good +1});
        break;
      case 'neutral':
        this.setState({neutral: this.state.neutral +1});
        break;
      case 'bad':
        this.setState({bad: this.state.bad +1});
        break;
      default: 
        return;
    }
}

  countTotalFeedback = () =>{
    const total = this.state.good+this.state.neutral+this.state.bad;
    return total
  }

  countPositiveFeedbackPercentage = () =>{
    const total = this.countTotalFeedback();
    const percentage = (100*this.state.good)/total; 
    return Math.round(percentage)
  }

  render(){
    return(
      <div>
      <Section title='Please leave a feedback'>
        
      <FeedbackOptions
      options={this.state} 
      onLeaveFeedback={this.handleClick}>
      </FeedbackOptions>
      </Section>
      
      <Section title='Statistics'>
  
      <Statistics
      good={this.state.good} 
      neutral={this.state.neutral} 
      bad={this.state.bad} 
      total={this.countTotalFeedback()} 
      positivePercentage={this.countPositiveFeedbackPercentage}>
      </Statistics>
      </Section>
      </div>
    ); 
}
}

