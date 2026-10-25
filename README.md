# Employee Dashboard — Assignment 2

A React employee dashboard that fetches user information from JSONPlaceholder and provides navigation to an employee form.

## Features
- Responsive navigation bar with Home and Employee Form routes
- Employee directory fetched from `https://jsonplaceholder.typicode.com/users`
- Displays employee ID, name, and email in a table
- Employee form with Name, Designation, Location, and Salary
- Bootstrap styling plus custom CSS
- Form validation runs locally; it does not post data to an API, as required

## Requirements
- Node.js (recommended: current LTS)
- npm

## Run locally
1. Extract the ZIP file.
2. Open a terminal in the `employee-dashboard` folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local address printed in the terminal, usually `http://localhost:5173`.

## Build check
Run `npm run build` to create the production build in the `dist` folder.

## GitHub submission
Create a new empty repository on GitHub. From the project folder, run:

```bash
git init
git add .
git commit -m "Create React employee dashboard assignment"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with the URL of your own GitHub repository.
