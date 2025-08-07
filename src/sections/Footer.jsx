import { mySocials } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space mt-12">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700  to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p className="cursor-pointer hover:text-white">Terms & Conditons</p>
        <p className="pointer-events-none">|</p>
        <p className="cursor-pointer hover:text-white">Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index} className="hover-animation ">
            <img src={social.icon} alt={social.name} className="w-6 h-6" />
          </a>
        ))}
      </div>
      <p className="pointer-events-none">&copy; Asad Tauqeer. All rights reserved.</p>
    </section>
  );
};

export default Footer;
