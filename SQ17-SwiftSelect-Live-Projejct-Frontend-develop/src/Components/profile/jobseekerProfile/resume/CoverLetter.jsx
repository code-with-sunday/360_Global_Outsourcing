import * as React from "react";
import {useState} from "react";
import {useDropzone} from "react-dropzone";
import axios from "../../../../api/axios.jsx";
import {SweetAlert} from "../../../utils/SweetAlert.jsx";

export const CoverLetter = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            setUploadedFiles(acceptedFiles);
        },
    });

    function uploadSingleFile(coverletter) {
        const formData = new FormData();
        formData.append('coverLetter', coverletter);

        // Retrieve the JWT token from your authentication system (e.g., from localStorage)
        const token = localStorage.getItem('token');

        axios
            .put("/job-seeker/update-profile/cover-letter", formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data', // Specify content type for file upload
                },
            })
            .then((result) => {
                console.log(result.data)
                SweetAlert('success', 'Update Successful', 'coverletter uploaded successfully');
            })
            .catch((error) => {
                SweetAlert('error', 'Oops!', 'Something went wrong please try again', 2000);
                console.error('Error uploading coverletter :', error);
            });
    }

    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            uploadSingleFile(uploadedFiles[0]);
        }} className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-start flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="text-gray-300 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit ">
                    drop your cover letter in the box below
                </div>

                <div{...getRootProps()} className="w-[30vw] max-h-100 border-2 border-dashed border-gray-300 rounded-lg p-4 mb-4 mt-4 text-white text-center">
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

                <input
                    type="submit"
                    name="submit"
                    value="Save Changes"
                    className="text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-stretch bg-blue-500 w-fit max-w-full mt-8 px-4 py-2 rounded-xl self-end cursor-pointer"
                />
            </div>
        </form>
    );
}