import { useState } from "react"

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hola mundo');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (

        <form>
            <input
                className="w-full text-xl text-gray-600 my-5 outline-none rounded border-b-2 border-gray-400 focus:border-blue-500"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>

    )
}
