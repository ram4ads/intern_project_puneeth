import React,{useState, useContext} from "react";
import { FormDataContext } from "../Signup/Signup";
import './ImageUploader.css'

const ImageUploader=()=>{
    const [selectImage, setSelectImage] = useState(null)
    const {formData,handleChange,handleClickTab} = useContext(FormDataContext);

    const handleImageChange=(event)=>{
        const file = event.target.files[0]
        const reader = new FileReader();

        reader.onload=()=>{
            setSelectImage(reader.result)
            handleChange({target : {name : "userImage", value : reader.result}});
        }

        if(file){
            reader.readAsDataURL(file);
            
        }
    }

    const handleImageSave=()=>{
        console.log("Image Saved:", formData.userImage)
    }
    return(
        <div className="imagecontianer">
        <div>
            <input type='file' accept="image/*" onChange={handleImageChange} />
            {selectImage && (
            <div className="selectimagecontainer">
                <img src={selectImage} alt="SelectedCapture" className="imagecss"/>
                <button onClick={handleImageSave}>Save Image</button>
            </div>
            )}
            <button type="button" onClick={handleClickTab}>Next</button>
        </div>
        </div>
        
    )
}
export default ImageUploader