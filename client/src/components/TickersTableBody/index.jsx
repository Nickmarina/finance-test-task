import { useSelector } from "react-redux";
import {filteredTickers} from '../../redux/tickers/tickers-selectors'
import shortid from 'shortid'
const TickersTableBody=()=>{
    const tickers = useSelector(filteredTickers);
    return(
        <tbody>
            {tickers.map(ticker => (
                <tr key={shortid.generate()}>
                    <td>{ticker.ticker}</td>
                    <td>{ticker.price}</td>
                    <td>{ticker.change}</td>
                    <td>{ticker.change_percent}</td>
                    <td>{ticker.dividend}</td>
                    <td>{ticker.last_trade_time.slice(0, 10)} <span>{ticker.last_trade_time.slice(11, 19)}</span></td>

                </tr>
            ))}
        </tbody>
    );
}

export default TickersTableBody;