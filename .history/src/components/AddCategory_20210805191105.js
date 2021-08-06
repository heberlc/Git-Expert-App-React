import { useState } from "react"

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [...cats, inputValue]);
            setInputValue('');
        }

    }

    return (

        <form onSubmit={handleSubmit}>
            <input
                className="w-full text-xl text-gray-600 my-5 outline-none rounded border-b-2 border-gray-400 focus:border-blue-500"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>

    )
}
