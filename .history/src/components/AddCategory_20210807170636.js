import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }

    }

    return (

        <form onSubmit={handleSubmit} className="my-5 sm:flex md:items-center md:content-center">
            <input
                className="block mx-auto text-xl text-gray-600 my-5 outline-none rounded border-b-2 border-gray-400 focus:border-blue-500"
                type="text"
                placeholder="Ingrese un nombre"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button className="block border-4 border-gray-800 text-2xl hover:border-gray-200 bg-white hover:bg-gray-800 hover:text-white transition duration-500  py-3 px-6 mx-auto rounded-full">Buscar</button>
        </form>

    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}