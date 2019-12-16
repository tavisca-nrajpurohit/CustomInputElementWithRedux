import {customInputState} from './customInputState';
import {CUSTOM_INPUT_IS_FOCUSSED,CUSTOM_INPUT_NOT_FOCUSSED,CUSTOM_INPUT_VALUE_CHANGED} from './actions'

const initialState: customInputState = {
        value: "",
        isTouched: false,
        hasFocus: false
};


function customInputNotFocussed(state:customInputState,action):customInputState{
    return Object.assign({},state,{
        hasFocus: false
    });
}
function customInputisFocussed(state:customInputState,action):customInputState{
    return Object.assign({},state,{
        isTouched:true,
        hasFocus: true
    });
}

function customInputValueChanged(state:customInputState,action):customInputState{
    return Object.assign({},state,{
        value:action.value
    });
}

export const reducer = (propPath) => (state = initialState, action)=>{
    switch(action.type){
        case propPath+CUSTOM_INPUT_IS_FOCUSSED:
            return customInputisFocussed(state,action);
        case propPath+CUSTOM_INPUT_NOT_FOCUSSED:
            return customInputNotFocussed(state,action);
        case propPath+CUSTOM_INPUT_VALUE_CHANGED:
            return customInputValueChanged(state,action);
        default:
            return state;
    };
}