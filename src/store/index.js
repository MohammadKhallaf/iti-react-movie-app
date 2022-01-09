// Step 1 - Create Store and pass the reducer to it
// Step 2 - Create the reducer "see reducer file"
// Step 3 - Wrap the app with <Provider> </Provider>
/** import { Provider } from 'react-redux' in App.js
 *
 */
// Step 4 - requiredState = useSelector [~= useState] to read the state => with react-redux library it subscrips automatically to the store
// Step 5 - dispatch = useDipatch to set a state writer to the store
// Step 6 - dispatch({ type : xyz , payload : someValue/s  })


import { configureStore } from "@reduxjs/toolkit";
import favSliceReducer from "./slices/fav-slice";
import { movReducer } from "./slices/movies-slice";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = configureStore({
  reducer: {
    favlist: favSliceReducer,
    movlist: movReducer,
  },
},composeEnhancers);

export default store;
