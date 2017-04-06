import { delay } from 'redux-saga'
import { put, takeEvery, call } from 'redux-saga/effects'

export function* helloSaga()
{
    console.log('hello saga.')
}

export function* incrementAsync()
{
    console.log('test 1')
    yield call(delay, 1000)
    yield put({type: 'INCREMENT'})
}

export function* watchIncrementAsync()
{
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

