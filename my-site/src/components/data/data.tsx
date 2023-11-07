export const pages = [
  { id: 1, label: "Home", link: "/home" },
  { id: 2, label: "About", link: "/about" },
  { id: 3, label: "Projects", link: "/projects" },
  { id: 4, label: "Blog", link: "/blog" },
  { id: 5, label: "Contact", link: "/contact" },
  { id: 6, label: "Resume", link: "/resume" },
];

export type Page = {
  id: number;
  label: string;
  link: string;
};

export const contactInfo = [
  "marcin.positivie@gmail.com",
  "https://www.github.com/mnikel",
  "https://www.linkedin.com/in/mmnikel",
  "https://www.twitter.com/marcin_nikel",
];

export type ContactInfo = {
  contactInfo: string[];
};

export const homeData = {
  name: "Marcin M. Nikel",
  title: "Hello! I'm Marcin Nikel, you can call me Nigel",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget pulvinar quam. Nullam vulputate posuere odio. In tempus suscipit lacus vel interdum. Sed eget purus urna. Maecenas posuere ut est in condimentum. Curabitur id ante odio. Cras eu eros euismod, mollis nisl a, lacinia odio. In tempor ligula at mi ullamcorper, vel dapibus est aliquet. Phasellus a ipsum sed arcu sollicitudin mollis. Mauris mollis diam turpis. Nunc eget mi nec eros rutrum luctus. Duis a libero gravida, tempor urna eu, cursus diam. Nullam ac nibh et libero mollis elementum in id erat. Curabitur semper pellentesque mi nec bibendum.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget pulvinar quam. Nullam vulputate posuere odio. In tempus suscipit lacus vel interdum. Sed eget purus urna. Maecenas posuere ut est in condimentum. Curabitur id ante odio. Cras eu eros euismod, mollis nisl a, lacinia odio. In tempor ligula at mi ullamcorper, vel dapibus est aliquet. Phasellus a ipsum sed arcu sollicitudin mollis. Mauris mollis diam turpis. Nunc eget mi nec eros rutrum luctus. Duis a libero gravida, tempor urna eu, cursus diam. Nullam ac nibh et libero mollis elementum in id erat. Curabitur semper pellentesque mi nec bibendum.  ",
  projects: "Some of my projects",
  stack: "Technologies I am familiar with:"
};
