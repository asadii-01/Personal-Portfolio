import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-scroll";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <Link className="nav-link cursor-pointer" to="home" smooth>
          Home
        </Link>
      </li>
      <li className="nav-li">
        <Link className="nav-link cursor-pointer" to="about" smooth>
          About
        </Link>
      </li>
      <li className="nav-li">
        <Link className="nav-link cursor-pointer" to="projects" smooth>
          Projects
        </Link>
      </li>
      <li className="nav-li">
        <Link to="experiences " className="nav-link cursor-pointer" smooth>
          Experiences
        </Link>
      </li>
      <li className="nav-li">
        <Link to="contact" className="nav-link cursor-pointer" smooth>
          Contact
        </Link>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space  max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Asad Tauqeer
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="hidden sm:flex ">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ delay: 0.5 }}
          className="block overflow-hidden sm:hidden text-center"
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </section>
  );
};

export default Navbar;
