import React, { useState } from 'react';
import axios from 'axios';
import { ProgressBar } from 'react-bootstrap';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('csvFile', selectedFile);

    axios.post('http://localhost:5000/api/upload', formData, {
      onUploadProgress: progressEvent => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setUploadProgress(percentCompleted);
      }
    })
    .then(response => alert('File successfully uploaded'))
    .catch(error => alert('Failed to upload file'));
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploadProgress > 0 && <ProgressBar now={uploadProgress} label={`${uploadProgress}%`} />}
    </div>
  );
};

export default FileUpload;
