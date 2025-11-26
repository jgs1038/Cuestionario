# Walkthrough - Docker Volume & Markdown Support

I have updated the application to support loading questionnaires from Markdown files mounted via a Docker volume.

## Changes

### 1. Docker Configuration
- **`docker-compose.yml`**: Added a volume mount `./questions:/usr/share/nginx/html/questions`.
- **`Dockerfile`**: Updated to copy a custom Nginx configuration.
- **`nginx.conf`**: Created to enable `autoindex` on the `/questions/` directory, allowing the frontend to list available files.

### 2. Frontend Logic
- **`src/utils/markdownParser.js`**: A utility to parse Markdown files into the JSON format expected by the quiz app.
    - **Update**: Improved to support multi-line questions and ignore section headers that don't contain options. It now captures text following a header as part of the question body. Also supports "mepro" style questions with `**N. Question**` and `- ☑` / `- ☐` options.
- **`src/utils/fileFetcher.js`**: Utilities to fetch the list of files from the Nginx autoindex page and fetch file content.
- **`src/App.jsx`**:
    - **UI Redesign**: Switched to a modern Turquoise/Teal theme with glassmorphism effects and improved animations.
    - **Review Mode**: Added ability to review answers after finishing the quiz, showing correct and incorrect selections.
    - **Immediate Feedback Mode**: Added a configuration option to see correct/incorrect answers immediately upon selection. Toggling this no longer restarts the quiz.
    - **Permanent Feedback Logic**: Once a question's feedback is revealed (by answering in Immediate Mode), it remains permanently revealed (Green/Red) and LOCKED (if Strict Mode is ON), even if you switch back to Normal Mode.
    - **Strict Mode**: If active, revealed questions are locked. If inactive, you can change answers even after they are revealed. Switching modes does NOT retroactively reveal answers.
    - **Question Grid**: Added a toggleable grid view to jump to any question directly.
    - **State Management**: Updated to track all user answers to support the review feature.
    - **Navigation**: Added Menu, File Selector, and manual Previous/Next navigation.

### 3. Data
- **`questions/sample.md`**: A sample questionnaire file to demonstrate the format.

## How to Run

1.  **Build and Run with Docker:**
    ```bash
    docker-compose up --build
    ```
2.  **Access the App:**
    Open http://localhost:8080 in your browser.
3.  **Add New Questionnaires:**
    - Create a new `.md` file in the `questions/` folder on your host machine.
    - Use the following format:
      ```markdown
      # Question Text
      - [ ] Incorrect Option
      - [x] Correct Option
      - [ ] Incorrect Option
      ```
    - Refresh the list in the app menu to see the new file.

## Verification
- Verified the Markdown parser logic with a test script.
- Verified the file structure and configuration files.
