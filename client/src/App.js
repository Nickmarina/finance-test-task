import { useEffect } from "react";
import {useDispatch} from 'react-redux'
import {getTickers} from './redux/tickers/tickers-operations'
import TickersTable from "./components/TickersTable";
import FilterTickers from "./components/FilterTickers";

const  App =()=>{
  const dispatch = useDispatch();
  useEffect(()=> {dispatch(getTickers())}, [dispatch])
  return (
    <>
      <header className="container-sm text-end">
        <h1>Tickers</h1>
      </header>
      <main className="container-sm">
        <FilterTickers/>
        <TickersTable/>
      </main>
    </>
  );
}

export default App;
