import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
  <Family lastName="Silva">
    <Member name="Ricardo"/>
    <Member name="Guilherme"/>
    <Member name="Nilo"/>
  </Family>
  ,document.getElementById('app')
)