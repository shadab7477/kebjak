"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

// Main HeroParallax component
export const HeroParallax = ({
  products,
}: {
  products: { title: string; link: string; thumbnail: string }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 0 };

  const createSpring = (range: number[], output: number[]) =>
    useSpring(useTransform(scrollYProgress, range, output), springConfig);

  const translateX = createSpring([0, 1], [0, 1000]);
  const translateXReverse = createSpring([0, 1], [0, -1000]);
  const rotateX = createSpring([0, 0.2], [15, 0]);
  const rotateZ = createSpring([0, 0.2], [20, 0]);
  const translateY = createSpring([0, 0.2], [-700, 500]);
  const opacity = createSpring([0, 0.2], [0.2, 1]);

  return (
    <div
      ref={ref}
      className="relative flex flex-col h-[300vh] py-40 overflow-hidden antialiased [perspective:1000px] [transform-style:preserve-3d]"
    >
      <motion.div style={{ rotateX, rotateZ, translateY, opacity }}>
        {/* Row 1 */}
        <motion.div className="flex flex-row-reverse gap-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateX}
            />
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div className="flex flex-row gap-20 mb-20">
          {secondRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateXReverse}
            />
          ))}
        </motion.div>

        {/* Row 3 */}
        <motion.div className="flex flex-row-reverse gap-20">
          {thirdRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateX}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

// Product card component
export const ProductCard = ({
  product,
  translate,
}: {
  product: { title: string; link: string; thumbnail: string };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="relative w-[30rem] h-96 shrink-0 group"
    >
      <a href={product.link} className="block w-full h-full overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          width={600}
          height={600}
          className="absolute inset-0 w-full h-full object-cover object-left-top transition-transform duration-300"
          loading="lazy"
        />
      </a>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
      <h2 className="absolute bottom-4 left-4 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {product.title}
      </h2>
    </motion.div>
  );
};
