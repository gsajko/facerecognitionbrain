import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return(
        <div className='center ma shadow-5'>
            <div className='absolute m2'>
                <img id='inputImage' alt='submited file' src={imageUrl} width='500px' heigh='auto'/>
                <div className='bounding-box'></div>   
            </div>

        </div>
    );
}

export default FaceRecognition;