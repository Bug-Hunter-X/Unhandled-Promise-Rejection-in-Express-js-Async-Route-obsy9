# Unhandled Promise Rejection in Express.js Async Route

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous routes.  The `bug.js` file showcases the problem, where an asynchronous operation might fail without proper error handling.  The `bugSolution.js` file provides a corrected version with robust error handling.

## Problem

Asynchronous operations, common in Express.js routes, can throw errors.  If these errors aren't handled correctly, the application might crash unexpectedly.  The `bug.js` file demonstrates this scenario.  The `doSomethingAsync()` function simulates an operation that may fail.  If it fails, the error is logged to the console, but the response to the client is not managed.  This will result in a server error. 

## Solution

The `bugSolution.js` file shows how to properly handle such errors using a `try...catch` block to manage potential issues in the `doSomethingAsync()` function, and by adding a centralized error handler using `app.use()` to handle any uncaught errors.  The `app.use()` middleware function will capture errors thrown within the application and send an appropriate response to the client. This provides a much better user experience and prevents application crashes.