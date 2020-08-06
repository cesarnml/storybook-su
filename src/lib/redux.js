// A simple redux store/actions/reducer implementation.
// A true app would be more complex and separated into different files.
import { configureStore } from '@reduxjs/toolkit'

// The actions are the "names" of the changes that can happen to the store
export const actions = {
  ARCHIVE_TASK: 'ARCHIVE_TASK',
  INBOX_TASK: 'INBOX_TASK',
  PIN_TASK: 'PIN_TASK',
  UNPIN_TASK: 'UNPIN_TASK',
}

// The action creators bundle actions with the data required to execute them

export const archiveTask = (id) => ({ type: actions.ARCHIVE_TASK, id })
export const inboxTask = (id) => ({ type: actions.INBOX_TASK, id })
export const pinTask = (id) => ({ type: actions.PIN_TASK, id })
export const unpinTask = (id) => ({ type: actions.UNPIN_TASK, id })

// All our reducers simply change the state of a single task.
function taskStateReducer(taskState) {
  return (state, action) => {
    return {
      tasks: state.tasks.map((task) => ({
        ...task,
        state: action.id === task.id ? { ...task, state: taskState } : task,
      })),
    }
  }
}
// The reducer describes how the contents of the store change for each action
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ARCHIVE_TASK:
      return taskStateReducer('TASK_ARCHIVED')(state, action)
    case actions.INBOX_TASK:
      return taskStateReducer('TASK_INBOX')(state, action)
    case actions.PIN_TASK:
      return taskStateReducer('TASK_PINNED')(state, action)
    case actions.UNPIN_TASK:
      return taskStateReducer('TASK_UNPIN')(state, action)
    default:
      return state
  }
}

// The initial state of our store when the app loads.
// Usually you would fetch this from a server
const defaultTasks = [
  { id: '1', title: 'Something', state: 'TASK_INBOX' },
  { id: '2', title: 'Something more', state: 'TASK_PINNED' },
  { id: '3', title: 'Something else', state: 'TASK_INBOX' },
  { id: '4', title: 'Something again', state: 'TASK_INBOX' },
]

// We export the constructed redux store
export default configureStore({ reducer, preloadedState: { tasks: defaultTasks } })