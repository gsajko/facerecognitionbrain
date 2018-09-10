import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
    return(
        <div className='center ma shadow-5'>
            <div className='absolute m2'>
                <img alt='submited file' src={imageUrl} width='500px' heigh='auto'/>   
            </div>

        </div>
    );
}

export default FaceRecognition;