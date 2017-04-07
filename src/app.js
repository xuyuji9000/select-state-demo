import 'babel-polyfill'
import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import SelectState from './components/SelectState'
import { store } from './conf'

injectTapEventPlugin();

const App = function()
{
    return (
        <MuiThemeProvider>
            <Provider store={store}>
                <SelectState></SelectState>
            </Provider>
        </MuiThemeProvider>
    )
}

render(
    <App></App>,
    document.getElementById('root')
)
