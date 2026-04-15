import NavigationNavbar from "../components/navigations/NavigationNavbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import Footer from "../components/navigations/Footer";
import { Link } from "react-router-dom";

export default function Welcome() {
      return (
            <div className="min-h-screen bg-white dark:bg-darkbg text-black dark:text-white">
                  <NavigationNavbar />
                  <div className="pt-28 sm:pt-36 md:pt-44 pb-16 sm:pb-20 px-4 flex justify-center">
                        <div className="w-full max-w-[700px] px-4 sm:px-6">

                              {/* Hero Heading */}
                              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-snug sm:leading-relaxed text-left">
                                    I build web-based systems into{" "}
                                    <span className="text-sky-500">
                                          stable and scalable platforms.
                                    </span>
                              </h1>

                              {/* Subtitle */}
                              <p className="mt-4 sm:mt-6 text-left text-base sm:text-lg md:text-xl text-black dark:text-white">
                                    Michel Sinambela — Fullstack Software Engineer
                              </p>

                              {/* Description */}
                              <p className="mt-4 sm:mt-6 text-left text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                    I currently focus on{" "}
                                    <span className="font-semibold text-black dark:text-white">
                                          building new web-based systems
                                    </span>{" "}
                                    that support and enhance the performance of{" "}
                                    <span className="font-semibold text-black dark:text-white">
                                          students and staff
                                    </span>
                                    , using a{" "}
                                    <span className="font-semibold text-sky-500">
                                          microservices-based architecture
                                    </span>
                                    .
                              </p>

                              {/* Social Links */}
                              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm md:text-base font-medium">
                                    <a
                                          href="https://github.com/michels-dev"
                                          target="_blank"
                                          rel="noreferrer"
                                          className="flex items-center font-thin gap-2 text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-500 transition"
                                    >
                                          <FaGithub size={18} />
                                          GitHub
                                    </a>
                                    <a
                                          href="https://www.linkedin.com/in/michel-sinambela-748618221/"
                                          target="_blank"
                                          rel="noreferrer"
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

                              {/* Project Experience Header */}
                              <div className="mt-14 sm:mt-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
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

                              {/* Project Cards */}
                              <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-6">
                                    {/* Card 1 */}
                                    <div className="p-4 sm:p-5 rounded-2xl border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-50 dark:hover:bg-darkhover transition">
                                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
                                                <h3 className="text-base md:text-lg font-semibold text-black dark:text-white hover:text-sky-500 dark:hover:text-sky-500 transition cursor-pointer">
                                                      Sistem Adminitrasi Sekolah
                                                </h3>
                                                <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-thin">
                                                      NestJS · React · Clerk · PostgreSQL
                                                </span>
                                          </div>
                                          <p className="mt-2 sm:mt-3 text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                                The core website serves as the main landing page to provide system information to users.
                                                It also automatically redirects users to the appropriate service dashboard login based on their needs.
                                          </p>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="p-4 sm:p-5 rounded-2xl border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-50 dark:hover:bg-darkhover transition">
                                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
                                                <h3 className="text-base md:text-lg font-semibold text-black dark:text-white hover:text-sky-500 dark:hover:text-sky-500 transition cursor-pointer">
                                                      Sistem Pengajuan Perjanjian/SPK & Addendum
                                                </h3>
                                                <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-thin">
                                                      NestJS · React · PostgreSQL
                                                </span>
                                          </div>
                                          <p className="mt-2 sm:mt-3 text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                                Integrated with the School Administration System via microservices for centralized login.
                                                Helps staff submit agreements/SPK and addendums digitally through the system.
                                          </p>
                                    </div>
                              </div>

                              {/* Tech Stack */}
                              <div className="mt-12 sm:mt-16">
                                    <h2 className="text-lg md:text-xl font-semibold text-black dark:text-white">
                                          Tech Stack / Tasks
                                    </h2>

                                    <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
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
                                                                  transition text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 text-center"
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