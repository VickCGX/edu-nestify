# Contributing to Edu-Nestify

Thank you for considering contributing to Edu-Nestify! Your contributions are highly appreciated. This guide will help you get started with the contribution process.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [How to Contribute](#how-to-contribute)
   - [Reporting Bugs](#reporting-bugs)
   - [Suggesting Features](#suggesting-features)
   - [Submitting Code Changes](#submitting-code-changes)
4. [Code of Conduct](#code-of-conduct)

## Getting Started

1. **Fork the repository**: Fork the [Edu-Nestify repository](https://github.com/yourusername/edu-nestify) to your GitHub account.

2. **Clone your fork**:

   ```bash
   git clone https://github.com/yourusername/edu-nestify.git
   cd edu-nestify
   ```

3. **Install dependencies**: Ensure you have Node.js and Yarn installed. Install the project dependencies:

   ```bash
   yarn install
   ```

4. **Set up the environment**: Create a `.env` file at the root of the project and add the necessary environment variables:

   ```dotenv
   DATABASE_URL=postgres://username:password@localhost:5432/edu-nestify
   JWT_SECRET={SECRET_KEY}
   ```

5. **Run migrations**: Apply the database migrations:

   ```bash
   npx prisma migrate dev
   ```

6. **Start the development server**:
   ```bash
   yarn start:dev
   ```

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue on GitHub with the following information:

- A clear and descriptive title.
- Steps to reproduce the issue.
- Expected and actual results.
- Screenshots, if applicable.

### Suggesting Features

If you have a feature request, please create an issue on GitHub with the following information:

- A clear and descriptive title.
- Detailed description of the feature.
- Use cases for the feature.

### Submitting Code Changes

1. **Create a branch**: Create a new branch for your changes.

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**: Implement your changes in the codebase.

3. **Write tests**: Ensure that your changes are covered by tests.

4. **Run tests**: Run the test suite to ensure that all tests pass.

   ```bash
   yarn test
   ```

5. **Commit your changes**: Commit your changes with a descriptive commit message.

   ```bash
   git commit -m "Add feature: your feature description"
   ```

6. **Push to your branch**:

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**: Open a pull request on the main repository and describe your changes.

## Code of Conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

---

Thank you for contributing to Edu-Nestify!
