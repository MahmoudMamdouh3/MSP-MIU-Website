# MSP Tech Club MIU Website

## 🏆 Overview
This is the official website for the **MSP Tech Club at Misr International University (MIU)**.  
It provides information about the club, upcoming events, technical and non-technical sessions, hackathons, learning materials, and membership opportunities.

## 📌 Features
- **Event Management**: Users can view upcoming events and register.
- **Learning Resources**: Access technical and non-technical materials.
- **Blog & News**: Articles on tech trends and club updates.
- **Membership & Recruitment**: Online application and selection process.
- **User Roles**: Public users, club members, and board/admins with different permissions.

## 🛠 Tech Stack
### **Backend (MVC Architecture)**
- **Node.js** (Express.js) – Backend server
- **MySQL** – Relational database
- **Sequelize** – ORM for database interaction
- **JWT Authentication** – Secure login & access control
- **Cloud Hosting** – Deployed on **Azure**/**Firebase**
  
### **Frontend**
- **React.js** – UI framework
- **Context API/Redux** – State management
- **CSS/Tailwind** – Styling
- **Axios** – API communication

---

## 🚀 Getting Started

### **1⃣ Clone the Repository**
```bash
git clone https://github.com/YOUR_USERNAME/MSP-Tech-Club-Website.git
cd MSP-Tech-Club-Website
```

### **2⃣ Install Dependencies**
#### **Backend**
```bash
cd backend
npm install
```

#### **Frontend**
```bash
cd ../frontend
npm install
```

---

## 🐂 Project Structure

```
MSP-Tech-Club-Website/
│️─ backend/                   # Node.js backend (Express.js)
│   ├─ controllers/           # Controllers (Business logic)
│   ├─ models/                # MySQL Models (Sequelize)
│   ├─ routes/                # API Endpoints
│   ├─ middlewares/           # Authentication & Security
│   ├─ config/                # Database & App Configurations
│   ├─ utils/                 # Helper Functions (Email, Logs)
│   └─ server.js              # Main Server File
│️
│️─ frontend/                  # React.js Frontend
│   ├─ public/                # Static Assets
│   ├─ src/                   # Source Code
│   │   ├─ components/        # Reusable UI Components
│   │   ├─ pages/             # Website Pages
│   │   ├─ context/           # Global State Management
│   │   ├─ services/          # API Handlers
│   │   ├─ styles/            # CSS Files
│   │   └─ App.js             # Main Component
│   └─ index.js           # React Entry Point
│️
│️─ database/                  # MySQL Scripts
│   ├─ migrations/            # DB Migrations
│   └─ seeders/               # Sample Data
│️
│️─ docs/                      # Documentation
│   ├─ API.md                 # API Endpoints
│   └─ Architecture.md        # MVC Design Overview
│️
│️─ .gitignore                 # Ignore node_modules, env files
│️─ README.md                  # Project Documentation
│️─ .env                       # Environment Variables
```

---

## 🔧 Database Setup (MySQL)

### **1⃣ Install MySQL**
- **Linux**: `sudo apt install mysql-server`
- **Windows**: Download from [MySQL Website](https://dev.mysql.com/downloads/installer/)
- **Mac**: `brew install mysql`

### **2⃣ Create a Database**
```sql
CREATE DATABASE msp_tech_club;
```

### **3⃣ Configure `.env` File**
```ini
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=msp_tech_club
DB_DIALECT=mysql
JWT_SECRET=your_secret_key
```

### **4⃣ Run Migrations**
```bash
cd backend
npx sequelize-cli db:migrate
```

---

## 🎯 Running the Project

### **Backend**
```bash
cd backend
npm run dev
```
- The backend will start at **http://localhost:5000**

### **Frontend**
```bash
cd frontend
npm start
```
- The frontend will start at **http://localhost:3000**

---

## 🔥 Contributing
1. **Fork the repository** 🍽️  
2. **Create a feature branch** (`git checkout -b feature-branch`)  
3. **Commit changes** (`git commit -m "Add feature"`)  
4. **Push to GitHub** (`git push origin feature-branch`)  
5. **Create a Pull Request** ✅  

---

## 🔒 Security & Best Practices
- **JWT Authentication** for secure logins
- **Input validation** to prevent SQL injections
- **.env file** to protect sensitive data
- **SEO Optimization** for better visibility

---

## 📩 Contact
**💎 Email:** contact@msptechclubmiu.com  
**🌐 Website:** [msptechclubmiu.com](http://msptechclubmiu.com)  
**📲 Socials:** [LinkedIn](#) | [Instagram](#) | [Twitter](#)  

---

