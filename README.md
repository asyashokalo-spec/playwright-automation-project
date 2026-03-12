Playwright Automation Project

Pet project of Asya Shokalo

UI Tests:
- login Test
- logout Test
- checkbox Test
- dropdown Test
- dynamic-loading Test

API Tests
- GET
- POST
- PUT
- DELETE

VISUAL Tests
- Login form snapshot


PROJECT STRUCTURE
tests/
page-objects/
test-data/


RUN TESTS

Install dependencies:
npm install

Run Tests:
npx playwright test

Run API tests
npx playwright test tests/api

CI
github Actions runs playwright tests automatically on every push