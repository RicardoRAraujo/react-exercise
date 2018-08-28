import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

export default props => (
  <div>
    <h1>Familia</h1>
    {props.children}
    { childrenWithProps(props.children, props) }
  </div>
)