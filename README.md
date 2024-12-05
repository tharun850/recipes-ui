# Recipes UI

## Description
This project is a single-page application (SPA) built with Angular. It allows users to perform a free text search of recipes from a backend API and display the results on the web UI. The application supports client-side sorting and filtering of recipes.

## Features
- **Global Search Bar**: A search bar on the homepage allows users to search for recipes by name or cuisine. The search is triggered when the user enters at least 3 characters and presses Enter or clicks the search icon.
- **Recipe Grid**: Displays recipes in a grid format, showing key attributes such as name, cook time, prep time, difficulty, servings, rating, and more.
- **Client-side Sorting**: Users can sort the grid results based on total time (prep time + cook time) in ascending or descending order.
- **Client-side Filtering**: Users can filter the grid results based on tags.
- **Responsive Design**: The UI is responsive and adapts to different screen sizes.
- **Lazy Loading**: Implements lazy loading techniques to improve performance.
- **Environment Configuration**: Supports different environments (local, dev, prod) with environment-specific configurations.

## Clean Code Practices
- **Atomic Design**: Components are organized following atomic design principles.
- **Exception Handling**: Proper error handling is implemented for API calls.
- **Environment Layering**: Environment-specific configurations are externalized.
- **Unit Test Cases & Code Coverage**: Comprehensive unit tests are provided with high code coverage.
- **README.md**: Detailed instructions to build and run the project.

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd recipes-ui

2. **Install dependencies**:
   npm install

3. **Run the application: For local development**:
   ng serve

   **For production build**:
   ng build --configuration=production

4. **Run unit tests**:
   ng test

## Environment Configuration
   - **Local**: src/environments/environment.ts
   - **Dev**: src/environments/environment.dev.ts
   - **Prod**: src/environments/environment.prod.ts

## API Endpoints
   - **Get All Recipes**: GET /assets/sample.json
   - **Search Recipes**: GET /assets/sample.json?search=<searchText>

## Dependencies
- Angular
- RxJS
- Jasmine/Karma (for testing)

## Project Structure
recipes-ui/
├── .angular/
├── .vscode/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── atoms/
│   │   │   │   ├── search-bar/
│   │   │   │   │   ├── search-bar.component.ts
│   │   │   │   │   ├── search-bar.component.html
│   │   │   │   │   ├── search-bar.component.css
│   │   │   │   ├── loading-page/
│   │   │   │   │   ├── loading-page.component.ts
│   │   │   │   │   ├── loading-page.component.html
│   │   │   │   │   ├── loading-page.component.css
│   │   │   │   ├── error-page/
│   │   │   │   │   ├── error-page.component.ts
│   │   │   │   │   ├── error-page.component.html
│   │   │   │   │   ├── error-page.component.css
│   │   │   ├── molecules/
│   │   │   │   ├── recipe-card/
│   │   │   │   │   ├── recipe-card.component.ts
│   │   │   │   │   ├── recipe-card.component.html
│   │   │   │   │   ├── recipe-card.component.css
│   │   │   ├── organisms/
│   │   │   │   ├── recipe-grid/
│   │   │   │   │   ├── recipe-grid.component.ts
│   │   │   │   │   ├── recipe-grid.component.html
│   │   │   │   │   ├── recipe-grid.component.css
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.css
│   │   ├── services/
│   │   │   ├── api.service.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   ├── assets/
│   │   ├── sample.json
│   ├── environments/
│   │   ├── environment.ts
│   │   ├── environment.dev.ts
│   │   ├── environment.prod.ts
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
│   ├── test.ts
├── angular.json
├── karma.conf.js
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json