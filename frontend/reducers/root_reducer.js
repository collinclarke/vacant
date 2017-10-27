import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';
import EntitiesReducer from './entities_reducer';
import UiReducer from './ui_reducer';

export default combineReducers({ entities: EntitiesReducer,
  ui: UiReducer, session: SessionReducer, errors: ErrorsReducer });
