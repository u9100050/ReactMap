/**
 * Created by NekrasovAA on 28.04.2016.
 */
'use strict';
//----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import mainReducer from './reducers/reducers';
import {Provider} from 'react-redux';
import Main from './containers/app';
//**********************************************************************************************************************
let initialState = {
    regs: [],
    selectedReg: "none"
};
let store = createStore(mainReducer, initialState);

let rootElement = document.getElementById('react_container')

render(
    <Provider store={store}>
        <Main />
    </Provider>,
    rootElement
);
