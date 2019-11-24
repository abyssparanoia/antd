import React from 'react'
import { Global } from './components/Global'
import { Editor } from './components/organisms/Editor'

const App: React.FC = () => {
  return (
    <div>
      <Global>
        <Editor />
      </Global>
    </div>
  )
}

export default App
