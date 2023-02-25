import Link from "next/link";
import { motion } from "framer-motion";
import { navVariants } from "../../../utils/motion";

const DefaultLayout = ({ children }) => {
    return (
        <div className="bg-Neutral-white h-screen">
            <div className="max-w-container m-auto">
                <header>
                    <nav className="bg-white border-gray-200 px-2 lg:px-0 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                        <div className="container flex flex-wrap items-center justify-between mx-auto">
                            <Link href="/" aria-label="S-Comm Home">
                                <img src="/logo.png" width="100px" />
                            </Link>
                            <div className="flex items-center md:order-2">
                                <button>search</button>
                            </div>
                            <motion.nav
                                variants={navVariants}
                                initial="hidden"
                                whileInView="show">
                                <div
                                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                                    id="mobile-menu-2">
                                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                        <li>
                                            <Link href="/" aria-label="Home">
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/" aria-label="About">
                                                About
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </motion.nav>
                        </div>
                    </nav>
                </header>
            </div>
            <div>{children}</div>
        </div>
    );
};

export default DefaultLayout;
