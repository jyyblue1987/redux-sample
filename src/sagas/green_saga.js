import {put, takeLatest, delay} from 'redux-saga/effects';
import * as actions from '../actions';
import * as types from '../actions/ActionTypes';


function* fetchColor(action) {
    try {        
        console.log("Fetch Color Start");
        yield delay(3000);
        console.log("Fetch Color End");
        yield put(actions.setColor([0, 255, 0]));
    } catch(e) {
        yield put(actions.setColor([255, 0, 0]));
    }
}

function* changeColor() {
    console.log("Green Saga is loaded");
    yield takeLatest(types.SET_COLOR_GREEN, fetchColor);
}

export default changeColor;