import axios from "axios";

export const PointSystem = ({amount, name}) => {
    
    let point = 0;
    if( amount < 50 ){
        point = 0
    }
    else if (amount < 101) {
        point = (amount - 50) * 1
    } 
    else  {
        point = ((amount - 100)*   2) + 50
    }
    
    // const objTable = {
    //     table: []
    // }
    // const randomId = () => {
    //     return Math.floor(Math.random * 10000);
    // }
    // objTable.table.push({
    //     ID: randomId(),
        // 'Name':name,
        // 'Transaction Amount': amount,
        // 'Value': `${point} points`,
        // 'Points': point,
        // "Date": `${new Date()}`


    // })
    
   const handleTransaction = async () => {

     const response = await axios.post('http://localhost:3001/table', {
        'Name':name,
        'Transaction Amount': amount,
        'Value': `${point} points`,
        'Points': point,
        "Date": `${new Date()}`
    })
    console.log(response)
}
handleTransaction()
    return (
        {
            point,
            value: `${point} points`,
            amount: `$${amount}`
        }
            )
}