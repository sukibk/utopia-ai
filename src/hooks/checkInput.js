import {useState} from "react";

export const useCheckInput = (validator) =>{
    const [value, setValue] = useState('')
    const [isVisited, setIsVisited] = useState(false)

    const inputIsValid = validator(value);
    const hasError = !inputIsValid && isVisited;

    const inputHandler = e =>{
        setValue(e.target.value)
        setIsVisited(true);
    }

    const blurHandler = () => {
        setIsVisited(true);
    }

    const reset = () => {
        setValue('');
        setIsVisited(false);
    }

    return {
        value,
        inputIsValid,
        hasError,
        inputHandler,
        blurHandler,
        reset
    }
}

export default useCheckInput;