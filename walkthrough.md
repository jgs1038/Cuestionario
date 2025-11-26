# Walkthrough - Docker Volume & Markdown Support

I have updated the application to support loading questionnaires from Markdown files mounted via a Docker volume.

## Changes

### 1. Docker Configuration
- **`docker-compose.yml`**: Added a volume mount `./questions:/usr/share/nginx/html/questions`.
- **`Dockerfile`**: Updated to copy a custom Nginx configuration.
- **`nginx.conf`**: Created to enable `autoindex` on the `/questions/` directory, allowing the frontend to list available files.

### 2. Frontend Logic
- **`src/utils/markdownParser.js`**: A utility to parse Markdown files into the JSON format expected by the quiz app.
- **`src/utils/fileFetcher.js`**: Utilities to fetch the list of files from the Nginx autoindex page and fetch file content.
- **`src/App.jsx`**:
    - Added a **Menu** button (top right) to open the settings sidebar.
    - Added a **File Selector** in the menu to choose between the default JSON or available `.md` files.
    - Added **Previous** and **Next** buttons for manual navigation.
    - Preserved the existing UI styling while adding these new features.

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
