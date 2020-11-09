import React from 'react';
import {useDispatch, useSelector} from 'react-redux';


const EditForm = () => {
    const note = useSelector((state) => state.note);
    console.log('edit form', note)
    return (
        <div>
            
        </div>
    )
}

export default EditForm;
