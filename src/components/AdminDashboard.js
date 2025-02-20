import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const AdminDashboard = () => {
  const [todoLists, setTodoLists] = useState([
    {
      id: 1,
      name: "Billboards",
      tasks: [
        { id: Date.now() + Math.random(), text: "DHA Phase 4 Street 4", completed: false },
        { id: Date.now() + Math.random(), text: "Barket Markeet street 1,2,3", completed: true },
        { id: Date.now() + Math.random(), text: "Gulbarag Main Flex", completed: false },
      ],
      newTask: "",
      expanded: false,
    },
    {
      id: 2,
      name: "Outdoor SMD's",
      tasks: [
        { id: Date.now() + Math.random(), text: "Laptop Repair", completed: false },
      ],
      newTask: "",
      expanded: false,
    },
    {
      id: 3,
      name: "Digital Streamers",
      tasks: [
        { id: Date.now() + Math.random(), text: "Buy Groceries", completed: false },
      ],
      newTask: "",
      expanded: false,
    },
    {
      id: 4,
      name: "Bus Shelters",
      tasks: [
        { id: Date.now() + Math.random(), text: "Buy Groceries", completed: false },
      ],
      newTask: "",
      expanded: false,
    },
    {
      id: 5,
      name: "Shop Brandings",
      tasks: [
        { id: Date.now() + Math.random(), text: "Buy Groceries", completed: false },
      ],
      newTask: "",
      expanded: false,
    },
    {
      id: 6,
      name: "Vahicale Brandings",
      tasks: [
        { id: Date.now() + Math.random(), text: "Buy Groceries", completed: false },
      ],
      newTask: "",
      expanded: false,
    },
    // More lists here...
  ]);

  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        console.error('Error logging out:', error);
        alert(error.message);
      });
  };

  const toggleAccordion = (listId) => {
    setTodoLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId ? { ...list, expanded: !list.expanded } : list
      )
    );
  };

  const addTask = (e, listId) => {
    e.preventDefault();

    setTodoLists((prevLists) =>
      prevLists.map((list) => {
        if (list.id === listId) {
          if (list.newTask.trim() === "") {
            alert("Record cannot be empty");
            return list;
          }
          const newTaskObj = {
            id: Date.now(),
            text: list.newTask,
            completed: false,
          };
          return { ...list, tasks: [...list.tasks, newTaskObj], newTask: "" };
        }
        return list;
      })
    );
  };

  const handleInputChange = (listId, value) => {
    setTodoLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId ? { ...list, newTask: value } : list
      )
    );
  };

  const toggleTaskCompletion = (listId, taskId) => {
    setTodoLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? {
              ...list,
              tasks: list.tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
              ),
            }
          : list
      )
    );
  };

  const deleteTask = (listId, taskId) => {
    setTodoLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? { ...list, tasks: list.tasks.filter((task) => task.id !== taskId) }
          : list
      )
    );
  };

  const editTask = (listId, taskId, newText) => {
    setTodoLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? {
              ...list,
              tasks: list.tasks.map((task) =>
                task.id === taskId ? { ...task, text: newText } : task
              ),
            }
          : list
      )
    );
  };

  return (
    <div className="admin-dashboard">
      <h1 className='main-head'>Welcome to the Admin Dashboard</h1>
      <p className='hello-admin'>Hello, {auth.currentUser?.email}!</p>
      <h2 className='records'>All Records</h2>

      <div className='all-lists'>
      {todoLists.map((list) => (
        <div key={list.id} className="todo-list">
          <h2 onClick={() => toggleAccordion(list.id)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
            {list.name}
            {list.expanded ? (
              // SVG for up arrow
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: '8px' }}
              >
                <path d="M6 15L12 9L18 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              // SVG for down arrow
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: '8px' }}
              >
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </h2>

          {list.expanded && (
            <div className='task-form'>
              <form onSubmit={(e) => addTask(e, list.id)}>
                <input
                  type="text"
                  value={list.newTask}
                  onChange={(e) => handleInputChange(list.id, e.target.value)}
                  placeholder="Add a new record"
                />
                <button type="submit">Add Record</button>
              </form>

              <ul>
                {list.tasks.length === 0 ? (
                  <li>No tasks available</li>
                ) : (
                  list.tasks.map((task) => (
                    <li key={task.id} className={task.completed ? "completed" : ""}>
                      <span
                        onClick={() => toggleTaskCompletion(list.id, task.id)}
                        style={{
                          cursor: "pointer",
                          textDecoration: task.completed ? "line-through red" : "none",
                        }}
                      >
                        {task.text}
                      </span>
                      <button onClick={() => deleteTask(list.id, task.id)} className="delete-btn">
                        Delete
                      </button>
                      <button
                        onClick={() => {
                          const newText = prompt("Edit Record", task.text);
                          if (newText) editTask(list.id, task.id, newText);
                        }}
                        className="edit-btn"
                      >
                        Edit
                      </button>
                    </li>
                  ))
                )}
              </ul>
            </div>
          )}
        </div>
      ))}
</div>
      <button onClick={handleLogout} className="logout-btn">Log Out</button>
    </div>
  );
};

export default AdminDashboard;
