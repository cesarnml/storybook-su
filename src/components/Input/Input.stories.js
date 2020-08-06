import React from 'react'
import { Input } from './Input'
import { Center } from '../Center/Center'

export default {
  title: 'Input',
  component: Input,
  decorators: [(story) => <Center>{story()}</Center>],
}

export const Small = () => <Input size='small' placeholder='Small size' />
export const Medium = () => <Input size='medium' placeholder='Medium field' />
export const Large = () => <Input size='large' placeholder='Large field' />
