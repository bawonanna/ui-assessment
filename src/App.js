import { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function App() {
    const [finalPoints, setFinalPoints] = useState('')
    const [tabIndex, setTabIndex] = useState(0);
    const handleForm = (point) => {
        setFinalPoints(point)
    }

    return(
        <div>
            <h1>Purchase Point Generator</h1>
        <Tabs>
                <TabList>
                <Tab>Add Transaction</Tab>
                <Tab>View History</Tab>
                </TabList>

                <TabPanel>


                    <Form onHandleForm={handleForm} />
                    {finalPoints && finalPoints !== '' ? <Display points={finalPoints} />: ("")}
                </TabPanel>
                <TabPanel>
                    {"History table here"}
                </TabPanel>
            </Tabs>
        
        </div>
    );  
};

export default App;