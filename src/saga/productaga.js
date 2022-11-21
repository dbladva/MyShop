import { getAllProductsDetails } from '../common/apis/product.api';
import * as ActionType from '../redux/ActionType'

function* getProduct(action) {
    try {
        const user = yield call(getAllProductsDetails);
        yield put(getProduct(user.data));
    } catch (e) {
        console.log(e.message);
        alert('connect to Internet!')
    }
}

function* watchUpdateProduct() {
    yield takeEvery(ActionType.UPDATE_PRODUCT, getProduct);
}

export function* productSaga() {
    yield all([
        watchUpdateProduct(),
    ]);
}