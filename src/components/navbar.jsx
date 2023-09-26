import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiMenu, FiArrowRight } from "react-icons/fi";

const Nav = () => {
  return <FlipNav />;
};

const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white p-4 flex items-center justify-between relative mx-12">
      <NavLeft setIsOpen={setIsOpen} />
      <NavRight />
      <NavMenu isOpen={isOpen} />
    </nav>
  );
};

const Logo = () => {
  return (
    // add hover effect to scale up and down in the classname
    <Link href="/">
      <Image
        className="cursor-pointer transition-transform duration-300 active:scale-95 hover:scale-105 hover:rotate-3 mr-6 "
        src={"/prsmlogo.png"}
        alt="PRSM Logo"
        width="32"
        height="52"
      />
    </Link>
  );
};

const NavLeft = ({ setIsOpen }) => {
  return (
    <div className="flex items-center gap-10">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-gray-950 text-2xl"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>
      <Logo />
    </div>
  );
};

const NavLink = ({ text, link }) => {
  return (
    <a
      href={link}
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500 cursor-pointer">
          {text}
        </span>
        <span className="flex items-center h-[30px] text-indigo-600 cursor-pointer">
          {text}
        </span>
      </motion.div>
    </a>
  );
};

const NavRight = () => {
  const Router = useRouter();
  return (
    <div className="flex items-center gap-10 ">
      <NavLink text="About" link={"/about"} />
      <NavLink text="Plans" link={"/plans"} />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-md whitespace-nowrap"
        onClick={() => Router.push("/contact")}
      >
        Contact Us
      </motion.button>
    </div>
  );
};

const NavMenu = ({ isOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4"
    >
      <MenuLink text="About" to={"/about"} />
      <MenuLink text="Plans" to={"/plans"} />
    </motion.div>
  );
};

const MenuLink = ({ text, to }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href={to}
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-gray-950" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>

        <span className="flex items-center h-[30px] text-indigo-600">
          <a href={to}>{text}</a>
        </span>
      </motion.div>
    </motion.a>
  );
};

export default Nav;

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};
