# Authentication Next.js Tutorial 1

This project is used as a learning resource for authentication in Next.js using Auth.js library. It provides an example of how to implement authentication using Auth.js.

## Acknowledgements

I would like to thank:

- [Code Genix](https://www.youtube.com/@codegenix) for the inspiring YouTube tutorial.
- The open-source community for the amazing tools and libraries.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/san-learn/authentication-nextjs-tutorial-1.git
   cd authentication-nextjs-tutorial-1
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following keys:

   ```env
   AUTH_SECRET=your-secret-key
   AUTH_TRUST_HOST=true

   AUTH_GITHUB_ID=your-github-client-id
   AUTH_GITHUB_SECRET=your-github-client-secret

   DATABASE_URL="file:./authentication-nextjs-tutorial-1.db"
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```
