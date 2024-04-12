# TumorVision

TumorVision is a web application designed to assist in the prediction and detection of brain tumors. It combines a Flask backend for image processing and prediction with a React frontend for user interaction.

## Features

- **Tumor Prediction:** Users can upload brain images for tumor prediction and detection.
- **Educational Resources:** Access to educational materials related to brain tumors, including guides and articles.
- **User-Friendly Interface:** Intuitive interface for easy navigation and interaction.
- **Downloadable Results:** Processed images containing tumor predictions can be downloaded for further analysis.

## Technologies Used

### Backend (Flask)
- **Flask:** Lightweight web framework for Python.
- **Ultralytics YOLOv8m Model:** Machine learning model for image analysis and tumor detection.
- **PIL (Python Imaging Library):** Python library for image processing.
- **io:** Python module for handling input and output streams.

### Frontend (React)
- **React.js:** JavaScript library for building user interfaces.
- **Axios:** Promise-based HTTP client for making requests to the Flask backend.
- **Tailwind CSS:** Utility-first CSS framework for styling the frontend.
- **react-router-dom:** Routing library for navigation between different components.

## Getting Started

### Backend Setup
1. Install dependencies: `pip install -r requirements.txt`
2. Run the Flask server: `python app.py`

### Frontend Setup
1. Install dependencies: `npm install`
2. Start the development server: `npm start`

## Usage
1. Open your web browser and navigate to `http://localhost:3000` to access the TumorVision application.
2. Upload a brain image for tumor prediction.
3. View the prediction results and download the processed image if desired.

## Future Enhancements
- Enhance prediction accuracy through continuous model training and refinement.
- Integrate with healthcare systems for seamless sharing of prediction results.
- Expand the application's scope to include prediction and detection of other health conditions.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the [MIT License](LICENSE).
