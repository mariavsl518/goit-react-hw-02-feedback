import React from 'react'
import css from './Feedback.module.css'

export const FeedbackOptions = ({
  onLeaveFeedback,
    }) => {
  return (
    <ul className={css.buttonList}>
        <li><button id='good' className={css.buttonItem} onClick={onLeaveFeedback}>Good</button></li>
        <li><button id='neutral' className={css.buttonItem} onClick={onLeaveFeedback}>Neutral</button></li>
        <li><button id='bad' className={css.buttonItem} onClick={onLeaveFeedback}>Bad</button></li>
    </ul>
  )
}

