import { AnimatedTestimonials } from "./ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Volunteered as a Content Creator and Website Organizer for the Feminist Spectrum Organization, contributing to advocacy efforts and community engagement...",
      name: "Spectrum",
      designation: "Product Manager at TechFlow",
      url: "https://feministspectrum.org",
    },
    {
      quote:
        "Macholand is the Persian feminist cyber activism platform...",
      name: "Macholand",
      designation: "CTO at InnovateSphere",
      url: "https://macholand.com",
    },
    {
      quote:
        "Iranian.lgbt is the umbrella project which acts like a yellow page for Persian-speaking LGBTQIA+...",
      name: "Iranian.lgbt",
      designation: "Operations Director at CloudScale",
      url: "https://iranian.lgbt",
    },
    {
      quote:
        "Avishan is the Sex Education for all program focusing on sexual health...",
      name: "Avishan",
      designation: "Engineering Lead at DataPro",
      url: "https://avishan.com",
    },
    {
      quote:
        "Hamdam is an app developed to offer a range of functionalities and features to Persian-speaking women...",
      name: "Hamdam App",
      designation: "VP of Technology at FutureNet",
      url: "https://hamdamapp.com",
    },
    {
      quote:
        "Dojensgara is a hub for the Persian speaking bisexual+ community...",
      name: "Dojensgara",
      designation: "VP of Technology at FutureNet",
      url: "https://dojensgara.com",
    },
    {
      quote:
        "“Aavaa for Kids” is a sex education project using story telling...",
      name: "Avaa for Kids",
      designation: "VP of Technology at FutureNet",
      url: "https://aavaa.org",
    },
  ];

  return (
    <div className="flex justify-center">
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
