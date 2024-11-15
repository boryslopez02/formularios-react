import { useState } from "react";
import { useRef } from "react";

const NoControlado = () => {

    const form = useRef(null);
    const [error, setError] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();
        setError('');

        const data = new FormData(form.current);
        const {title, description, state} = Object.fromEntries([...data.entries()]);
        console.log(title, description, state)
        if (!title.trim() || !description.trim() || !state.trim()) return setError("Llena todos los campos");
    }

    return (
        <div className="container py-5">
            <form onSubmit={handlesubmit} ref={form}>
                <input type="text" name="title" className="form-control mb-3" placeholder="Ingresar Todo" />
                <textarea name="description" id="" className="form-control mb-3" placeholder="Ingresar Descripcion"/>
                <select name="state" id="" className="form-select mb-3" defaultValue="">
                    <option value="" disabled>Seleccionar</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Completado">Completado</option>
                </select>
                <button className="btn btn-primary" type="submit">Guardar</button>
                <br />
                {error !== '' && error}
            </form>
        </div>
    );
}

export default NoControlado;