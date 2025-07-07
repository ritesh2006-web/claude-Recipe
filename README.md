# Chef Claude

A React web app that suggests recipes based on the ingredients you have!

## Features
- Add ingredients you have on hand
- Get AI-generated recipe suggestions using the Mistral model via Hugging Face Inference API
- Clean, modern UI


![Screenshot](public/Screenshot%202025-07-07%20122828.png)




## Getting Started

### Prerequisites
- Node.js and npm installed
- A Hugging Face API key (for the Mistral model)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/ritesh2006-web/claude-Recipe.git
   cd claude-Recipe
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add your Hugging Face API key:
   ```env
   HF_API_KEY=your_huggingface_api_key_here
   ```

### Running the App
```sh
npm run dev
```

Open your browser and go to `http://localhost:5173` (or the port shown in your terminal).

## Usage
- Enter ingredients in the input field and click "Add ingredient".
- Once you have at least 4 ingredients, click "Get a recipe" to receive a suggestion.

## Security
- **Never commit your `.env` file or API keys to version control.**
- The `.env` file is already included in `.gitignore`.

## License
MIT
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
