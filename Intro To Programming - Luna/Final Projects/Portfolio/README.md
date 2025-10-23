[My Open API Project](https://github.com/AvionShea/ctd-open-api-project-luna)

# Avion's Portfolio

A personal portfolio website showcasing my skills, experience, and projects as part of my journey with Code the Dream.

## 🔗 Live Demo

[View Live Portfolio](https://avion-cobb-luna-code-the-dream-port.vercel.app/)

## 📋 About This Project

This portfolio website was built as a final project for Code the Dream. It demonstrates proficiency in HTML, CSS, and JavaScript, including DOM manipulation, API integration, and responsive design principles.

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Styling, Flexbox/Grid layouts, and media queries
- **Vanilla JavaScript** - DOM manipulation, event handling, and API integration
- **GitHub API** - Fetching and displaying repository data
- **Google Fonts** - Custom typography

## ✨ Features

### Core Features

- **Responsive Navigation** - Internal links to all major sections with sticky navigation and hamburger menu on mobile devices
- **About Section** - Personal introduction with photo
- **Experience Section** - Professional background displayed in a grid layout
- **Skills Section** - Dynamically generated list of technical skills using JavaScript
- **Projects Section** - GitHub repositories fetched via API with clickable links and custom "classified" blur effect
- **Leave a Message Form** - Interactive form with Name, Email, and Message fields
- **Messages Display** - Dynamic list showing submitted messages with email links and remove functionality

### Enhanced Features

- **Edit Messages** - Edit button with contentEditable functionality and visual indicators
- **Conditional Rendering** - Messages section automatically hides when empty
- **Custom Styling** - Unique "classified" blur effect on project cards that reveals on hover
- **Social Media Links** - Email and social media profile connections
- **Dynamic Footer** - Copyright information with current year generated via JavaScript

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Internet connection (for GitHub API and Google Fonts)

### Installation

1. Clone the repository

```bash
git clone https://github.com/avionshea/portfolio.git
```

2. Navigate to the project directory

```bash
cd portfolio
```

3. Open `index.html` in your browser

```bash
open index.html
```

Or use a local development server like Live Server in VS Code.

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── index.css      # Stylesheet
├── js/
│   └── index.js       # JavaScript functionality
└── README.md          # Project documentation
```

## 🎨 Key Implementation Highlights

### GitHub API Integration

Dynamically fetches and displays repositories from my GitHub account using the Fetch API with async/await and error handling.

### Interactive Message System

- Form validation and submission handling
- Dynamic DOM manipulation to create message entries
- Edit functionality using contentEditable with visual feedback
- Remove functionality with parent node traversal

### Responsive Design

- Mobile-first approach with media queries
- Hamburger menu for mobile navigation
- Grid and Flexbox layouts that adapt to different screen sizes
- Optimized font sizes and touch targets for mobile devices

### Custom UI Effects

- Unique "classified" blur effect on project cards
- Hover interactions that reveal project information
- Smooth transitions and visual feedback

## 📱 Browser Compatibility

Tested and working on:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎓 Learning Outcomes

Through building this portfolio, I developed skills in:

- Semantic HTML and accessibility best practices
- Advanced CSS techniques including Grid and Flexbox
- JavaScript DOM manipulation and event handling
- Working with external APIs and handling asynchronous operations
- Responsive web design principles
- Git version control and GitHub workflows

## 👤 Author

**Avion**

- GitHub: [@avionshea](https://github.com/avionshea)
- Portfolio: [Live Demo](https://avion-cobb-luna-code-the-dream-port.vercel.app/)

## 🙏 Acknowledgments

- Code the Dream for providing the curriculum and support
- The open-source community for resources and inspiration
- GitHub API for enabling dynamic project displays

## 📄 License

This project is open source and available for educational purposes.

---

_Built with 💻 and 🫖 as part of Code the Dream_
