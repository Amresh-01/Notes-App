# 📝 Notes App  - https://notes-app-frontend-0y5g.onrender.com

A full-stack notes application with a modern frontend and robust backend that allows users to create, edit, and manage their notes efficiently with cloud storage.

## ✨ Features

- **Create Notes**: Quickly create new notes with a title and content
- **Edit Notes**: Modify existing notes anytime
- **Delete Notes**: Remove notes you no longer need
- **Cloud Storage**: Notes are stored in a database for persistent access across devices
- **User Authentication**: Secure login and registration system
- **Search Functionality**: Find your notes quickly with search
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **RESTful API**: Well-structured backend API for all operations
- **Real-time Updates**: Instant synchronization of notes

## 🚀 Getting Started

### Prerequisites

**Frontend:**
- A modern web browser (Chrome, Firefox, Safari, or Edge)

**Backend:**
- Node.js (v14 or higher)
- npm or yarn
- MongoDB/MySQL/PostgreSQL (depending on your database choice)

### Installation

#### 1. Clone the repository
```bash
git clone https://github.com/Amresh-01/Notes-App.git
cd Notes-App
```

#### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file and add your environment variables
cp .env.example .env

# Update .env with your configuration:
# PORT=5000
# DATABASE_URL=your_database_connection_string
# JWT_SECRET=your_jwt_secret_key

# Run database migrations (if applicable)
npm run migrate

# Start the backend server
npm start
```

#### 3. Frontend Setup

```bash
# Navigate to frontend directory (from root)
cd frontend

# Install dependencies (if using a framework)
npm install

# Start the frontend application
npm start

# Or simply open index.html in your browser if using vanilla HTML/CSS/JS
```

## 📖 Usage

1. **Register/Login**: Create an account or login to access your notes
2. **Creating a Note**: Click on the "Add Note" button to create a new note
3. **Editing a Note**: Click on any existing note to edit its content
4. **Deleting a Note**: Click the delete button on a note to remove it
5. **Logout**: Securely logout when you're done

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Structure and layout
- **CSS3**: Styling and responsive design
- **JavaScript**: Functionality and interactivity
- **Fetch API**: Communication with backend

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **MongoDB**: Database 
- **JWT**: Authentication and authorization
- **bcrypt**: Password hashing
- **dotenv**: Environment variable management

## 📁 Project Structure

```
Notes-App/
│
├── frontend/
│   ├── index.html          # Login HTML file
│   ├── dashboard.html       # Dashboard HTML file
│   ├── signup.html          # Signup HTML file
│   ├── style.css       # Stylesheet
│   ├── script.js        # Frontend JavaScript
│
├── backend/
│   ├── index.js           # Entry point
│   ├── db/
│   │   └── db.js           # Database configuration
│   ├── models/
│   │   ├── User.js         # User model
│   │   └── Note.js         # Note model
│   ├── routes/
│   │   ├── auth.js         # Authentication routes
│   │   └── notes.js        # Notes CRUD routes
│   ├── controllers/
│   │   ├── authController.js
│   │   └── notesController.js
│   ├── middleware/
│   │   └── auth.js         # Authentication middleware
│   ├── .env.example        # Environment variables template
│   └── package.json        # Backend dependencies
│
└── README.md               # Project documentation
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Notes
- `GET /api/notes` - Get all notes for authenticated user
- `GET /api/notes/:id` - Get a specific note
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## 🔒 Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request


## 👨‍💻 Author

**Amresh**
- GitHub: [@Amresh-01](https://github.com/Amresh-01)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped improve this project
- Inspired by the need for a simple, efficient note-taking solution with cloud synchronization

## 📧 Contact

If you have any questions or suggestions, feel free to reach out or open an issue in the repository.

## 🐛 Known Issues

- List any known issues or limitations here

⭐ If you found this project helpful, please consider giving it a star on GitHub!
