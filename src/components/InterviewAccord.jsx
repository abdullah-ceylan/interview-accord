import React from 'react'
import Question from './Question'

const InterviewAccord = (props) => {
    const {data} = props;

  return (
    <div className='row'>
        {data.map((item) => <Question key={item.id} {...item} /> )}
    </div>
  )
}

export default InterviewAccord