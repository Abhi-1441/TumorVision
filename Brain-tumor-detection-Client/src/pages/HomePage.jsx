import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handlePredictClick = () => {
        navigate('/predict');
    };

    return (
        <div className="container mx-auto m-8 max-w-screen-md border rounded-lg shadow-2xl p-8">
            <h1 className="text-3xl font-bold mb-4">Welcome to our Tumor Prediction Platform</h1>
            
            {/* Introduction to Brain Tumor */}
            <div className="mb-8">
                <h4 className="text-2xl font-semibold mb-2">Introduction to Brain Tumor</h4>
                <p className="mb-4">A brain tumor is a mass or growth of abnormal cells in the brain. Brain tumors can be benign (non-cancerous) or malignant (cancerous). They can cause various symptoms depending on their location and size, including headaches, seizures, changes in vision, and difficulty with balance or walking.</p>
                <p className="mb-4">Early detection and treatment of brain tumors are essential for improving outcomes. Our platform aims to assist in the prediction of brain tumors using advanced technology.</p>
            </div>
            
            {/* Educational Resources Section */}
            <div className="mb-8">
                <h4 className="text-2xl font-semibold mb-2">Educational Resources</h4>
                <ul className="list-disc pl-8">
                    <li><a target='_blank' href="https://www.linkedin.com/pulse/understanding-brain-tumours-comprehensive-guide-yashodahospitals#:~:text=Primary%20brain%20tumours%20are%20further,%2C%20and%20schwannomas%2C%20among%20others.">Understanding Brain Tumors: A Comprehensive Guide</a></li>
                    <li><a target='_blank' href="https://www.mayoclinic.org/diseases-conditions/brain-tumor/symptoms-causes/syc-20350084">Types of Brain Tumors and Their Symptoms</a></li>
                    <li><a target='_blank' href="https://www.cancer.net/cancer-types/brain-tumor/types-treatment">Treatment Options for Brain Tumors</a></li>
                    <li><a target='_blank' href="https://braintumor.org/support-services/support-groups/brain-tumor-support-conversations/#:~:text=The%20Brain%20Tumor%20Support%20Conversations,of%20a%20brain%20tumor%20diagnosis.">Support Groups for Brain Tumor Patients and Families</a></li>
                </ul>
            </div>
            
            {/* Tumor Prediction Section */}
            <div>
                <h4 className="text-2xl font-semibold mb-4">Predict Brain Tumor</h4>
                <p className="mb-4">If you want to predict brain tumor using our platform, click the button below:</p>
                <button onClick={handlePredictClick} className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
                    Predict Tumor
                </button>
            </div>
        </div>
    );
};

export default HomePage;
