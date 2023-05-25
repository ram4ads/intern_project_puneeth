import React, { useRef, useContext} from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { FormDataContext } from '../Signup/Signup';
import './Signature.css'



const SignaturePad = () => {
  const {handleChange, formData, handleSubmit} = useContext(FormDataContext)
  const signatureRef = useRef(null);
  

  const handleClear = () => {
    signatureRef.current.clear();
  };

  const handleSave = async() => {
    const canvas = signatureRef.current
    const signatureDataURL = canvas.toDataURL()
    handleChange({target: {name:"userSignature", value: signatureDataURL}})
       console.log("save:", formData);
  };

  const canvasStyles = {
    background:"white",
    borderRadius: '10px',
  }
  
  
  return (
    <div className='signatureContainer'>
      <SignatureCanvas ref={signatureRef} canvasProps={{ width: 500, height: 200, style: canvasStyles }}  />
      <div className="buttoncontainer">
      <button onClick={handleClear} className='glow-on-hover'>Clear</button>
      <button onClick={handleSave} className='glow-on-hover'>Save</button>
      </div>
      
      <div>
        <button type='submit' className='glow-on-hover' onClick={handleSubmit}>submit</button>
      </div>
    </div>
  );
};

export default SignaturePad;
