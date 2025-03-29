import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {

    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState([]);

    useEffect(() => {
        createValdations();
    }, [formState])

    const isFormValid = useMemo(() => {
        for (const formValue of Object.keys(formValidation)) {
            if (formValidation[formValue] != null) return false
        }
        return true
    }, [formValidation])


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    const createValdations = () => {
        const formCheckValues = {}
        for (const formFiel of Object.keys(formValidations)) {
            const [fn, errorMessage] = formValidations[formFiel]
            formCheckValues[`${formFiel}Valid`] = fn(formState[formFiel]) ? null : errorMessage
        }
        setFormValidation(formCheckValues)
    }

    return {
        ...formState,
        ...formValidation,
        formState,
        isFormValid,
        onInputChange,
        onResetForm,
    }
}