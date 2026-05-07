"use client";
import { useState } from "react";
 export default function Home() {
  const [tasks, setTasks] = useState([
    "수학 공부",
    "영어 단어",
    "운동 1시간"
  ]);

  const addTask = () => {
    const newTask = "새 할 일";
    setTasks([...tasks, newTask]);
  };

  return (
    <main style={{
      padding: "40px",
      fontFamily: "sans-serif",
      backgroundColor: "#f5f5f5",
      minHeight: "100vh"
    }}>
      
      <div style={{
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}>
        
        <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
          🧠 AI Study Agent
        </h1>

        <p style={{ marginTop: "10px", color: "#555" }}>
          너의 공부 + 운동 + 습관 관리 시스템
        </p>

        <hr style={{ margin: "20px 0" }} />

        <h2>📚 오늘 할 일</h2>

        <div style={{ marginTop: "10px" }}>
          {tasks.map((task, index) => (
            <p key={index}>✔ {task}</p>
          ))}
        </div>

        <button
          onClick={addTask}
          style={{
            marginTop: "20px",
            padding: "10px 15px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          + 할 일 추가
        </button>

      </div>

    </main>
  );
}