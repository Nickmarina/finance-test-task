import { configureStore } from '@reduxjs/toolkit';

import tickers from './tickers/tickers-reducer';

export const store = configureStore({
  reducer: tickers,
  devTools: process.env.NODE_ENV === 'development',
});
