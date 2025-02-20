import { useState } from "react";

const Cat = () => {
    const [cat, setCat] = useState({
        name: "Dexter",
        year: 5
    });

    const handleClick = () => {
        // setCat({...cat, year: cat.year + 1});
        setCat((prev) => ({...prev, year: cat.year++}));
    }

    return (
        <>
            <h2>{cat.name} - {cat.year}</h2>
            <button className="btn btn-light" onClick={handleClick}>Year update</button>
        </>
    );
}

export default Cat;