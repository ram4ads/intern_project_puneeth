//import logo from './logo.svg';
import React,{ useState,createContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FormReg from './components/FormReg/FormReg' 
import Signature from './components/Signature/SignatureValue'
import ImageUploader from "./components/ImageUpload/ImageUploader";
import WebCameras from "./components/WebCamera/WebCamera";
import axios from 'axios'
import "./App.css"


export const FormDataContext = createContext();

function App() {
    const[tabFlow, setTabFlow] = useState(0)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        PhoneNumber:'',
        email: '',
        password: '',
        confirmpassword: '',
        userImage:null,
        userSignature:null,
        userCapture:null
      });
       
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
    //Submission button// 
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Save:", formData);
      
       axios.post("http://localhost:0969/userData",formData)
       .then(()=> {
        console.log("succesfully sended")
       }).catch((err) => {
          console.log("error from frontend while sending data" , err)
       })
    
    }
    const handleClickTab = ()=>{
        console.log(formData)
        setTabFlow(previous => previous +1)
    }
  return (
    <FormDataContext.Provider value={{formData, handleChange, handleClickTab, handleSubmit}}>
        <div className='App'>
        
        <Tabs className="Tabs" selectedIndex={tabFlow} onSelect={index => setTabFlow(index)}>
         <img src='https://static.vecteezy.com/system/resources/previews/008/214/517/original/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg' className="imagelogo" alt='logo'/>
       
            <TabList>
                <Tab>FormRegistration</Tab>
                <Tab>ImageUploader</Tab>
                <Tab>Web Camera</Tab>
                <Tab>Signature</Tab>
            </TabList>
            <TabPanel>
            <FormReg/>
            </TabPanel>
            <TabPanel>
               <ImageUploader handleClickTab={handleClickTab}/>
                
            </TabPanel>
            <TabPanel>
                <WebCameras handleClickTab={handleClickTab}/>
            </TabPanel>
            <TabPanel>
               <Signature/>
            </TabPanel>
        </Tabs>
    </div>
    </FormDataContext.Provider>
 
  );
}

export default App;
