import React from 'react'

function StatusBtn(props) {
  return (
    <div>
      <button className='status-btn'>{props.status}</button>
    </div>
  )
}

export default StatusBtn