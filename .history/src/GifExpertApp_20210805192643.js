import { useState } from "react";

import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Mob Psycho 100']);

    return (
        <>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 divide-y divide-blue-500 mb-5">
                    <h2 className="text-2xl font-bold p-2">GifExpertApp</h2>
                    <h4 className="text-xs text-gray-700 p-2">DevHeber</h4>
                </div>

                <AddCategory setCategories={setCategories} />

                <ul className="list-decimal list-inside">
                    {
                        categories.map(category => (
                            <li key={category}>{category}</li>
                        ))
                    }
                </ul>
            </div>
        </>


    )
}
