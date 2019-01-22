import React from 'react'

const Spinner = props => {
  return (
    <div className="io active dimmer">
      <div className="ui big text loader">
        {props.message}
      </div>
    </div>
  )
}

Spinner.defaultProps = {
  message: 'Loading...'
}

export default Spinner