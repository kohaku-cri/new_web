"use client"

import Snowfall from 'react-snowfall';

export function Snow() {
  return (
      <Snowfall style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
      }} />
  )
}