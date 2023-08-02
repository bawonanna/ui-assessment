import { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";

function App() {
    const [finalPoints, setFinalPoints] = useState('')
    const [tabIndex, setTabIndex] = useState(0);
    const handleForm = (point) => {
        setFinalPoints(point)
    }

    return(
        <div>
        <h1>Purchase Point Generator</h1>

         <Form onHandleForm={handleForm} />
        {finalPoints && finalPoints !== '' ? <Display points={finalPoints} />: ("")}
        </div>
    );  
};

export default App;