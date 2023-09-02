import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import ContactReduser from './sliceContact';
import FilterReduser from './sliceFilter';

const persistConfig = {
  key: 'phonebook',
  storage,
  blacklist: ['filter'],
};

const rootReducer = combineReducers({
  contants: ContactReduser,
  filter: FilterReduser,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;

// function contantsReducer(state = [], action) {
//   switch (action.type) {
//     case 'add-contact': {
//       return [...state, { ...action.payload }];
//     }
//     case 'delite-contact': {
//       return [...state.filter(({ id }) => id !== action.payload)];
//     }

//     default:
//       return state;
//   }
// }

// function filterReducer(state = '', action) {
//   switch (action.type) {
//     case 'change-filter': {
//       return action.payload;
//     }

//     default:
//       return state;
//   }
// }
