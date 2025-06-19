# Personal Portfolio Website

A modern, responsive portfolio website built with React.js, inspired by the Soumyajit portfolio design. This portfolio showcases your skills, projects, and professional experience with a beautiful and interactive user interface.

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Interactive Elements**: Particle background, smooth scrolling, hover effects
- **Typewriter Effect**: Dynamic text animation in the hero section
- **Project Showcase**: Beautiful project cards with live demos and GitHub links
- **Skills Display**: Visual representation of your technical skills
- **Timeline Design**: Professional education and experience timeline
- **GitHub Integration**: GitHub contribution calendar
- **Contact Information**: Easy-to-find contact details and social links

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **CSS3** - Styling and animations
- **JavaScript** - Interactive functionality
- **React Icons** - Icon library
- **Typewriter Effect** - Text animation
- **React Particles** - Background animation
- **GitHub Calendar** - Contribution visualization

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view your portfolio

## 🎨 Customization

### Personal Information

1. **Update your name and title** in `src/components/Home/Home.js`:
   ```javascript
   <h1 className="home-subtitle">
     I'M <span className="purple">YOUR NAME</span>
   </h1>
   ```

2. **Modify the typewriter text** in `src/components/Home/Type.js`:
   ```javascript
   strings: [
     'Full Stack Developer',
     'React Developer',
     'Node.js Developer',
     // Add your own titles
   ]
   ```

3. **Update about section** in `src/components/About/About.js`:
   - Change the introduction text
   - Update your skills and interests
   - Modify the profile image placeholder

### Projects

1. **Add your projects** in `src/components/Projects/Projects.js`:
   ```javascript
   const projects = [
     {
       title: "Your Project Name",
       description: "Project description...",
       image: "🛒", // Use emoji or image path
       technologies: ["React", "Node.js", "MongoDB"],
       github: "https://github.com/your-username/project",
       demo: "https://your-demo-link.com",
       featured: true
     }
   ];
   ```

### Skills and Technologies

1. **Update tech stack** in `src/components/About/Techstack.js`:
   ```javascript
   const techs = [
     {
       name: "Your Technology",
       icon: "💻",
       color: "#E34F26"
     }
   ];
   ```

2. **Update tools** in `src/components/About/Toolstack.js`

### Resume Information

1. **Update education and experience** in `src/components/Resume/Resume.js`:
   ```javascript
   const education = [
     {
       degree: "Your Degree",
       institution: "Your University",
       year: "2020 - 2024",
       description: "Your description"
     }
   ];
   ```

### Contact Information

1. **Update contact details** in `src/components/Footer.js`:
   - Email address
   - Phone number
   - Location
   - Social media links

### GitHub Integration

1. **Update GitHub username** in `src/components/About/Github.js`:
   ```javascript
   <GitHubCalendar 
     username="your-github-username"
     // ... other props
   />
   ```

### Styling

1. **Change color scheme** in `src/index.css`:
   ```css
   :root {
     --primary-color: #c770f0; /* Your preferred color */
     --secondary-color: #f5f5f5;
     --text-color: #333;
     --background-color: #fff;
     --accent-color: #007bff;
   }
   ```

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- Mobile-first design approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly navigation
- Optimized images and animations

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

### Deploy to Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```
2. **Upload the `build` folder** to Netlify

### Deploy to GitHub Pages

1. **Add homepage to package.json**:
   ```json
   {
     "homepage": "https://your-username.github.io/portfolio"
   }
   ```
2. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```
3. **Add deploy scripts**:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```
4. **Deploy**:
   ```bash
   npm run deploy
   ```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to:
- Open an issue on GitHub
- Contact me at your.email@example.com

## 🙏 Acknowledgments

- Inspired by [Soumyajit's Portfolio](https://github.com/soumyajit4419/Portfolio)
- Built with React.js and modern web technologies
- Icons from React Icons library

---

**Happy coding! 🎉** 