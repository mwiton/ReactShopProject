import { combineReducers } from 'redux';
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer'
import shopReducer from "./shop/shop.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopDataReducer from "./shop-data/shop-data.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['shop']
};
const rootReducer = combineReducers({
    user: userReducer,
    shop: shopReducer,
    directory: directoryReducer,
    shopData: shopDataReducer
});

export default persistReducer(persistConfig, rootReducer);