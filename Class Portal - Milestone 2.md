Hello! I'm Jyothish Gompa, and I've created a responsive website called the 'Class Portal' using HTML, CSS, and JavaScript.

**Class Portal Live:** https://class-portal-topaz.vercel.app/assignments.html

Note: In the Website, only the process blog entries Milestone 1 and Milestone 2 are added. I will add Class Portal in Projects after I submit Milestone 2.

Building this website was an enjoyable and engaging experience, though I encountered a few challenges along the way. To begin, I swiftly constructed the HTML structure for 'index.html' and then proceeded to style the navigation bar. Achieving a vertical navbar with consistent spacing proved to be a bit time-consuming, but I eventually mastered it. My code incorporates both flex and grid layouts throughout, and it took some effort to establish the right grid layout for various screen sizes, depending on the content being displayed.

I encountered three main challenges while working on the project, particularly when dealing with media queries and implementing a toggle feature for the navbar:

  1. **Media Queries:** Adapting grid layouts within media queries initially puzzled me. I mistakenly attempted to change the entire class or ID, which caused some confusion. I later learned that I only needed to adjust the CSS value for grid-layout-columns.
  2. **Navbar Design:****** Designing the overlay for the navbar posed a considerable challenge. I dedicated a significant amount of time to refining the navbar and toggle features during the coding process. Achieving the precise size and padding for the navbar was a bit perplexing due to inconsistencies in class and ID usage in CSS.
  3. **Toggle Feature:** I aimed to create a toggle feature for the navbar in the mobile view to enhance both aesthetics and user experience. Initially, I tried to implement this on my own but found it confusing. Eventually, I sought online guidance and successfully wrote JavaScript code for the toggle feature. However.

**Unsolved Issues:**
  1. **Toggle Feature:** After toggling in the mobile view and then resizing the screen to a larger size, the toggle bar didn't disappear, and the desktop navbar didn't reappear.
  2. **CountUp jQuery Plugin:** I added the CountUp jQuery plugin to 'index.html' to create an animation that increases the number of cards such as "Total Assignments," "Total Blogs," etc. However, the animation doesn't take place.

In future projects, I'll focus on naming and using classes/IDs consistently in CSS to avoid confusion during layout edits. Additionally, I'll remember to integrate Bootstrap, a useful web development framework, early in the project to ensure smoother compatibility. While I initially faced challenges with adding Bootstrap icons via a CDN script, I resolved the issue by downloading Bootstrap's SVG icon folder and incorporating them using the <img> tag.
