# BudgetWise – AI-Driven Personal Finance Tracker & Budget Advisor  

BudgetWise is a full-stack personal finance management system designed to help individuals  
track expenses, monitor budgets, analyze spending habits, and achieve financial goals.  
The system includes AI-powered insights, a community forum, and data visualization tools.

---

## 🚀 Features

### 🔐 User Authentication
- Secure login & registration  
- JWT-based authentication  
- Role-based access (User / Admin)  
- User profile setup including income, savings, and targets  

### 💰 Expense & Income Tracking
- Add, edit, and delete daily transactions  
- Categorized income & expenses (Food, Rent, Travel, Bills, etc.)  
- Transaction history log  

### 🏦 Budget & Savings Goals
- Create monthly budgets  
- Track remaining budget in real-time  
- Define and monitor saving goals  

### 📊 Financial Trends & Visualization
- Interactive charts for income vs. expenses  
- Pie charts for category-wise spending  
- Monthly financial comparison  

### 📥 Export & Backup
- Export financial data as **PDF** or **CSV**  
- Cloud backup (Google Drive / Dropbox) *(optional)*  

### 🌐 Community Forum (Optional)
- Share budgeting tips  
- Post questions, comments, and likes  
- Community engagement for financial awareness  

---

## 🧩 System Modules

### 1️⃣ **User Authentication and Profile Management**
- JWT-based login/register  
- Role permissions  
- Profile setup with financial details  

### 2️⃣ **Expense & Income Tracking**
- Categorized inputs  
- Edit and delete options  
- Transaction timeline  

### 3️⃣ **Budget & Goal Management**
- Monthly budgeting  
- Savings goal creation  
- Remaining budget auto-tracking  

### 4️⃣ **Financial Trends & Insights**
- Monthly comparison charts  
- Category-wise graphs  
- AI-based financial recommendations *(if enabled)*  

### 5️⃣ **Export & Community Forum (Optional)**
- PDF/CSV export  
- Cloud sync  
- Financial discussion forum  

---

## 📅 Week-Wise Development Plan

### **Milestone 1 — Weeks 1–2**
**Module:** Authentication & Profile  
- User registration  
- Login system  
- Role-based access  
- User profile creation  

### **Milestone 2 — Weeks 3–4**
**Module:** Expense & Income Tracking  
- Add/Edit/Delete transactions  
- Categories implemented  
- Transaction history list  

### **Milestone 3 — Weeks 5–6**
**Module:** Budgeting & Goals  
- Monthly budgets  
- Savings targets  
- Auto-tracking & progress indicators  

### **Milestone 4 — Week 7**
**Module:** Financial Visualization  
- Charts & graphs  
- Spending comparison  
- Category-wise analytics  

### **Milestone 5 — Week 8**
**Module:** Export & Forum (Optional)  
- PDF/CSV export  
- Cloud backup  
- Forum for financial tips  

---

## 📌 Evaluation Criteria

| Week | Requirement |
|------|-------------|
| Week 2 | Authentication + User Profile functional |
| Week 4 | Expense & Income Management complete |
| Week 6 | Budget & Savings Goal module complete |
| Week 7 | Accurate charts and visualizations |
| Week 8 | Export/Cloud Sync + Forum operational |

---

## 🏗️ Architecture Overview

### **Workflow Diagram**
*(As given in PDF — add image if available)*

### **System Architecture**
- Frontend: React (Vite)  
- Backend: Java Spring Boot  
- Database: MySQL  
- Authentication: JWT  
- Charts: Recharts/Chart.js  
- Cloud & Export services *(optional)*  

---

## 🗄️ Database Schema
*(Based on Schema Diagram from PDF — add image if available)*  
Includes tables for:
- Users  
- Transactions  
- Budgets  
- Savings Goals  
- Forum Posts/Comments  

---

## 📦 Technologies Used
- **Java Spring Boot**  
- **React + Vite**  
- **MySQL**  
- **JWT Authentication**  
- **PDF/CSV Export Tools**  
- **Cloud APIs (optional)**  
- **Recharts** for graphs  
- **AI Assistant Integrations (optional)**  

---

## 📚 How to Run the Project

### ▶️ Backend (Java Spring Boot)
```bash
mvn spring-boot:run
