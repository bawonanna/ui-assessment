import { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from "axios";
import Table from "./components/Table";

function App() {
    const [finalPoints, setFinalPoints] = useState('')
    const [tableData, setTableData] = useState([]);
    const handleForm = (point) => {
        setFinalPoints(point)
    }
    const tableDataFetch = async () => {
        const response = await axios.get('http://localhost:3001/table');
        setTableData(response.data)
    }

    return(
        <div>
            <h1>Purchase Point Generator</h1>
        <Tabs>
                <TabList>
                <Tab>Add Transaction</Tab>
                <Tab onClick={tableDataFetch}>View History</Tab>
                </TabList>

                <TabPanel>


                    <Form onHandleForm={handleForm} />
                    {finalPoints && finalPoints !== '' ? <Display points={finalPoints} />: ("")}
                </TabPanel>
                <TabPanel>
                    <Table data={tableData} />
                </TabPanel>
            </Tabs>
        
        </div>
    );  
};

export default App;