import PropTypes from "prop-types";
import { useState } from "react";

const AddTask = ({ listTask, setlistTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      setError("¡Ambos campos son necesarios! 🌺");
      return;
    }

    setError(""); // Limpiar mensaje de error si es válido
    setlistTask([...listTask, { title, description }]);
    setTitle(""); // Limpiar inputs después de enviar
    setDescription("");
  };

  return (
    <section className="task-section">
      <h1 className="task-title">Agregar una tarea 🌴🐾</h1>

      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título de la tarea"
          className="task-input"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción de la tarea"
          className="task-textarea"
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="task-button">
          Agregar tarea 🌊✨
        </button>
      </form>

      <ul className="task-list">
        {listTask.map((task, index) => (
          <li key={index} className="task-item">
            <h3>{task.title} 📝</h3>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .task-section {
          background: linear-gradient(135deg, #00c4cc, #0071c5);
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          font-family: "Comic Sans MS", sans-serif;
        }

        .task-title {
          color: #fff;
          font-size: 28px;
          text-align: center;
          margin-bottom: 15px;
        }

        .task-form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .task-input,
        .task-textarea {
          width: 80%;
          padding: 10px;
          margin: 10px 0;
          border: 2px solid #c4ebde;
          border-radius: 10px;
          font-size: 16px;
          background-color: #eef6fa;
        }

        .task-button {
          background-color: #ff5e57;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 20px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }

        .task-button:hover {
          background-color: #ff8c71;
        }

        .error-message {
          color: #ffeb3b;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .task-list {
          margin-top: 20px;
          list-style-type: none;
          padding: 0;
        }

        .task-item {
          background-color: #fce38a;
          padding: 15px;
          border-radius: 10px;
          margin: 10px 0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          animation: fadeIn 0.5s ease-in-out;
        }

        .task-item h3 {
          color: #0071c5;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

AddTask.propTypes = {
  listTask: PropTypes.array.isRequired,
  setlistTask: PropTypes.func.isRequired,
};

export default AddTask;
