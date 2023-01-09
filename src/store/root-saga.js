import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./categories/category.saga";

//function* is a generator function
//similar to async await  
export function* rootSaga() {
yield all([call(categoriesSaga)])
}

