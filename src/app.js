import 'babel-polyfill'
import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import { Provider } from 'react-redux'

import Counter from './components/Counter'
import { store } from './conf'

// const action = type => store.dispatch({type})
// 
// function localRender()
// {
//     ReactDOM.render(
//         <Counter 
//             value={store.getState().counter}
//             onIncrementAsync={() => action('INCREMENT_ASYNC')}
//         >
//         </Counter>,
//         document.getElementById('root')
// 
//     )
// }
// 
// localRender()
// store.subscribe(localRender)
//
const App = function()
{
    return (
        <Provider store={store}>
            <Counter></Counter>
        </Provider>
    )
}

render(
    <App></App>,
    document.getElementById('root')
)
