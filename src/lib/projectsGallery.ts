export type GalleryProject = {
  title: string;
  description: string;
  tags: string[];
  category: "AI/ML" | "Software Development" | string;
  date: string;
  image: string;
  link: string;
};

export const galleryProjects: GalleryProject[] = [
  {
    title: "Vera – AI Compliance Assistant",
    description: "RAG-based AI to match internal policies with global regulations.",
    tags: ["Next.js", "TailwindCSS", "Weaviate", "Node.js"],
    category: "AI/ML",
    date: "Jun 2024 – Aug 2024",
    image: "/projects/vera.svg",
    link: "https://github.com/yourname/vera",
  },
  {
    title: "LaLa – Property Rental Platform",
    description: "Airbnb-style app for monthly & nightly rentals in Rwanda.",
    tags: ["React", "PostgreSQL", "Express", "TypeScript"],
    category: "Software Development",
    date: "May 2024 – Jul 2024",
    image: "/projects/lala.svg",
    link: "https://lalastays.com",
  },
  {
    title: "LegalDoc Match",
    description: "LegalBERT pipeline to match laws with corporate documents.",
    tags: ["HuggingFace", "PyTorch", "LegalBERT"],
    category: "AI/ML",
    date: "Aug 2024 – Sep 2024",
    image: "/projects/legaldoc.svg",
    link: "https://github.com/yourname/legaldocmatch",
  },
];


