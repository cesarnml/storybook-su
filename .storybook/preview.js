import React from 'react'
import { addDecorator } from '@storybook/react'
import { Center } from '../src/components/Center/Center'
import '../src/index.css'

addDecorator((story) => {
  return <Center>{story()}</Center>
})
