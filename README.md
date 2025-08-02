# 🤖 Pallybot AI - Interview Co-pilot

> Your AI-powered interview preparation companion with voice recognition and job-specific training

## ✨ Features

### 🎯 **Core Functionality**
- **Voice Recognition** - Real-time speech-to-text for natural interview practice
- **AI-Powered Responses** - Intelligent answers using Groq AI integration
- **Job-Specific Training** - Upload job descriptions for targeted preparation
- **Real-time Feedback** - Instant analysis and improvement suggestions

### 💼 **SaaS Features**
- **User Authentication** - Secure Firebase-based auth system
- **Subscription Management** - Tiered pricing with usage tracking
- **Cloud Storage** - Persistent data across devices
- **Analytics Dashboard** - Track your improvement over time

## 💰 Pricing Plans

| Plan | Price (Monthly) | Price (Yearly) | Features |
|------|----------------|----------------|----------|
| **Starter** | $10/month | $100/year | 10 interview sessions/month |
| **Professional** | $30/month | $300/year | 50 interview sessions/month |
| **Enterprise** | $50/month | $500/year | Unlimited sessions |

*Save 17% with yearly billing*

## 🚀 Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **Fonts**: Poppins (body), Space Grotesk (headings)
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **AI Integration**: Groq API
- **Voice Recognition**: Web Speech API
- **Deployment**: Netlify
- **Styling**: Modern glass morphism, gradients

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Firebase account
- Groq API account (optional)

### Installation
```bash
# Clone the repository
git clone https://github.com/Lightiam/Mask.git
cd Mask

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Configure your environment variables
# Edit .env with your Firebase and Groq API credentials

# Start development server
npm run dev

# Build for production
npm run build
```

### Environment Variables
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_GROQ_API_KEY=your_groq_api_key
```

## 🌐 Netlify Deployment

1. **Connect Repository**
   - Link your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`

2. **Environment Variables**
   - Add all environment variables in Netlify dashboard
   - Configure Firebase and Groq API keys

3. **Deploy**
   - Push to main branch
   - Netlify will automatically build and deploy

## 🎨 Design System

### Typography
- **Primary Font**: Poppins (body text, UI elements)
- **Secondary Font**: Space Grotesk (headings, brand)
- **Gradient Text**: Brand blue to purple

### Colors
- **Brand Primary**: Blue gradient (#0ea5e9 to #0284c7)
- **Brand Secondary**: Purple accent (#a855f7)
- **Background**: Light gradient with glass morphism

### Components
- **Glass Cards**: Backdrop blur with transparency
- **Gradient Buttons**: Hover animations and shadows
- **Modern Icons**: Lucide React icon set

## 🔧 Key Features Implementation

### Voice Recognition
- Uses Web Speech API for real-time transcription
- Handles browser compatibility and permissions
- Visual feedback with audio level indicators

### AI Integration
- Groq API for fast, intelligent responses
- Context-aware answers based on job descriptions
- Fallback responses for offline usage

### Authentication
- Firebase Auth with email/password
- Protected routes and user sessions
- Profile management and subscription tracking

## 🌟 Browser Support

- **Chrome/Edge**: Full support ✅
- **Firefox**: Limited speech recognition ⚠️
- **Safari**: iOS 14.5+ required ⚠️
- **HTTPS**: Required for microphone access ✅

## 📱 Responsive Design

- Mobile-first approach
- Optimized for tablets and desktops
- Touch-friendly interface
- Progressive Web App ready

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@pallybot.ai or join our Discord community.

## 🙏 Acknowledgments

- OpenAI for inspiration
- Groq for lightning-fast AI inference
- Firebase for robust backend services
- Netlify for seamless deployment