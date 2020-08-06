import React from 'react'
import { action } from '@storybook/addon-actions'
import '../../index.css'

import { Task } from './Task'

export default {
  title: 'Task',
  component: Task,
  excludeStories: /.*Data$/,
}

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
}

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
  onUnpinTask: action('onUnpinTask'),
  onInboxTask: action('onInboxTask'),
}

export const Default = () => <Task task={{ ...taskData }} {...actionsData} />

export const Pinned = () => <Task task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />

export const Archived = () => <Task task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />
