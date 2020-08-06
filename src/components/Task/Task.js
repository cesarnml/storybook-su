import React from 'react'
import PropTypes from 'prop-types'

export const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask, onInboxTask, onUnpinTask }) => {
  return (
    <div className='list-item'>
      <div className={`list-item ${state}`}>
        <label className='checkbox'>
          <input type='checkbox' value={state === 'TASK_ARCHIVED'} name='checked' />
          <span
            className='checkbox-custom'
            onClick={() => (state === 'TASK_ARCHIVED' ? onArchiveTask(id) : onInboxTask(id))}
          />
        </label>
        <div className='title'>
          <input type='text' value={title} readOnly={true} placeholder='Input title' />
        </div>
        <div className='actions' onClick={(event) => event.stopPropagation()}>
          <a onClick={() => (state === 'TASK_PINNED' ? onPinTask(id) : onUnpinTask(id))}>
            <span className={`icon-star`} />
          </a>
        </div>
      </div>
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
}
