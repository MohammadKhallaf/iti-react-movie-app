import { createStore } from "redux";
import MovieReducer from "./reducer";
// Step 1 - Create Store and pass the reducer to it
// Step 2 - Create the reducer "see reducer file"
// Step 3 - Wrap the app with <Provider> </Provider>
/** import { Provider } from 'react-redux' in App.js
 *
 */
// Step 4 - requiredState = useSelector [~= useState] to read the state => with react-redux library it subscrips automatically to the store
// Step 5 - dispatch = useDipatch to set a state writer to the store
// Step 6 - dispatch({ type : xyz , payload : someValue/s  })

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(MovieReducer, composeEnhancers);

export default store;
