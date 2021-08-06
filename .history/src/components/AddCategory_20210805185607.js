import { useState } from "react"

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hola mundo')

    return (
        <>
            <input
                className="w-full text-xl text-gray-600 my-5 outline-none rounded border-b-2 border-gray-400 focus:border-blue-500"
                type="text"
                value={inputValue}
            />
        </>
    )
}
