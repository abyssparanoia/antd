import React, { useState } from 'react'
import { Card } from 'antd'
import { default as OriginalEditor } from 'react-simple-code-editor'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDark'
import { variable } from '../variable'

export const Editor = () => {
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
    <Card style={{ background: variable['@component-background'] }}>
      <OriginalEditor
        value={sql}
        onValueChange={handleChange}
        highlight={highlight}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 18,
          backgroundColor: '#2F3E48',
          height: 400
        }}
      />
    </Card>
  )
}
