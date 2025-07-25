# Facebook Clone

A modern Facebook clone built with React, TypeScript, and Firebase. This application replicates the core features of Facebook including user authentication, posts, likes, comments, and real-time updates.

## Features

- **User Authentication**: Secure login/logout with Firebase Auth and Google OAuth
- **Post Creation**: Create text posts with optional images
- **News Feed**: View posts from all users in chronological order
- **Social Interactions**: Like and comment on posts
- **User Profiles**: View and edit user profiles
- **Real-time Updates**: Live updates for new posts and interactions
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Facebook-like UI**: Familiar interface with Facebook's blue color scheme

## Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - High-quality UI components
- **Wouter** - Lightweight routing
- **TanStack Query** - Data fetching and caching
- **Lucide React** - Beautiful icons

### Backend
- **Firebase Authentication** - User management
- **Firebase Firestore** - Real-time database
- **Firebase Storage** - Image storage
- **Express.js** - Backend API server
- **Drizzle ORM** - Type-safe database queries

## Prerequisites

Before running this application, you need to:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication with Google sign-in
3. Set up Firestore database
4. Configure Firebase Storage

## Firebase Setup

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project
2. Navigate to Authentication > Sign-in method and enable Google
3. Go to Firestore Database and create a database in test mode
4. Go to Storage and set up Firebase Storage
5. In Project Settings > General, find your app configuration
6. Add your domain to the authorized domains list in Authentication > Settings

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
DATABASE_URL=your_database_url
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your Firebase project (see Firebase Setup section above)

4. Add your Firebase configuration to environment variables

5. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5000`

## Usage

1. **Sign In**: Click "Continue with Google" to authenticate with Firebase
2. **Create Posts**: Share your thoughts with the "What's on your mind?" post creator
3. **Interact**: Like and comment on posts from other users
4. **Profile**: View and edit your profile information
5. **Social Features**: See friend suggestions and sponsored content

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions and configurations
│   │   └── pages/          # Page components
├── server/                 # Backend Express server
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage interface
│   └── vite.ts            # Vite configuration
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Database schema and types
└── README.md              # This file
```

## API Endpoints

### Authentication
- `GET /api/users/:uid` - Get user by Firebase UID
- `POST /api/users` - Create new user profile

### Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create new post

### Interactions
- `POST /api/likes` - Like a post
- `DELETE /api/likes/:userId/:postId` - Unlike a post
- `POST /api/comments` - Add comment to post

## Database Schema

### Users
- `id` (Primary Key)
- `email` (Unique)
- `name`
- `profilePicture` (Optional)
- `firebaseUid` (Unique)
- `createdAt`

### Posts
- `id` (Primary Key)
- `userId` (Foreign Key)
- `content`
- `imageUrl` (Optional)
- `createdAt`

### Likes
- `id` (Primary Key)
- `userId` (Foreign Key)
- `postId` (Foreign Key)
- `createdAt`

### Comments
- `id` (Primary Key)
- `userId` (Foreign Key)
- `postId` (Foreign Key)
- `content`
- `createdAt`

### Friendships
- `id` (Primary Key)
- `userId` (Foreign Key)
- `friendId` (Foreign Key)
- `status` (pending, accepted, blocked)
- `createdAt`

## Features in Development

- **Real-time Updates**: Live notifications for new posts and interactions
- **Image Uploads**: Support for uploading photos with posts
- **Friend System**: Send and accept friend requests
- **Messaging**: Direct messaging between users
- **News Feed Algorithm**: Personalized content delivery
- **Mobile App**: React Native mobile application

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS, Shadcn/UI
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Firebase Auth
- **Storage**: Firebase Storage
- **Real-time**: Firebase Firestore
- **Deployment**: Replit
- **Build Tool**: Vite

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the development team.

## Acknowledgments

- Facebook for the inspiration and UI design
- Firebase for authentication and backend services
- Shadcn/UI for the component library
- The open-source community for the amazing tools and libraries

  
<img width="1517" height="875" alt="image" src="https://github.com/user-attachments/assets/19ab1c91-5197-4c9d-8acd-d44ea9024d7e" />

