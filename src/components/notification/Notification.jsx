import React from 'react'
import css from './Notification.module.css'

export const Notification = ({message}) => {
  return (
    <div className={css.message}>{message}</div>
  )
}
