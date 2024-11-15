import { useState } from "react";
import { useRef } from "react";

const Controlado = () => {
  const [todo, setTodo] = useState({
    title: "Todo #1",
    description: "Descripction #1",
    state: "Pendiente",
    priority: true,
  });

  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  // const [state, setState] = useState('pendiente');

  const {title, description, state, priority} = todo;

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(title, description, state, priority)
  };

  const handleChange = (e) => {
    const {name, type, checked, value} = e.target;
    setTodo({
      ...todo,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <form onSubmit={handlesubmit}>
      <input
        type="text"
        name="title"
        className="form-control mb-3"
        placeholder="Ingresar Todo"
        value={todo.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        id=""
        className="form-control mb-3"
        placeholder="Ingresar Descripcion"
        value={todo.description}
        onChange={handleChange}
      />
      <div className="mb-3">
        <label htmlFor="check" className="form-label me-2">
          Dar prioridad
        </label>
        <input
          type="checkbox"
          className="form-check-input"
          name="priority"
          id="check"
          checked={todo.priority}
          onChange={handleChange}
        />
      </div>
      <select
        name="state"
        id=""
        className="form-select mb-3"
        value={todo.state}
        onChange={handleChange}
      >
        <option value="" disabled>
          Seleccionar
        </option>
        <option value="Pendiente">Pendiente</option>
        <option value="Completado">Completado</option>
      </select>
      <button className="btn btn-primary" type="submit">
        Guardar
      </button>
    </form>
  );
};

export default Controlado;
