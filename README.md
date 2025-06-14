# 🗳️ Voting App

A secure and role-based online voting application built using **Node.js**, **Express**, **MongoDB**, and **JWT authentication**. Voters can register, log in, view candidates, cast their vote once, and see voting results. Admins can manage candidates.

---

## 🚀 Features

- 🧑‍💼 **User Registration & Login**
- 🔒 **JWT-based Authentication**
- 👤 **Voter & Admin Roles**
- 🗳️ **One Vote per User**
- 🧾 **Candidate Management (Admin only)**
- 📊 **Real-time Vote Count Display**
- 🧠 **User Profile with Voted Candidate**
- 🔧 RESTful API with Postman support

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Token)
- **Frontend:** HTML, CSS, JS
- **Testing:** Postman
- **Cloud:** Google Cloud Console (for API Key management in AI variant)

---

## 📂 Folder Structure

Voting-App/
│
├── routes/ # Express route files
│ ├── userRoutes.js
│ └── candidateRoutes.js
│
├── models/ # Mongoose models
│ ├── user.js
│ └── candidate.js
│
├── frontend/ # HTML/CSS/JS files
│ ├── login.html
│ ├── register.html
│ ├── vote.html
│ └── profile.html
│
├── db.js # MongoDB connection
├── jwt.js # JWT middleware
├── server.js # Main server entry point
└── .gitignore # Git ignored files


---

## 🔐 Authentication & Roles

- JWT tokens are issued at login and stored in localStorage.
- Middleware checks for valid tokens.
- Users with the role `admin` can:
  - Add, update, delete candidates.
- Voters can:
  - View candidates
  - Vote only once
  - See whom they voted for (on profile)

---

## 📬 API Endpoints (Postman-ready)

| Method | Endpoint                 | Description                    |
|--------|--------------------------|--------------------------------|
| POST   | `/user/register`         | Register a new user            |
| POST   | `/user/login`            | Login and receive JWT token    |
| GET    | `/user/profile`          | Get user profile (protected)   |
| GET    | `/candidate/`            | List all candidates            |
| POST   | `/candidate/`            | Add a candidate (admin only)   |
| GET    | `/candidate/vote/:id`    | Vote for a candidate           |
| GET    | `/candidate/vote/count`  | View vote results              |

---

## 📸 Screenshots

You can test this project using **Postman** or the built-in frontend pages:

> Sample Postman vote result request:
![Postman Screenshot](./screenshots/postman-vote.png)

> User Profile View:
![Profile Screenshot](./screenshots/profile.png)

---

## 💻 How to Run

```bash
# Install dependencies
npm install

# Set environment variables (MongoDB URI, JWT secret, etc.)

# Start server
node server.js

🙋‍♂️ Author
@amans2003

