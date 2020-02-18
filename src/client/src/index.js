import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import App from './js/components/App'
import rootReducer from './js/reducers'
import { getLocations } from './js/actions/locations'


const store = createStore(rootReducer, applyMiddleware(thunk))
const init = async () => {
    const locations = await getLocations()
    store.dispatch(locations)
    //TODO implement polling
}

init()

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)


