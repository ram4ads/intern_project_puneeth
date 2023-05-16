//import logo from './logo.svg';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FormReg from './components/FormReg/FormReg'
import "./App.css"

function App() {
  return (
    <div className='App'>
        
        <Tabs className="Tabs">
         <img src='https://static.vecteezy.com/system/resources/previews/008/214/517/original/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg' className="imagelogo" alt='logo'/>
       
            <TabList>
                <Tab>Form Registration</Tab>
                <Tab>Image Upload</Tab>
                <Tab>Signature</Tab>
            </TabList>
            <TabPanel>
                <FormReg/>
            </TabPanel>
            <TabPanel>
                <p>Image upload</p>
            </TabPanel>
            <TabPanel>
                <p>Signature details</p>
            </TabPanel>
        </Tabs>
    </div>
  );
}

export default App;
