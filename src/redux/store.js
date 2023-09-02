import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ContactReduser from './sliceContact';
import FilterReduser from './sliceFilter';

const rootReducer = combineReducers({
  contants: ContactReduser,
  filter: FilterReduser,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

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
