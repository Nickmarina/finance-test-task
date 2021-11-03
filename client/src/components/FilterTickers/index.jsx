import { useDispatch} from 'react-redux';
import { filterTickers } from '../../redux/tickers/tickers-actions';

const FilterTickers =()=>{
    const dispatch = useDispatch();
    const handleFilterTickers = (event) =>dispatch(filterTickers(event.target.value))
    
    return(
        <input type="text" className="mb-3 form-control" placeholder="Search..." onChange={handleFilterTickers}/>
    );
}

export default FilterTickers;