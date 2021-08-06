import { useState } from "react"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch Man', 'Mob Psycho 100']);

    const handleAdd = () => {
        setCategories(cats => [...cats, 'Chainsaw Man']);
    }

    return (
        <>
            <div className="container mx-auto p-4">
                <div class="grid grid-cols-1 divide-y divide-blue-500">
                    <h2 className="text-2xl font-bold p-2">GifExpertApp</h2>
                    <h4 className="text-xs text-gray-700 p-2">DevHeber</h4>
                </div>

                <button
                    onClick={handleAdd}
                    className="py-3 px-2 bg-gray-800 text-white"
                >
                    Agregar
                </button>
                <ol>
                    {
                        categories.map(category => {
                            return (
                                <li key="category">
                                    {category}
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        </>


    )
}
