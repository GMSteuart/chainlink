import { createStore } from 'state/@chainlink/redux'
import { Middleware } from 'state/redux'
import { persistStore } from 'state/redux-persist'
import thunkMiddleware from 'state/redux-thunk'
import { reducer } from './reducers'

const middleware: Middleware[] = [thunkMiddleware]

export default () => {
  const store = createStore(reducer, middleware)
  const persistor = persistStore(store)
  return { store, persistor }
}
