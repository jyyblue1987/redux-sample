import * as types from './ActionTypes';

export function increment() {
    return {
        type: types.INCREMENT
    };
}

export function decrement() {
    return {
        type: types.DECREMENT
    }
}

export function setColor(color) {
    return {
        type: types.SET_COLOR,
        color
    }
}

export function setRedColor(color) {
    return {
        type: types.SET_COLOR_RED
    }
}

export function setGreenColor(color) {
    return {
        type: types.SET_COLOR_GREEN
    }
}

export const incrementAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(increment());
    }, 1000);
}

export const decrementAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(decrement());
    }, 1000);
}

