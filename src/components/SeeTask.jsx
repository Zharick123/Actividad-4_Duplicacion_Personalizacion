import PropTypes from "prop-types";

const SeeTask = ({ listTask }) => {
  const elements = listTask.map((item, index) => (
    <li key={index} className="task-item">
      <h2>{item.title || "Sin título"} 🌺</h2>
      <p>{item.description || "Sin descripción"}</p>
    </li>
  ));

  return (
    <div className="see-task-section">
      <h1 className="see-task-title">Lista de Tareas 📝</h1>
      {listTask.length > 0 ? <ul>{elements}</ul> : <p>No hay tareas aún.</p>}

      <style jsx>{`
        .see-task-section {
          background: linear-gradient(135deg, #00c4cc, #0071c5);
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          font-family: "Comic Sans MS", sans-serif;
          margin-top: 20px;
        }

        .see-task-title {
          color: #fff;
          font-size: 28px;
          text-align: center;
          margin-bottom: 15px;
        }

        ul {
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

        .task-item h2 {
          color: #0071c5;
          font-size: 22px;
        }

        .task-item p {
          color: #333;
          font-size: 16px;
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
    </div>
  );
};

SeeTask.propTypes = {
  listTask: PropTypes.array.isRequired,
};

export default SeeTask;
