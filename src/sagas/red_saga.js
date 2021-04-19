import {put, takeEvery, delay} from 'redux-saga/effects';
import * as actions from '../actions';
import * as types from '../actions/ActionTypes';

function* fetchColor(action) {
    try {        
        console.log("Fetch Color Start");
        yield delay(3000);
        console.log("Fetch Color End");
        yield put(actions.setColor([255, 0, 0]));
    } catch(e) {
        yield put(actions.setColor([255, 0, 0]));
    }
}

function* changeColor() {
    console.log("Red Saga is loaded");
    yield takeEvery(types.SET_COLOR_RED, fetchColor);
}

export default changeColor;