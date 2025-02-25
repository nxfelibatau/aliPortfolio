import { FocusCards } from "./ui/focus-cards";

export default function FocusCardsDemo() {
  const cards = [
    {
      title: "Backend",
      src: "/Backend.jpg",
      summary:
        "Backend refers to the server-side of a web application.",
    },
    {
      title: "Frontend",
      src: "/Frontend.jpg",
      summary:
        "Frontend refers to the client-side of a web application.",
    },
    {
      title: "Cybersecurity",
      src: "/Cybersecurity.jpg",
      summary:
        "Cybersecurity involves protecting systems.",
    },
    {
      title: "Databases",
      src: "/Databases.jpg",
      summary:
        "Databases are structured systems used to store.",
    },
    {
      title: "Tools and DevOps",
      src: "/DevOps.jpg",
      summary:
        "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and deliver high-quality software continuously.",
    },
    {
      title: "Machine Learning",
      src: "/MachineLearning.jpg",
      summary:
        "Machine learning is a branch of artificial intelligence that enables systems to learn from data and make predictions or decisions without being explicitly programmed.",
    },
  ];

  return <FocusCards cards={cards} />;
}
