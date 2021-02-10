import { combineReducers } from 'redux';

import auth from './auth';
import setUser from './setUser'
export const initialState = {
    user: null,
}
export const reducers = combineReducers({ setUser, auth });

export default reducers