import React from 'react'
import { Global } from './components/Global'
import { Editor } from './components/organisms/Editor'
import { ResultTable } from './components/organisms/ResultTable'

const App: React.FC = () => {
  return (
    <div>
      <Global>
        <Editor />
        <ResultTable />
      </Global>
    </div>
  )
}

export default App
