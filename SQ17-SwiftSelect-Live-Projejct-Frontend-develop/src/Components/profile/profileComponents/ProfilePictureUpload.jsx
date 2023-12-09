import * as React from "react";
import {useDropzone} from "react-dropzone";
import {useState} from "react";
import axios from "../../../api/axios.jsx";
import {SweetAlert} from "../../utils/SweetAlert.jsx";
import {ClipLoader} from "react-spinners";

export const ProfilePictureUpload = ({handleChangeAvatar}) => {
    const [isVisible, setIsVisible] = useState(false);

    const [blur, setBlur] = useState("");

    const [uploadedFiles, setUploadedFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            setUploadedFiles(acceptedFiles);
        },
    });

    function uploadSingleFile(profilePic) {
        setIsVisible(true);
        setBlur("opacity-[0.2]");

        const formData = new FormData();
        formData.append('profilePic', profilePic);

        const token = localStorage.getItem('token');

        axios
            .put("/users/profile-pic", formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data', // Specify content type for file upload
                },
            })
            .then((result) => {
                localStorage.setItem("profilePicture", result.data.data);

                setIsVisible(false);

                SweetAlert('success', 'Update Successful', 'Profile Picture uploaded successfully');

                setTimeout(() => {
                    setBlur("");
                    handleChangeAvatar();
                }, 1000)
            })
            .catch((error) => {

                setIsVisible(false);

                SweetAlert('error', 'Oops!', 'Something went wrong please try again', 2000);

                setTimeout(() => {
                    setBlur("");
                }, 2000)

                console.error('Error uploading resume:', error);
            });
    }

    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            uploadSingleFile(uploadedFiles[0]);
        }} className={`${blur} flex flex-col bg-black items-stretch absolute h-[100vh] w-[100vw] p-[10rem] max-md:w-full max-md:ml-0 opacity-[0.9]`} style={{zIndex: 2}}>

            <div className="items-start mx-auto grid justify-center grow max-md:max-w-full max-md:mt-10">
                <div className="text-xl text-white mx-auto text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch self-start w-fit ">
                    Click or drop a picture to upload your profile
                </div>

                <div {...getRootProps()} className="w-[30vw] max-h-100 border-2 border-dashed border-gray-300 rounded-lg p-4 mb-4 text-white text-center">
                    <input {...getInputProps()} />
                    <p className="text-black">Drop your files here or </p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {uploadedFiles.map((file) => (
                            <li key={file.name} style={{ marginBottom: '8px', padding: '4px', backgroundColor: '#888888', borderRadius: '4px' }}>
                                {file.name}
                            </li>
                        ))}

                        <p className="text-blue-500 cursor-pointer">browse</p>
                        <p className="text-gray-300">Maximum size is: 5MB</p>
                    </ul>
                </div>

                <div className="flex justify-center">
                    <div onClick={handleChangeAvatar} className="text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap mx-auto justify-center items-stretch bg-blue-500 w-fit max-w-full px-8 py-2 rounded-xl self-end cursor-pointer">
                        Cancel
                    </div>

                    <div className="flex gap-2">
                        <button type={"submit"}
                            className="relative flex gap-3 items-center text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap mx-auto justify-center items-stretch bg-blue-500 w-fit max-w-full px-8 py-2 rounded-xl self-end cursor-pointer"
                        >
                            Upload Picture

                            { isVisible &&
                                <ClipLoader color="#36D7B7" loading={true} size={23}/>
                            }

                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}