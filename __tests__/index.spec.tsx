import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'
import { RJNThemeProvider } from '../lib'

describe('Common render', () => {
    it('renders without crashing', () => {
        render(
            <RJNThemeProvider>
                <h2>hello test</h2>
            </RJNThemeProvider>,
        )
    })
})
