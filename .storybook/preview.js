import React from 'react'
import { addDecorator } from '@storybook/react'
import { Center } from '../src/components/Center/Center'

addDecorator((story) => {
  return <Center>{story()}</Center>
})
