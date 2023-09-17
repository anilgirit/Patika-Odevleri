import React from 'react'
import styles from './styles.module.css'

export const Button = ({ text, type }) => {
  return <button className={`${styles.btn} ${styles[type]}`}>{text}</button>
}

export const Text = ({ text }) => {
  return <p>{text}</p>
}
