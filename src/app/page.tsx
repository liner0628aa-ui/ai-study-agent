"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
    return JSON.parse(savedTasks);
  }

  return [
    { text: "수학 공부", done: false },
    { text: "영어 단어", done: false },
    { text: "운동 1시간", done: false }
  ];
});
  const [input, setinput] = useState("");

 
  const addTask = () => {
    setTasks([
  ...tasks,
  {
    text: input,
    done: false
  }
]);
    setinput("");
  };
const deleteTask = (index: number) => {
  const newTasks = tasks.filter((_, i) => i !== index);
  setTasks(newTasks);
};
const toggleTask = (index: number) => {
  const newtasks = [...tasks];


  newtasks[index].done = !newtasks[index].done;

  setTasks(newtasks);
};
const completedCount = tasks.filter(
  (task) => task.done
).length;
const percent =
  tasks.length === 0
    ? 0
    : Math.round(
        (completedCount / tasks.length) * 100
      );

      useEffect(() => {
  localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
  );
}, [tasks]);

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

        <p>
  진행률: {completedCount} / {tasks.length}
</p>

<p>
  달성률: {percent}%
</p>

<hr />


        <hr style={{ margin: "20px 0" }} />

        <h2>📚 오늘 할 일</h2>

        <div style={{ marginTop: "10px" }}>
  {tasks.map((task, index) => (
    <div key={index} style={{ display: "flex", gap: "10px" }}>
      <p
  style={{
    textDecoration: task.done
      ? "line-through"
      : "none"
  }}
>
  {task.text}
</p>
      <input
  type="checkbox"
  checked={task.done}
  onChange={() => toggleTask(index)}
/>
      <button
        onClick={() => deleteTask(index)}
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "2px 8px",
          cursor: "pointer"
        }}
      >
        삭제
      </button>
    </div>
  ))}
</div>
<input
  value={input}
  onChange={(e) => setinput(e.target.value)}
  placeholder="할 일을 입력하세요"
  style={{
    padding: "10px",
    width: "100%",
    marginTop: "10px",
    borderRadius: "8px",
    border: "1px solid gray"
  }}
/>
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