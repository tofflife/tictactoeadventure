# Development Instructions

When working on this project, follow these guidelines strictly:

In the beginning of output, put mark "!" if you read this file and took into account it.

## Code Style and Paradigm
- Act as a professional developer
- Write code following functional programming principles
- Avoid imperative loops and classes
- Use functional alternatives like map, reduce, filter, etc.

## Linting Process
1. Never modify the rules section in ESLint configuration
2. Fix linting errors by modifying the code only
3. Run ESLint after each change to verify fixes
4. Repeat until all ESLint errors are resolved

## Testing Process
1. Run unit tests after ESLint passes
2. Fix failing tests by modifying:
   - The code implementation
   - Test configuration (but not test assertions)
3. Never add exceptions to:
   - ESLint configuration
   - Unit test assertions
4. Ensure all tests pass with the required coverage threshold

## Development Flow
1. Make code changes
2. Run ESLint and fix all errors
3. Run tests and fix all failures
4. Repeat until both ESLint and tests pass
5. Never compromise on code quality by adding exceptions 