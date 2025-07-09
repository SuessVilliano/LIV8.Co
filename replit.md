# replit.md

## Overview

LIV8 is a comprehensive business service platform that provides consulting, funding, health, solar, AI, and other services through a unified ecosystem. The application is built as a full-stack web application with a React frontend and Express backend, featuring multiple divisions, service offerings, and consultant onboarding capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with separate client and server directories, using TypeScript throughout for type safety and maintainability.

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: TailwindCSS with dark mode support
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: React Query for server state and local React state
- **Routing**: Wouter for client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session storage
- **Build Tool**: ESBuild for server bundling

## Key Components

### Frontend Structure
- **Pages**: Home, Services, Divisions, Join, Book, Contact
- **Components**: Modular UI components including HeroSection, ServicesSection, BrandsSection, JoinSection, TestimonialsSection, and various modal components
- **Hooks**: Custom hooks for theme management, modal state, and mobile detection
- **Modals**: Exit intent, timed, newsletter, booking, and join modals for conversion optimization

### Backend Structure
- **Routes**: API routes with Express router pattern
- **Storage**: Abstract storage interface with in-memory implementation (ready for database integration)
- **Database Schema**: User management with Drizzle ORM setup

### Service Divisions
The platform offers 6 main service divisions:
1. Digital & AI Solutions
2. Funding & Credit Services  
3. Insurance & Wealth Management
4. Health & Supplements
5. Solar & Energy Solutions
6. Events & Logistics

## Data Flow

### Client-Server Communication
- REST API architecture with Express backend
- React Query for efficient data fetching and caching
- Form submissions handled through API endpoints
- Session-based authentication (infrastructure ready)

### Database Schema
- Users table with basic authentication fields
- Extensible schema design using Drizzle ORM
- PostgreSQL dialect with migration support

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with extensive Radix UI component library
- **Styling**: TailwindCSS with PostCSS processing
- **Icons**: Font Awesome for iconography
- **Fonts**: Google Fonts (Inter font family)
- **Chat Integration**: AnyChat widget for customer support

### Backend Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **ORM**: Drizzle ORM with Zod integration for type-safe database operations
- **Session Storage**: connect-pg-simple for PostgreSQL session management

### Development Tools
- **Build**: Vite for frontend, ESBuild for backend
- **Development**: TSX for TypeScript execution
- **Database**: Drizzle Kit for schema management and migrations
- **Replit Integration**: Cartographer plugin for development environment

## Deployment Strategy

### Development
- Vite dev server for frontend with hot module replacement
- TSX for backend TypeScript execution
- Integrated development environment with Replit support

### Production Build
- Frontend: Vite production build to dist/public
- Backend: ESBuild bundle to dist/index.js
- Environment: Node.js production server

### Database Management
- Environment-based DATABASE_URL configuration
- Drizzle migrations in ./migrations directory
- Schema defined in ./shared/schema.ts for shared types

### Key Features
- Dark/light theme support with localStorage persistence
- Mobile-responsive design with Tailwind breakpoints
- Conversion optimization through multiple modal types
- SEO-friendly with proper meta tags and structured content
- Accessibility features through Radix UI components
- Type safety across frontend and backend with shared schema definitions

The architecture is designed for scalability, with clear separation of concerns, type safety, and modern development practices throughout the stack.