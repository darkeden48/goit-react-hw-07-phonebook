import { configureStore} from '@reduxjs/toolkit'
import { clicksReducer,filterReducer } from './reducers';
import { FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist';



export const store = configureStore({
  reducer: {
      contacts:clicksReducer,
      filter:filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: process.env.NODE_ENV === 'development',
  });

// export const persistor = persistStore(store)