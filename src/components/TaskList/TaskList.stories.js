import React from 'react'
import { ProviderWrapper } from '../../lib/ProviderWrapper'
import PureTaskList from './TaskList'

export default {
  component: PureTaskList,
  title: 'TaskList',
  decorators: [
    (story) => <div style={{ padding: '3rem' }}>{story()}</div>,
    (story) => <ProviderWrapper>{story()}</ProviderWrapper>,
  ],

  excludeStories: /.*Data$/,
}

export const Default = () => <PureTaskList />

export const WithPinnedTasks = () => <PureTaskList />

export const Loading = () => <PureTaskList loading />

export const Empty = () => <PureTaskList />
