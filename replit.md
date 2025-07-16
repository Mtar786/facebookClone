# Facebook Clone - replit.md

## Overview

This is a modern Facebook clone built with React, TypeScript, and a hybrid architecture using both Firebase and a PostgreSQL database. The application features user authentication, posts, likes, comments, and real-time updates with a Facebook-like UI design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type safety
- **Tailwind CSS** for styling with custom Facebook-themed colors
- **Shadcn/UI** component library for consistent UI elements
- **Wouter** for lightweight client-side routing
- **TanStack Query** for data fetching, caching, and state management
- **Lucide React** for icons

### Backend Architecture
- **Express.js** server with TypeScript
- **Drizzle ORM** for type-safe database operations
- **PostgreSQL** as the primary database (via Neon)
- **Firebase Authentication** for user management
- **Firebase Firestore** for real-time features (mentioned in README but not fully implemented)
- **Firebase Storage** for image uploads (mentioned in README but not fully implemented)

### Hybrid Data Strategy
The application uses a dual approach:
- **Firebase** for authentication and potentially real-time features
- **PostgreSQL** for structured data storage (users, posts, likes, comments, friendships)

## Key Components

### Database Schema
- **Users**: Stores user profiles with Firebase UID integration
- **Posts**: Text content with optional image URLs
- **Likes**: User-post relationships for like functionality
- **Comments**: Nested comments on posts
- **Friendships**: User relationships with status tracking

### Authentication Flow
1. Firebase handles Google OAuth authentication
2. User profiles are synchronized with PostgreSQL database
3. Firebase UID links the two systems

### UI Components
- **Header**: Navigation with Facebook-style branding
- **LeftSidebar**: User menu and navigation links
- **RightSidebar**: Friend suggestions and sponsored content
- **PostCreator**: Form for creating new posts
- **PostFeed**: Displays posts with interactions
- **Post**: Individual post component with like/comment functionality

## Data Flow

1. **Authentication**: Firebase Auth → User profile creation/retrieval in PostgreSQL
2. **Post Creation**: Form submission → Express API → PostgreSQL via Drizzle ORM
3. **Feed Loading**: TanStack Query → Express API → PostgreSQL → React components
4. **Real-time Updates**: Planned Firebase Firestore integration (not fully implemented)

## External Dependencies

### Core Dependencies
- **Firebase SDK**: Authentication, Firestore, Storage
- **@neondatabase/serverless**: PostgreSQL connection
- **Drizzle ORM**: Database queries and migrations
- **TanStack Query**: Data fetching and caching
- **Radix UI**: Accessible component primitives

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type checking
- **ESBuild**: Production bundling
- **Tailwind CSS**: Styling

## Deployment Strategy

### Development
- Uses Vite dev server with HMR
- Express server runs on development mode
- Database migrations via Drizzle Kit

### Production
- Vite builds static assets
- Express server serves API and static files
- PostgreSQL database via Neon
- Firebase services for authentication and storage

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string
- `VITE_FIREBASE_API_KEY`: Firebase configuration
- `VITE_FIREBASE_PROJECT_ID`: Firebase project ID
- `VITE_FIREBASE_APP_ID`: Firebase app ID

### Key Architectural Decisions

1. **Hybrid Database Approach**: Uses Firebase for auth/real-time and PostgreSQL for structured data
   - **Pros**: Leverages Firebase's auth system while maintaining relational data integrity
   - **Cons**: Increased complexity managing two data systems

2. **Drizzle ORM**: Chosen for type-safe database operations
   - **Pros**: Full TypeScript support, migration management
   - **Cons**: Learning curve compared to traditional ORMs

3. **TanStack Query**: Handles all client-side data fetching
   - **Pros**: Built-in caching, loading states, optimistic updates
   - **Cons**: Additional abstraction layer

4. **Wouter vs React Router**: Lightweight routing solution
   - **Pros**: Smaller bundle size, simpler API
   - **Cons**: Less feature-rich than React Router

5. **In-Memory Storage Fallback**: Implements MemStorage class for development
   - **Pros**: Easy local development without database setup
   - **Cons**: Data doesn't persist between server restarts

The application is designed to be scalable and maintainable, with clear separation between authentication (Firebase) and data storage (PostgreSQL), while providing a familiar Facebook-like user experience.