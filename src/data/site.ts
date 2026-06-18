export const siteConfig = {
  name: "Bledar Bunjaku",
  role: "Software Engineer",
  headline: "Software Engineer building scalable SaaS platforms, AI systems and real-time applications",
  location: "Pristina, Kosovo / Remote EU and Norway",
  phone: "+383 45 687 650",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "bledarbunjaku@gmail.com",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
  cvUrl: "/docs/Bledar_Bunjaku_Software_Engineer_CV.pdf",
  portfolioPdfUrl: "/docs/Bledar_Bunjaku_Software_Engineer_Portfolio.pdf",
  profileImageUrl: "/images/bledar-profile.jpg",
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/bledarbunjaku",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/bledar-bunjaku-6748641b7/",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/cv", label: "CV" },
  { href: "/ask", label: "AI Assistant" },
  { href: "/book", label: "Book" },
];
