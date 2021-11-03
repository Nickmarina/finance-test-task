import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { getTickersSuccess, getTickersRequest, getTickersError, filterTickers} from './tickers-actions';

const initialState = {
    tickers:[],
    filter:'',
};

const tickers = createReducer(initialState.tickers, {
    [getTickersSuccess] : (_, action) => action.payload,
})

const loading = createReducer(false, {
    [getTickersRequest]:()=> true,
    [getTickersSuccess]:()=> false,
    [getTickersError]:()=>false,
})

const filter = createReducer(initialState.filter, {
    [filterTickers]: (_, {payload})=> payload,
})

// const error = createReducer(null, {
//     [getTickersError]:
// });

export default combineReducers({
    tickers,
    loading,
    filter,
    // error,
});