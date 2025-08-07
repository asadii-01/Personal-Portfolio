import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="relative max-w-2xl max-h-[90vh] flex flex-col overflow-hidden border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10">
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-4 h-4" />
        </button>
        <img
          src={image}
          alt={title}
          className="w-full h-35 md:h-48 xl:h-80 flex-shrink-0 rounded-t-2xl"
        />
        <div className="p-5 flex-1 overflow-y-auto scrollbar">
          <h5 className="mb-2 text-lg md:text-xl font-bold text-white">{title}</h5>
          <p className="mb-2 text-sm lg:text-lg font-normal text-neutral-200">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-1 text-sm lg:text-base font-normal text-neutral-400">{subDesc}</p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-8 hover-animation"
                />
              ))}
            </div>
            <a href={href} className="inline-flex items-center gap-1 font-medium hover-animation cursor-pointer">
              View Project
              <img src="assets/arrow-up.svg" className="size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
