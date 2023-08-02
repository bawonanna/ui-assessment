import { useState } from "react";
import { PointSystem } from "../api/PointSystem";

function Form({ onHandleForm }) {
    const [ name, setName ] = useState('');
    const [ amount, setAmount ] = useState(0);
    const [ point, setPoint ] = useState(0);

    const handlFormSubmit = (event) => {
        event.preventDefault();
        
       const pointApi = PointSystem({amount, name})
       console.log(pointApi)
        onHandleForm(pointApi.value);
    };

    // const handleFormChange = (event) => {
    //     // setPoint(event.target.value);
    // }

    return(
        <div>
            <form onSubmit={handlFormSubmit}>
                <div>
                    <label htmlFor="customername">Name</label>
                    <input type="text" placeholder="Customer Name" id="customername" name="customername" onChange={event => setName(event.target.value)} />
                </div>
               
                <div>
                    <label htmlFor="amount">Purchase Amount</label>
                    <input type="text" placeholder="Transaction Amount" id="amount" name="amount" onChange={event => setAmount(parseInt(event.target.value))} />
                </div>

                <div>
                  <button>Submit</button>   
                </div>  
                
                
                {/* <input value={point}  onChange={handleFormChange} /> */}
            </form>
        </div>
    );
};

export default Form;
