import React, { useState } from 'react';
import useFormInput from '../CustomHooks/FormInput';

function AddToList() {
    const item = useFormInput('');
    return (
        <div>
            <input {...item} />
        </div>
    )
}

export default AddToList;
