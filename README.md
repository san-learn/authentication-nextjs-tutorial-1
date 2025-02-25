# Authentication Next.js Tutorial 1

## Acknowledgements

I would like to thank:

- [Code Genix](https://www.youtube.com/@codegenix) for the inspiring YouTube tutorial.
- The open-source community for the amazing tools and libraries.

## Inspiration & Implementation

While inspired by a YouTube tutorial, I implemented the project with my own coding style and structure, ensuring a unique learning experience.

## Installation

1. Clone this repository and navigate to the project directory:

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
   AUTH_SECRET="your-secret-key"
   AUTH_TRUST_HOST=true

   AUTH_GITHUB_ID="your-github-client-id"
   AUTH_GITHUB_SECRET="your-github-client-secret"

   DATABASE_URL="file:./authentication-nextjs-tutorial-1.db"
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## Dependencies

This project is built using **Next.js, React 19, Prisma, NextAuth**, and **TailwindCSS**, along with various utility libraries. Below is a list of the key dependencies used:

### Dependencies

| Dependency                 | Description                                  |
| -------------------------- | -------------------------------------------- |
| `@auth/prisma-adapter`     | Adapter for integrating NextAuth with Prisma |
| `@prisma/client`           | Prisma client for database queries           |
| `@radix-ui/react-slot`     | Radix UI Slot component                      |
| `class-variance-authority` | Utility for managing Tailwind class variants |
| `clsx`                     | Utility for conditional classNames           |
| `lucide-react`             | Icon library for React                       |
| `next`                     | React framework for server-side rendering    |
| `next-auth`                | Authentication library for Next.js           |
| `react`                    | React library (v19)                          |
| `react-dom`                | ReactDOM library (v19)                       |
| `tailwind-merge`           | Utility to merge TailwindCSS class names     |
| `tailwindcss-animate`      | TailwindCSS animation utilities              |
| `uuid`                     | Library for generating unique IDs            |
| `zod`                      | Schema validation library for TypeScript     |

### DevDependencies

| DevDependency        | Description                            |
| -------------------- | -------------------------------------- |
| `@eslint/eslintrc`   | ESLint configuration manager           |
| `@types/node`        | TypeScript definitions for Node.js     |
| `@types/react`       | TypeScript definitions for React       |
| `@types/react-dom`   | TypeScript definitions for ReactDOM    |
| `eslint`             | Linter for JavaScript and TypeScript   |
| `eslint-config-next` | ESLint rules for Next.js               |
| `postcss`            | Tool for transforming CSS              |
| `prisma`             | ORM for interacting with databases     |
| `tailwindcss`        | Utility-first CSS framework            |
| `typescript`         | JavaScript superset with static typing |

## Screenshots

Here are some screenshots of the project:

### Sign Up Page

![Sign Up Page](https://github.com/user-attachments/assets/b37f385a-38a1-4c4e-8f38-3c07b93dfb46)

### Sign In Page

![Sign In Page](https://github.com/user-attachments/assets/0cbed82e-f2c7-44d4-99ab-1b93ffa095d4)

### Home Page

![Home Page](https://github.com/user-attachments/assets/3b9cb1d1-55f0-4520-a2f0-3b07d35f3d3c)

## Contact

If you have any questions or feedback, feel free to reach out:

- **Email**: [sanlearn3@gmail.com](mailto:sanlearn3@gmail.com)
- **LinkedIn**: [Ikhsan Farizki](https://www.linkedin.com/in/ikhsan-farizki/)
- **GitHub**: [san-learn](https://github.com/san-learn)
- **Instagram**: [ikhsan.farizki](https://www.instagram.com/ikhsan.farizki/)
