import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 2,
      staggerChildren: 2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
export default function Offs() {
  return (
    <div className="bg-red-700 h-[100vh]">
      <motion.ul
        className="container w-[300px] h-[300px] bg-black"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {[0, 1, 2, 3].map((index) => (
          <motion.li key={index} className="item w-[100px] h-[100px] fixed top-[300px] bg-green-600" variants={item} />
        ))}
      </motion.ul>
    </div>
  );
}
