import { combineReducers, configureStore } from '@reduxjs/toolkit';

function contantsReducer(state = [], action) {
  switch (action.type) {
    case 'add-contact': {
      return [...state, { ...action.payload }];
    }
    case 'delite-contact': {
      return [...state.filter(({ id }) => id !== action.payload)];
    }

    default:
      return state;
  }
}

function filterReducer(state = '', action) {
  switch (action.type) {
    case 'change-filter': {
      return action.payload;
    }

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  contants: contantsReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
