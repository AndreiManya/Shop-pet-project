import React, { useState } from 'react'
import Slide1 from '../../accets/slider/slide-1.jpg'
import styles from './styles'
const Header = () => {
  const [search, setSearch] = useState('')
  return (
    <header style={{ ...styles.root, backgroundImage: `url(${Slide1})` }}>
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <span style={styles.button}>Main</span>
          <span style={styles.button}>Shop</span>
        </div>
        <div style={styles.headerRight}>
          <div style={styles.inputContainer}>
            <input
              placeholder="Search products ..."
              style={styles.input}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg viewBox="0 0 512 512" style={styles.search}>
              <path
                d="M503.866,477.974L360.958,335.052c28.725-34.544,46.017-78.912,46.017-127.336  c0-110.084-89.227-199.312-199.312-199.312C97.599,8.403,8.351,97.631,8.351,207.715c0,110.064,89.248,199.312,199.312,199.312  c48.435,0,92.792-17.292,127.336-46.017l142.908,142.922L503.866,477.974z M29.331,207.715c0-98.334,79.987-178.332,178.332-178.332  c98.325,0,178.332,79.998,178.332,178.332s-80.007,178.332-178.332,178.332C109.318,386.047,29.331,306.05,29.331,207.715z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <svg viewBox="0 0 256 256" style={styles.cart}>
            <rect fill="none" height="18" width="18" />
            <path
              d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16"
              fill="none"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <circle
              cx="80"
              cy="204"
              fill="none"
              r="20"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <circle
              cx="184"
              cy="204"
              fill="none"
              r="20"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <path
              d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48"
              fill="none"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </svg>
        </div>
      </div>
      <div style={styles.titleContainer}>
        <h1 style={styles.title}>Shop now</h1>
      </div>
    </header>
  )
}

export default Header
