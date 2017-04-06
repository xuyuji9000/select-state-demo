import { fork } from 'redux-saga/effects'
import * as counter from  '../components/Counter'

export default function* rootSaga()
{
    let sagas = new Array()

    sagas = sagas.concat(Object.values(counter.sagas))

    sagas = sagas.map(saga => fork(saga))

    yield sagas
}
