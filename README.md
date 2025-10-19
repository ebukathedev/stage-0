# Profile Card Project

A responsive profile card website showcasing personal information, hobbies, dislikes, and social media links with a real-time clock feature.

## Features

-   **Responsive Design**: Works on desktop, tablet, and mobile devices
-   **Real-time Clock**: Displays current timestamp that updates every **second**
-   **Profile Information**: Shows name, bio, hobbies, and dislikes
-   **Social Media Links**: GitHub, LinkedIn, and Twitter profiles
-   **Modern UI**: Clean design with custom styling and hover effects
-   **Test IDs**: Includes data-testid attributes for testing purposes

## Project Structure

```
stage-0/
├── index.html          # Main HTML file
├── style.css           # CSS styles and responsive design
├── main.js             # JavaScript for real-time clock
└── README.md           # This file
```

## Technologies Used

-   **HTML5**: Semantic markup with accessibility features
-   **CSS3**: Modern styling with Flexbox, responsive design, and custom properties
-   **JavaScript**: Real-time clock functionality
-   **Font Awesome**: Icons for social media links
-   **Google Fonts**: Poppins font family

## How to Run Locally

### Method 1: Simple File Opening (Recommended)

1. **Clone or download** this project to your local machine
2. **Navigate** to the project directory in your terminal:
    ```bash
    cd /path/to/stage-0
    ```
3. **Open the HTML file** directly in your web browser:
    - **macOS/Linux**:
        ```bash
        open index.html
        ```
    - **Windows**:
        ```bash
        start index.html
        ```
    - **Or simply double-click** the `index.html` file in your file explorer

### Method 2: Using a Local Server

For better development experience (especially if you plan to modify the code):

#### Option A: Python Server

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open `http://localhost:8000` in your browser.

#### Option B: Node.js Server

```bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server

# Or specify a port
http-server -p 8080
```

Then open `http://localhost:8080` in your browser.

#### Option C: VS Code Live Server Extension

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

----