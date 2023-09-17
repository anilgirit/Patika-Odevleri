import React from 'react'

import { Button } from 'buttontypeui'
import 'buttontypeui/dist/index.css'

const App = () => {
  return (
    <div>
      <Button text='Primary Button' type='primary' />
      <Button text='Default Button' type='default' />
      <Button text='Dashed Button' type='Dashed' />
      <br />
      <Button text='Text Button' type='text' />

      <Button text='Link Button' type='link' />
      <br />
      <br />
      <br />
    </div>
  )
}

export default App
