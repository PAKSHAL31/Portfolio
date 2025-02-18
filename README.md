# Web Portfolio

This is my personal web portfolio built using **Next.js**, **Tailwind CSS**, **Framer Motion**, and **MDX** for content management. The website showcases my projects, skills, and experience, with an interactive and dynamic layout. It is deployed on Vercel for fast and reliable hosting.

Check it out: [Live Portfolio](https://pakshal-portfolio-git-main-pakshal-ranawats-projects.vercel.app)

## Features

- **Smooth Animations**: **Framer Motion** is used to add smooth, interactive animations to various sections of the website, making the user experience more dynamic and engaging.
  
- **Dark Mode & Light Mode**: The website supports both dark and light modes. Users can toggle between them for a personalized viewing experience using **Next Themes**.

- **MDX Integration**: **MDX** allows content management with markdown syntax alongside React components. This provides flexibility to create rich, dynamic pages.

- **Responsive Design**: The portfolio is fully responsive, built with **Tailwind CSS**, ensuring an optimal experience across all devices.

- **Contact Form**: The contact form on the portfolio uses **Resend** to send emails directly to me (only I receive the emails). This allows visitors to easily reach out.

- **Dynamic Project Pages**: Each project on the portfolio has its own dynamic page, using **Gray Matter** to extract metadata from the MDX files. The content is rendered using **next-mdx-remote**.

- **Form Validation**: Form validation is handled with **Zod**, ensuring data integrity and proper input checks before submission.

- **Toast Notifications**: **Sonner** is used to display toast notifications to inform users about the status of their form submissions.

- **Icons**: **Lucide React** icons are used throughout the website to add high-quality vector icons.


## Libraries Used

- **Next.js**: Framework used for server-side rendering and building the app.
- **Tailwind CSS**: Utility-first CSS framework used to style the application.
- **Framer Motion**: For animations and transitions.
- **MDX**: For managing and rendering content with markdown and React components.
- **Zod**: For form validation and schema validation.
- **Resend**: For sending emails from the contact form (the emails go to me directly).
- **Sonner**: For toast notifications to inform users about form submission status.
- **Gray Matter**: To extract metadata from MDX files for dynamic content display.
- **Sugar High**: For applying CSS utilities.
- **Class Variance Authority (CVA)**: Helps in creating reusable component variants.
- **Tailwind Merge**: To help merge conflicting Tailwind CSS classes.
- **Radix UI**: For building accessible UI components like slots.
- **Lucide React**: For using vector icons in the project.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/PakshalRanawat/your-portfolio-repo.git
   ```
2. **Install Dependencies:**

        npm install
        npm run dev

3. Now run the application on the localhost.
