# WorkBridge React Frontend — Demo Ready

This is a **React frontend without Vite**. It uses React + Webpack + Babel and is ready to open in Visual Studio Code.

## 1. Requirements
- Node.js 18+ (20+ recommended)
- VS Code

## 2. Open the project
Extract the ZIP and open the `workbridge-react` folder in VS Code.

## 3. Install
```bash
npm install
```

## 4. Start
```bash
npm start
```

The browser opens at `http://localhost:3000`.

## 5. Demo login
- Student: `student@workbridge.com` / `123456`
- Employer: `employer@workbridge.com` / `123456`
- Admin: `admin@workbridge.com` / `123456`

## 6. Backend integration later
The frontend already has:
- `src/services/api.js`
- Axios instance
- Authorization header interceptor
- Endpoint map based on the WorkBridge API specification

When your backend is ready, set the API base URL and replace the demo login/register calls with real API calls.

Example:
```bash
# Windows PowerShell
$env:REACT_APP_API_URL="http://localhost:5000/api"
npm start
```

## 7. Included screens
- Login
- Registration with Student / Employer role
- Student dashboard
- Employer dashboard
- Admin dashboard
- Find Jobs / My Jobs
- Applications
- Profile
- Admin verification queue
- Responsive CSS

## 8. Backend API alignment
The structure follows the uploaded WorkBridge specification, including:
- `/api/auth/register`
- `/api/auth/login`
- `/api/auth/me`
- Student / Employer profiles
- Jobs and job search
- Applications
- Payments
- Ratings
- Notifications
- Admin dashboard and management

The uploaded document describes JWT + OTP authentication and role values such as `STUDENT`, `EMPLOYER`, `ADMIN`, and `USER`.
