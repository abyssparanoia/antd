import * as React from 'react'
import { storiesOf, RenderFunction } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs/react'

import { Button } from '.'

const decoratorStyle: React.CSSProperties = {
  textAlign: 'center'
}

const CenterDecorator = (story: RenderFunction) => <div style={decoratorStyle}>{story()}</div>

const components = storiesOf('Button', module)
components
  .addDecorator(CenterDecorator)
  .addDecorator(withKnobs)
  .add('with text', () => <Button onClick={action('clicked')}>{text('buttonText', 'Submit')}</Button>)
