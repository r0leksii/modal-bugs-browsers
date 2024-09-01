# React Post Edit Component

## Overview
This project contains a React component for editing posts in a social media-like application. The main component, `PostMenu`, provides functionality for editing posts, with features like a dropdown menu, edit modal, and confirmation modal.

## Current Issue: Cross-Browser Compatibility
We are currently experiencing a cross-browser compatibility issue with our `PostMenu` component. Specifically:

- The "Edit Post" functionality works as expected in Google Chrome.
- The same functionality fails to work properly in Mozilla Firefox.

### Problem Description
When a user clicks the "Edit Post" button in the dropdown menu:
- In Chrome: The edit modal opens correctly, allowing the user to modify the post.
- In Firefox: Clicking the "Edit Post" button does not trigger the expected behavior. The edit modal does not open, and no visible action occurs.

## How to Reproduce
1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Open the application in both Chrome and Firefox
5. Navigate to a post and attempt to edit it in both browsers

## Contribution Guidelines
We welcome contributions to help solve this cross-browser compatibility issue. If you'd like to contribute:

1. Fork the repository
2. Create a new branch for your changes
3. Make your changes and test in both Chrome and Firefox
4. Submit a pull request with a detailed description of your changes


Thank you for your interest in improving our project!