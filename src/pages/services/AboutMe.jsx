import Footer from "../../components/navigations/Footer";
import NavigationNavbar from "../../components/navigations/NavigationNavbar";
import Me from "../../assets/images/me.jpeg"; // import gambar
import { GraduationCap, Layers } from "lucide-react";

export default function AboutMe() {
      return (
            <div className="min-h-screen bg-white dark:bg-darkbg text-black dark:text-white">
                  <NavigationNavbar />
                  <div className="pt-44 pb-20 flex justify-center px-4">
                        <div className="w-full max-w-[700px] px-6">
                              <div className="flex flex-col md:flex-row items-start gap-10">
                                    <div className="flex-1 text-left">
                                          <h1 className="text-xl md:text-2xl font-semibold leading-relaxed">
                                                I develop and build web-based systems using modern technologies.
                                          </h1>

                                          <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-thin">
                                                I'm a{" "}
                                                <span className="font-semibold text-black dark:text-white">
                                                      Fullstack Software Engineer
                                                </span>{" "}
                                                focused on building new web-based systems that support and enhance the performance of students and staff, using a microservices-based architecture.
                                          </p>
                                    </div>

                                    <div className="flex-shrink-0 mt-2 md:mt-6 flex justify-center md:justify-end">
                                          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden shadow-lg">
                                                <img
                                                      src={Me}
                                                      alt="profile"
                                                      className="w-full h-full object-cover grayscale"
                                                />
                                          </div>
                                    </div>

                              </div>

                              <div className="mt-6 text-left">
                                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-thin">
                                          I have experience designing and developing end-to-end systems, from building scalable backend services to creating responsive and user-friendly interfaces. I work with modern technologies such as NestJS and React, and I focus on writing clean, maintainable code while ensuring system performance and reliability.
                                    </p>

                                    <p className="mt-4 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-thin">
                                          I also integrate authentication systems, manage databases, and implement microservices architecture to support modular and scalable applications. In addition, I am familiar with deployment processes, CI/CD pipelines, and cloud-based environments to ensure smooth and efficient system delivery.
                                    </p>

                                    <div className="mt-20">
                                          <div className="flex items-center gap-2">
                                                <GraduationCap size={20} className="text-black dark:text-white" />
                                                <h2 className="text-base md:text-lg font-semibold text-black dark:text-white">
                                                      Education
                                                </h2>
                                          </div>
                                          <div className="mt-6">
                                                <div className="flex items-start gap-6">
                                                      <p className="text-xs md:text-sm text-gray-500 tracking-widest uppercase min-w-[200px]">
                                                            Universitas Methodist Indonesia
                                                      </p>

                                                      <div className="flex flex-col">
                                                            <p className="text-sm md:text-base text-black dark:text-white font-medium">
                                                                  Informatics Engineering
                                                            </p>
                                                            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                                                                  GPA 3.60 / 4.00 — Artificial Intelligence
                                                            </p>
                                                      </div>
                                                </div>
                                                <div className="mt-4 border-t border-gray-200 dark:border-gray-700" />
                                          </div>
                                    </div>

                                    <div className="mt-16">
                                          <div className="flex items-center gap-2">
                                                <Layers size={20} className="text-black dark:text-white" />
                                                <h2 className="text-base md:text-lg font-semibold text-black dark:text-white">
                                                      The Arsenal
                                                </h2>
                                          </div>

                                          <div className="mt-6">
                                                <div className="flex items-start gap-6">
                                                      <p className="text-xs md:text-sm text-gray-500 tracking-widest uppercase min-w-[200px]">
                                                            Core Backend
                                                      </p>
                                                      <div className="flex flex-wrap gap-2">
                                                            <span className="px-3 py-1 text-xs md:text-sm rounded-md border border-gray-300 dark:border-gray-600 text-black dark:text-white">
                                                                  NestJS
                                                            </span>
                                                            <span className="px-3 py-1 text-xs md:text-sm rounded-md border border-gray-300 dark:border-gray-600 text-black dark:text-white">
                                                                  PHP (Laravel)
                                                            </span>
                                                            <span className="px-3 py-1 text-xs md:text-sm rounded-md border border-gray-300 dark:border-gray-600 text-black dark:text-white">
                                                                  Node.js (Express)
                                                            </span>
                                                      </div>
                                                </div>
                                          <div className="mt-4 border-t border-gray-200 dark:border-gray-700" />
                                          </div>

                                          <div className="mt-6">
                                                <div className="flex items-start gap-6">
                                                      <p className="text-xs md:text-sm text-gray-500 tracking-widest uppercase min-w-[200px]">
                                                            Data & Storage
                                                      </p>
                                                      <div className="flex flex-wrap gap-2">
                                                            <span className="px-3 py-1 text-xs md:text-sm rounded-md border border-gray-300 dark:border-gray-600 text-black dark:text-white">
                                                                  PostgreSqL
                                                            </span>
                                                            <span className="px-3 py-1 text-xs md:text-sm rounded-md border border-gray-300 dark:border-gray-600 text-black dark:text-white">
                                                                  MySQL/MariaDB
                                                            </span>
                                                            <span className="px-3 py-1 text-xs md:text-sm rounded-md border border-gray-300 dark:border-gray-600 text-black dark:text-white">
                                                                  SQL Server
                                                            </span>
                                                      </div>
                                                </div>
                                          <div className="mt-4 border-t border-gray-200 dark:border-gray-700" />
                                          </div>

                                          <div className="mt-6">
                                                <div className="flex items-start gap-6">
                                                      <p className="text-xs md:text-sm text-gray-500 tracking-widest uppercase min-w-[200px]">
                                                            Infrastructure
                                                      </p>
                                                      <div className="flex flex-wrap gap-2">
                                                            <span className="px-3 py-1 text-xs md:text-sm rounded-md border border-gray-300 dark:border-gray-600 text-black dark:text-white">
                                                                  Eranyacloud (CloudFront/S3)
                                                            </span>
                                                            <span className="px-3 py-1 text-xs md:text-sm rounded-md border border-gray-300 dark:border-gray-600 text-black dark:text-white">
                                                                  Docker
                                                            </span>
                                                            <span className="px-3 py-1 text-xs md:text-sm rounded-md border border-gray-300 dark:border-gray-600 text-black dark:text-white">
                                                                  CI/CD
                                                            </span>
                                                            <span className="px-3 py-1 text-xs md:text-sm rounded-md border border-gray-300 dark:border-gray-600 text-black dark:text-white">
                                                                  Shared Hosting / VPS
                                                            </span>
                                                      </div>
                                                </div>
                                          <div className="mt-4 border-t border-gray-200 dark:border-gray-700" />
                                          </div>

                                          <div className="mt-6">
                                                <div className="flex items-start gap-6">
                                                      <p className="text-xs md:text-sm text-gray-500 tracking-widest uppercase min-w-[200px]">
                                                            Frontend
                                                      </p>
                                                      <div className="flex flex-wrap gap-2">
                                                            <span className="px-3 py-1 text-xs md:text-sm rounded-md border border-gray-300 dark:border-gray-600 text-black dark:text-white">
                                                                  ReactJS
                                                            </span>
                                                            <span className="px-3 py-1 text-xs md:text-sm rounded-md border border-gray-300 dark:border-gray-600 text-black dark:text-white">
                                                                  Next UI
                                                            </span>
                                                            <span className="px-3 py-1 text-xs md:text-sm rounded-md border border-gray-300 dark:border-gray-600 text-black dark:text-white">
                                                                  ViteJS
                                                            </span>
                                                            <span className="px-3 py-1 text-xs md:text-sm rounded-md border border-gray-300 dark:border-gray-600 text-black dark:text-white">
                                                                  Tailwind
                                                            </span>
                                                      </div>
                                                </div>
                                          <div className="mt-4 border-t border-gray-200 dark:border-gray-700" />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <Footer />
            </div>
      );
}