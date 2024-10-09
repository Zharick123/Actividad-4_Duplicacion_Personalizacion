import { useState } from "react";
import AddTask from "../components/AddTask";
import Header from "../components/header/Header";
import SeeTask from "../components/SeeTask";

function Home() {
  const [showComponent, setShowComponent] = useState(true);
  const [listTask, setlistTask] = useState([]);

  return (
    <div className="home-container">
      <Header setShowComponent={setShowComponent} />

      <div className={`content ${showComponent ? "add-task-view" : "see-task-view"}`}>
        {showComponent ? (
          <AddTask listTask={listTask} setlistTask={setlistTask} />
        ) : (
          <SeeTask listTask={listTask} />
        )}
      </div>

      <style jsx>{`
        .home-container {
          padding: 20px;
          background: linear-gradient(135deg, #00c4cc, #0071c5);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: "Comic Sans MS", sans-serif;
        }

        .content {
          width: 100%;
          max-width: 600px;
          background-color: #fff;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease-in-out;
        }

        .add-task-view {
          transform: rotateY(0deg);
        }

        .see-task-view {
          transform: rotateY(180deg);
        }

        @media (min-width: 768px) {
          .home-container {
            padding: 40px;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
