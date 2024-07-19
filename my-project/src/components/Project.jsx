import { space } from "postcss/lib/list";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion"
const Project = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
      whileInView={{ opacity: 1, y:0}}
      initial={{opacity : 0, y: -100}}
      transition={{duration:0.5}} 
      className="my-20 text-center text-4xl">Project</motion.h2>
      <div>
        {PROJECTS.map((product, index) => (
          <div key={index} className="mb-20 flex flex-wrap lg:justify-center">
            <motion.div
            whileInView={{ opacity : 1 , x:0}}
            initial={{ opacity:0 , x:-100}}
            transition={{duration:0.5}} 
            className="w-full lg:w-1/4">
              <img
                src={product.image}
                alt={product.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div 
            whileInView={{ opacity:1,x:0}}
            initial={{ opacity:0, x:100}}
            transition={{duration:1}}
            className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{product.title}</h6>
              <p className="mb-4 text-neutral-400">{product.description}</p>
              {product.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-semibold text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
