import { createSelector } from '@reduxjs/toolkit';

export const tickers = state => state.tickers;
export const filter = state =>state.filter;

export const filteredTickers = createSelector(
    [tickers, filter],
    (tickers, filter)=>{
        const normalized = filter.toLowerCase();
        return tickers.filter(ticker=> ticker.ticker.toLowerCase().includes(normalized))
    }
)