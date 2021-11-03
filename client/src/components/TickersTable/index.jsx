import TickersTableBody from "../TickersTableBody";

const TickersTable=()=>{
    return(
        <table className="table table-dark table-striped" >
            <thead>
                <tr>
                    <th>Ticker</th>
                    <th>Price</th>
                    <th>Change</th>
                    <th>Change &#x25; </th>
                    <th>Devident</th>
                    <th>Last trade time</th>
                </tr>
            </thead>
            <TickersTableBody/>  
        </table>
    );
}

export default TickersTable;