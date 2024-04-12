import React, { useState } from 'react';
import axios from 'axios';

const PredictionPage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [processedImage, setProcessedImage] = useState(null);
    const [originalImage, setOriginalImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        setOriginalImage(URL.createObjectURL(e.target.files[0])); // Display original image
    };

    const handleSubmit = async () => {
        if (!selectedFile) {
            setError('Please select an image file.');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        setLoading(true); // Show loading spinner

        try {
            const response = await axios.post('http://localhost:5000/predict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                responseType: 'arraybuffer', // Set the responseType to 'arraybuffer'
            });

            if (response.data.error) {
                setError(response.data.error);
                setLoading(false); // Hide loading spinner
                return;
            }

            // Convert the array buffer to a data URL for image display
            const processedBlob = new Blob([response.data], { type: 'image/png' });
            const processedImageUrl = URL.createObjectURL(processedBlob);
            setProcessedImage(processedImageUrl);
            setLoading(false);
        } catch (error) {
            setError('An error occurred while processing the image.');
            setLoading(false); // Hide loading spinner
        }
    };

    const handleDownload = () => {
        // Create a temporary link element to trigger the download
        const link = document.createElement('a');
        link.href = processedImage;
        link.download = 'processed_image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex items-center justify-center ">
            <div className="flex flex-col items-center justify-center m-8 p-8 max-w-screen-md border rounded-lg shadow-2xl">
                <h1 className="text-3xl font-bold mb-4">Brain Tumor Prediction</h1>
                <input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="mb-2"
                />

                <button
                    onClick={handleSubmit}
                    className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
                    disabled={loading}
                >
                    {loading ? 'Processing...' : 'Predict'}
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
                <div className="flex ">
                    {originalImage && (
                        <div className="m-4">
                            <h2 className="text-xl font-semibold mb-2">Original Image</h2>
                            <img src={originalImage} alt="Original" className="rounded-lg border-2 border-purple-600 max-w-full max-h-96" />
                        </div>
                    )}
                    {processedImage && (
                        <div className="m-4">
                            <h2 className="text-xl font-semibold mb-2">Processed Image</h2>
                            <img src={processedImage} alt="Processed" className="rounded-lg border-2 border-purple-600 max-w-full max-h-96" />
                            <button onClick={handleDownload} className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
                                Download
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </div>

    );
};

export default PredictionPage;
