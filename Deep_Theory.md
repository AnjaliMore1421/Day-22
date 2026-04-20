#  Day 22 – Full Real Deep Content

---

##  Q1: CSS Variables & Theming

###  CSS Variables -
CSS Variables (Custom Properties) are reusable values defined using `--name` and accessed using `var()`.

```css
:root {
  --primary-color: #3498db;
  --font-size: 16px;
}
body {
  color: var(--primary-color);
  font-size: var(--font-size);
}

 Theming Concept -

Theming is achieved by changing variable values.

:root {
  --bg-color: #ffffff;
  --text-color: #000000;
}

.dark-theme {
  --bg-color: #000000;
  --text-color: #ffffff;
}

body {
  background: var(--bg-color);
  color: var(--text-color);
}

 Key Benefits -
Reusable styles
Easy theme switching
Clean and maintainable code


Q2: Responsive Design Units (vw, vh, rem, em)
1. vw (Viewport Width)
width: 50vw; /* 50% of screen width */
2. vh (Viewport Height)
height: 100vh; /* Full screen height */
3. rem (Root-based)
html {
  font-size: 16px;
}

h1 {
  font-size: 2rem; /* 32px */
}
4. em (Parent-based)
.parent {
  font-size: 20px;
}

.child {
  font-size: 2em; /* 40px */
}


 Q3: Media Queries Architecture
  Basic Syntax -
@media (max-width: 768px) {
  body {
    background: lightblue;
  }
}
1. Mobile-First Approach -
/* Default = Mobile */

@media (min-width: 768px) {
  /* Tablet */
}

@media (min-width: 1024px) {
  /* Desktop */
}
2. Desktop-First Approach
@media (max-width: 1024px) {
  /* Tablet */
}
3. Common Breakpoints
Device	Width
Mobile	< 768px
Tablet	768px–1024px
Desktop	> 1024px

 Best Practices -
Use mobile-first design
Keep breakpoints minimal
Use flexible units (rem, %, vw)


 Q4: Dark Mode Implementation Patterns
  Method 1: Class Toggle
.dark {
  --bg: #000;
  --text: #fff;
}
document.body.classList.toggle("dark");
  Method 2: System Preference
@media (prefers-color-scheme: dark) {
  body {
    background: #000;
    color: #fff;
  }
}
  Method 3: Hybrid (Best Practice)
const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;


 Q5: Accessibility Contrast Considerations
  Contrast Ratio :
   It defines the difference between text color and background for readability.

 WCAG Standards -
Type	Ratio
Normal Text	4.5:1
Large Text	3:1
AAA Level	7:1
🔹 Bad Example
color: lightgray;
background: white;
🔹 Good Example
 color: #000;
background: #fff;
