# 🛠️ Hamu Toolkit - AI Tools Marketplace  

*A Next.js-powered directory where users list AI tools for sale, with role-based access control (Admin/User).*  

![Hamu Toolkit Preview](screenshots/preview.png) *(Replace with actual screenshot)*  

## ▶ **Live Demo**  
🎥 **[Video Walkthrough](https://youtu.be/rCHsX_Z9nGk?feature=shared)** *(Showcase tool submission, admin approval flow, etc.)*  

---

## ✨ **Key Features**  
- **Role-Based Access (RBA)**:  
  - **Admins**: Approve/reject tools, promote/demote users, delete tools.  
  - **Users**: Upload tools, edit their listings, browse approved tools.  
- **Authentication**: Google/GitHub OAuth + JWT sessions via NextAuth.js.  
- **Moderation Queue**: Tools await admin approval before appearing publicly.  
- **Responsive UI**: Built with Next.js and TailwindCSS.  

---

## 🛠️ **Tech Stack**  
- **Frontend**: Next.js, TailwindCSS  
- **Backend**: Next.js API Routes  
- **Database**: MongoDB (Prisma orm)  
- **Auth**: NextAuth.js (Google/GitHub OAuth)  
- **Deployment**: Vercel (optional)  

---

## 🚀 **Local Setup**  

### **1. Clone & Install**  
```bash
# Download and unzip the project
git clone https://github.com/hamxaShaukat/ai-tools-directory-v1.git
cd ai-tools-directory-v1
npm install
```

### **2. Environment Variables**  
Create a `.env` file in the root directory and add:  

```env
NEXTAUTH_JWT_SECRET="your_jwt_secret"
NEXTAUTH_SECRET="your_nextauth_secret"
DATABASE_URL="mongodb_connection_uri"
AUTH_GOOGLE_ID="your_google_client_id"
AUTH_GOOGLE_SECRET="your_google_secret"
AUTH_GITHUB_ID="your_github_client_id"
AUTH_GITHUB_SECRET="your_github_secret"
```

#### 🔑 **How to Get These Keys**  
- **NextAuth Secrets**:  
  - Run `openssl rand -base64 32` in your terminal to generate `NEXTAUTH_JWT_SECRET` and `NEXTAUTH_SECRET`.  
- **MongoDB URI**:  
  - Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/atlas/database) and copy the connection string.  
- **Google OAuth**:  
  - Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials), create an OAuth 2.0 Client ID, and add `http://localhost:3000/api/auth/callback/google` as a redirect URI.  
- **GitHub OAuth**:  
  - Under [GitHub Developer Settings](https://github.com/settings/developers), create a new OAuth App and set the callback URL to `http://localhost:3000/api/auth/callback/github`.  

### **3. Run the App**  
```bash
npm run dev
```
Visit `http://localhost:3000` and start testing!  


---

## 💡 **Challenges & Solutions**  
- **Challenge**: Role-based API security.  
  **Solution**: Implemented middleware to validate user roles before granting access.  
- **Challenge**: Real-time moderation queue updates.  
  **Solution**: Used MongoDB change streams to notify admins of pending tools.  

---

## 🔮 **Future Improvements**  
- [ ] Add Stripe payments for tool purchases.  
- [ ] Implement user reviews/ratings.  
- [ ] Dockerize for easier deployment.  

---

## 📜 **License**  
MIT  

## 📩 **Contact**  
For questions, email **hamzashaukat714@gmail.com**.
