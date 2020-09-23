import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {StockListReducer} from './stocklist/stocklist.reducer'
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['stock']
}
const rootReducer = combineReducers({

})

export default persistReducer(persistConfig,rootReducer);