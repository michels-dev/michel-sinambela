import NavigationNavbar from "../components/navigations/NavigationNavbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import Footer from "../components/navigations/Footer";
import { Link } from "react-router-dom";

export default function Welcome() {
      return (
            <div className="min-h-screen bg-white dark:bg-darkbg text-black dark:text-white">
                  <NavigationNavbar />
                  <div className="pt-44 pb-20 px-4 flex justify-center">
                        <div className="w-full max-w-[700px] px-6">
                              <h1 className="text-5xl md:text-6xl font-semibold leading-relaxed text-left">
                                    I build web-based systems into{" "}
                                    <span className="text-sky-500">
                                          stable and scalable platforms.
                                    </span>
                              </h1>

                              <p className="mt-6 text-left text-lg md:text-xl text-black dark:text-white">
                                    Michel Sinambela a Fullstack Software Engineer
                              </p>

                              <p className="mt-6 text-left text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                    I currently focus on <span className="font-semibold text-black dark:text-white">building new web-based systems </span>
                                    that support and enhance the performance of{" "}
                                    <span className="font-semibold text-black dark:text-white">students and staff</span>,
                                    using a{" "}
                                    <span className="font-semibold text-sky-500">
                                          microservices-based architecture
                                    </span>.
                              </p>

                              <div className="mt-5 flex items-center justify-between text-sm md:text-base font-medium">
                                    <a
                                          href="https://github.com/michels-dev"
                                          target="_blank"
                                          className="flex items-center font-thin gap-2 text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-500 transition"
                                    >
                                          <FaGithub size={18} />
                                          GitHub
                                    </a>
                                    <a
                                          href="https://www.linkedin.com/in/michel-sinambela-748618221/"
                                          target="_blank"
                                          className="flex items-center font-thin gap-2 text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-500 transition"
                                    >
                                          <FaLinkedin size={18} />
                                          LinkedIn
                                    </a>
                                    <a
                                          href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                                          className="flex items-center gap-2 font-semibold text-sky-500"
                                    >
                                          <Mail size={18} />
                                          Contact Me
                                    </a>

                              </div>

                              <div className="mt-20 flex items-center justify-between">
                                    <h2 className="text-lg md:text-xl font-semibold text-black dark:text-white">
                                          Project Experience
                                    </h2>

                                    <Link
                                          to="/project"
                                          className="group flex items-center gap-2 text-sm md:text-base font-thin text-gray-500 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-500 transition-colors duration-200"
                                    >
                                          <span className="group-hover:text-sky-500">
                                                View all project experiences →
                                          </span>
                                    </Link>
                              </div>

                              <div className="mt-8 grid gap-6">
                                    <div className="p-5 rounded-2xl border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-50 dark:hover:bg-darkhover transition">
                                          <div className="flex items-center justify-between">
                                                <h3 className="text-base md:text-lg font-semibold text-black dark:text-white hover:text-sky-500 dark:hover:text-sky-500 transition cursor-pointer">
                                                      Sistem Adminitrasi Sekolah
                                                </h3>
                                                <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-thin">
                                                      NestJS · React · Clerk · PostgreSQL
                                                </span>
                                          </div>
                                          <p className="mt-3 text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                                The core website serves as the main landing page to provide system information to users.
                                                It also automatically redirects users to the appropriate service dashboard login based on their needs.
                                          </p>
                                    </div>
                                    <div className="p-5 rounded-2xl border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-50 dark:hover:bg-darkhover transition">
                                          <div className="flex items-center justify-between">
                                                <h3 className="text-base md:text-lg font-semibold text-black dark:text-white hover:text-sky-500 dark:hover:text-sky-500 transition cursor-pointer">
                                                      Sistem Pengajuan Perjanjian/SPK & Addendum
                                                </h3>

                                                <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-thin">
                                                      NesJS · React · PostgreSQL
                                                </span>
                                          </div>
                                          <p className="mt-3 text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                                Integrated with the School Administration System via microservices for centralized login.
                                                Helps staff submit agreements/SPK and addendums digitally through the system.
                                          </p>
                                    </div>
                              </div>

                              <div className="mt-16">
                                    <h2 className="text-lg md:text-xl font-semibold text-black dark:text-white">
                                          Tech Stack / Tasks
                                    </h2>

                                    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {[
                                          "NestJS",
                                          "ReactJS",
                                          "Next UI",
                                          "Clerk Auth",
                                          "PostgreSQL",
                                          "Docker",
                                          "Gitlab",
                                          "CI/CD",
                                          "EranyaCloud",
                                    ].map((item, index) => (
                                          <div
                                                key={index}
                                                className="p-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-50 dark:hover:bg-darkhover
                                                            transition text-sm md:text-base text-gray-700 dark:text-gray-300 text-center"
                                          >
                                                {item}
                                          </div>
                                    ))}
                                    </div>
                              </div>
                        </div>
                  </div>
                  <Footer />
            </div>
      );
}