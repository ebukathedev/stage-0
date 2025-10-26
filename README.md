# Profile Card Project

A comprehensive multi-page website featuring a profile card, about page, and contact form with real-time clock functionality and form validation.

## Features

-   **Multi-page Navigation**: Home, About Me, and Contact Me pages with active link highlighting
-   **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
-   **Real-time Clock**: Displays current timestamp that updates every second
-   **Profile Information**: Shows name, bio, hobbies, dislikes, and social media links
-   **About Page**: Reflective sections including bio, goals, areas of confidence, and personal notes
-   **Contact Form**: Fully functional form with client-side validation and accessibility features
-   **Form Validation**: Real-time validation with visual feedback (red/green borders)
-   **Accessibility**: Proper ARIA labels, keyboard navigation, and screen reader support
-   **Modern UI**: Clean design with custom styling, hover effects, and smooth transitions
-   **Test IDs**: Comprehensive data-testid attributes for testing purposes

## Project Structure

```
stage-0/
├── index.html          # Home page with profile card
├── about.html          # About Me page with reflective content
├── contact.html        # Contact form page
├── style.css           # CSS styles and responsive design
├── main.js             # JavaScript for clock and form validation
└── README.md           # This file
```

## Technologies Used

-   **HTML5**: Semantic markup with accessibility features and proper form structure
-   **CSS3**: Modern styling with Flexbox, responsive design, custom properties, and form validation states
-   **JavaScript**: Real-time clock functionality and comprehensive form validation
-   **Font Awesome**: Icons for social media links
-   **Google Fonts**: Poppins font family

## Pages Overview

### 🏠 Home Page (`index.html`)

-   Profile card with personal information
-   Real-time clock display
-   Hobbies and dislikes lists
-   Social media links (GitHub, LinkedIn, Twitter)
-   Responsive card layout

### 📝 About Me Page (`about.html`)

-   Reflective content sections:
    -   **Bio**: Personal introduction and background
    -   **Goals**: Objectives for the HNG program
    -   **Areas of Low Confidence**: Honest self-assessment
    -   **Note to Future Self**: Motivational message
    -   **Extra Thoughts**: Additional reflections
-   Clean, organized card layout with visual hierarchy

### 📧 Contact Me Page (`contact.html`)

-   Fully functional contact form with validation
-   **Required Fields**: Full name, email, subject, message
-   **Validation Rules**:
    -   All fields required
    -   Email format validation
    -   Message minimum 10 characters
-   **Accessibility Features**:
    -   Proper labels linked to inputs
    -   ARIA attributes for screen readers
    -   Keyboard navigation support
    -   Real-time validation feedback
-   **Visual Feedback**: Red borders for errors, green for valid input

## Form Validation Features

-   **Real-time Validation**: Fields validate as user types and on blur
-   **Visual Feedback**: Color-coded borders (red for errors, green for valid)
-   **Error Messages**: Clear, specific error messages for each field
-   **Success Handling**: Confirmation message after successful submission
-   **Accessibility**: Screen reader announcements and proper focus management

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

---
