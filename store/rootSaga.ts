import {call, put, takeEvery} from 'redux-saga/effects';
import axios, {AxiosResponse} from 'axios';
import {getCatsSuccess} from '@/store/catSlice';

function* fetchCats(): Generator<unknown, void, AxiosResponse<unknown[]>> {
    const catList: AxiosResponse<unknown[]> = yield call(() => axios('https://api.thecatapi.com/v1/breeds'));
    const paginationCats = catList.data.slice(0, 10);
    yield put(getCatsSuccess(paginationCats));
}

function* catSaga() {
    yield takeEvery('cats/getCatsFetch', fetchCats);
}

export default catSaga;