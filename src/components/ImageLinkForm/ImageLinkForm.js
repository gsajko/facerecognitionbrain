import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return(
        <div>
            <p className='f3 b'>
                {'This Magic will detect faces in your pictures, give it a try'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                    <button 
                        className='f3 w-30 grow link dib white bg-blue' 
                        onClick={onButtonSubmit}
                        >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;