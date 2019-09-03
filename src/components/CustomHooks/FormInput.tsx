import { useState } from 'react';

export default function useFormInput(initialValue: string) {
    const [value, setValue] = useState(initialValue);

    const handleChange = ({ target: { value } }: any) => {
        setValue(value);
    }

    return {
        value,
        onChange: handleChange
    };
}