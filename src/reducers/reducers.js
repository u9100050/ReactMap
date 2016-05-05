/**
 * Created by NekrasovAA on 05.05.2016.
 */
'use strict';
let initialState = {
    regs: [],
    selectedReg: "none"
};

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_SELECTED_REG':
            return Object.assign({},state,{
               selectedReg: action.selectedReg
            });
        case 'LOAD_REG':
            return Object.assign({},state,{
                regs: action.regs
            });
        
        default:
            return state;
    }
}