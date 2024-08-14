# Frontend: Vue 3 Application

### Overview

The frontend is built using Vue 3 with the Composition API, JavaScript, and Tailwind CSS.

### Features

- **Admin Login**: Secure access with feedback for incorrect attempts.
- **Dashboard**: Displays total number of species in the reserve.
- **CRUD Operations**:
  - Add new animals
  - Edit existing animals
  - Delete animals
- **Animal List View**: Paginated list with filtering options.

### Technologies Used

- Vue 3 Composition API
- JavaScript
- Tailwind CSS

### Project Setup

```bash
# Install dependencies
npm install

# Run development server
npm run serve

# Build for production
npm run build
```
Directory Structure
```bash
src/
├── components/
├── views/
├── store/
├── assets/
├── App.vue
└── main.js
