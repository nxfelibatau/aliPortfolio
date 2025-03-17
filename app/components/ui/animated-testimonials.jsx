"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="max-w-2xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20 text-center">
      <motion.div
        key={active}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <h3 className="text-lg md:text-xl lg:text-2xl  font-semibold text-white">
          {testimonials[active].name}
        </h3>

        {/* نمایش عنوان شغلی به عنوان لینک */}
        {testimonials[active].url ? (
          <a
            href={testimonials[active].url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:underline dark:text-blue-400"
          >
            {testimonials[active].designation}
          </a>
        ) : (
          <p className="text-sm text-gray-500 dark:text-neutral-500">
            {testimonials[active].designation}
          </p>
        )}

        <motion.p className="text-sm md:text-lg lg:text-xl text-gray-300 mt-8 dark:text-neutral-300">
          {testimonials[active].quote.split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
              animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
                delay: 0.02 * index,
              }}
              className="inline-block"
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.p>
      </motion.div>

      <div className="flex gap-4 justify-center pt-12">
        <button
          onClick={handlePrev}
          className="h-10 w-10 rounded-full bg-grass dark:bg-neutral-800 flex items-center justify-center group/button"
        >
          <IconArrowLeft className="h-6 w-6 text-black dark:text-neutral-400 transition-transform duration-300" />
        </button>
        <button
          onClick={handleNext}
          className="h-10 w-10 rounded-full bg-grass dark:bg-neutral-800 flex items-center justify-center group/button"
        >
          <IconArrowRight className="h-6 w-6 text-black dark:text-neutral-400 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};
