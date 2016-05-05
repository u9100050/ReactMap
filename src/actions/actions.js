/**
 * Created by NekrasovAA on 05.05.2016.
 */
'use strict';

export function setSelectedReg(selectedReg) {
    return{
        type: 'SET_SELECTED_REG',
        selectedReg
    }
}

export function createRegList(regs) {
    console.log(regs);
    return{
        type: 'LOAD_REG',
        regs
    }
}
