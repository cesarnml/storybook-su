import React from 'react'
import './Input.css'

export const Input = (props) => {
  const { size = 'medium', ...rest } = props
  switch (size) {
    case 'small': {
      return <input className='input small' {...rest} />
    }
    case 'large': {
      return <input className='input large' {...rest} />
    }
    default: {
      return <input className='input medium' {...rest} />
    }
  }
}
