// ===== Configuration =====
const API_URL = "https://notes-app-backened.onrender.com/api"; 

// ===== Signup =====
async function signup() {
  const username = document.getElementById("signup-username").value.trim();
  const email = document.getElementById("signup-email").value.trim();
  const password = document.getElementById("signup-password").value.trim();

  if (!username || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  try {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await res.json();
    alert(data.message || "Signup successful! Please login.");
    window.location.href = "index.html";
  } catch (err) {
    console.error(err);
    alert("Signup failed.");
  }
}

// ===== Login =====
async function login() {
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    if (res.ok && data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "dashboard.html";
    } else {
      alert(data.message || "Login failed");
    }
  } catch (err) {
    console.error(err);
    alert("Login failed.");
  }
}

// ===== Logout =====
function logout() {
  localStorage.removeItem("token");
  window.location.href = "index.html";
}

// ===== Fetch Notes =====
async function fetchNotes() {
  const token = localStorage.getItem("token");
  if (!token) return (window.location.href = "login.html");

  try {
    const res = await fetch(`${API_URL}/notes`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const notes = await res.json();
    renderNotes(notes);
  } catch (err) {
    console.error(err);
    alert("Failed to fetch notes");
  }
}

// ===== Render Notes =====
function renderNotes(notes) {
  const container = document.getElementById("notes-container");
  container.innerHTML = "";

  if (!notes || notes.length === 0) {
    container.innerHTML = "<p>No notes yet!</p>";
    return;
  }

  notes.forEach((note) => {
    const div = document.createElement("div");
    div.className = "note";
    div.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.content}</p>
      <button onclick="editNote('${note._id}', '${escapeHtml(
      note.title
    )}', '${escapeHtml(note.content)}')">Edit</button>
      <button onclick="deleteNote('${note._id}')">Delete</button>
    `;
    container.appendChild(div);
  });
}

// ===== Add Note =====
async function addNote() {
  const title = document.getElementById("note-title").value.trim();
  const content = document.getElementById("note-content").value.trim();
  if (!title || !content) {
    alert("Enter both title and content");
    return;
  }

  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${API_URL}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, content }),
    });
    if (!res.ok) throw new Error("Failed to add note");
    document.getElementById("note-title").value = "";
    document.getElementById("note-content").value = "";
    fetchNotes();
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

// ===== Delete Note =====
async function deleteNote(id) {
  const token = localStorage.getItem("token");
  try {
    await fetch(`${API_URL}/notes/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchNotes();
  } catch (err) {
    console.error(err);
    alert("Failed to delete note");
  }
}

// ===== Edit Note =====
async function editNote(id, oldTitle, oldContent) {
  const newTitle = prompt("Edit title:", oldTitle);
  const newContent = prompt("Edit content:", oldContent);
  const token = localStorage.getItem("token");
  if (!newTitle || !newContent) return;
  try {
    await fetch(`${API_URL}/notes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title: newTitle, content: newContent }),
    });
    fetchNotes();
  } catch (err) {
    console.error(err);
    alert("Failed to edit note");
  }
}

// ===== Escape HTML =====
function escapeHtml(text) {
  return text.replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

// ===== Auto-load notes on dashboard =====
if (window.location.pathname.endsWith("dashboard.html")) {
  fetchNotes();
}
