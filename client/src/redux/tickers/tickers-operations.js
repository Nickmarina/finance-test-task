import  {io} from 'socket.io-client';
import {getTickersRequest, getTickersSuccess,getTickersError} from './tickers-actions';

const socket = io('http://localhost:4000');
socket.emit('start');

export const getTickers = () =>(dispatch, getState)=>{
    dispatch(getTickersRequest());
        try {
            socket.on('ticker', (quotes) => dispatch(getTickersSuccess(quotes)))
        } catch( error){
              dispatch(getTickersError(error))
        }
   
}

