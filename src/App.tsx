import React, { useState } from 'react'
import { Global } from './components/Global'
import Editor from 'react-simple-code-editor'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'

const App: React.FC = () => {
  const [sql, setSql] = useState<string>('')
  const handleChange = (value: string) => setSql(value)

  const highlight = (code: string) => (
    <Highlight {...defaultProps} theme={theme} code={code} language="sql">
      {({ tokens, getLineProps, getTokenProps }) => (
        <>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={i} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </>
      )}
    </Highlight>
  )

  return (
    <div>
      <Global>
        <Editor
          value={sql}
          onValueChange={handleChange}
          highlight={highlight}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12
          }}
        />
      </Global>
    </div>
  )
}

export default App
