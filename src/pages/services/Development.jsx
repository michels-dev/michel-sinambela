import { ChartSpline, Database, Server, SwatchBook } from "lucide-react";
import { FaCode } from "react-icons/fa";
import NavigationNavbar from "../../components/navigations/NavigationNavbar";
import Footer from "../../components/navigations/Footer";

export default function Development() {
      return (
            <div className="min-h-screen bg-white dark:bg-darkbg text-black dark:text-white">
                  <NavigationNavbar />
                  <div className="pt-44 pb-20 px-4 flex justify-center">
                        <div className="w-full max-w-[700px] px-6">
                              <h1 className="text-xl md:text-2xl font-semibold text-black dark:text-white">
                                    Uses
                              </h1>

                              <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                    My current development setup and the tools I reach for most days.
                              </p>

                              <div className="mt-16">
                                    <div className="flex items-center gap-2">
                                          <FaCode size={20} className="text-black dark:text-white" />
                                          <h2 className="text-base md:text-lg font-semibold text-black dark:text-white">
                                                Development Environment
                                          </h2>
                                    </div>
                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                          <div className="p-4 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5">
                                                <h3 className="text-sm md:text-base font-medium text-black dark:text-white">
                                                      VS Code
                                                </h3>
                                                <p className="mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                      My main editor for almost everything: TypeScript, JavaScript, PHP, and quick edits.
                                                </p>
                                          </div>
                                          <div className="p-4 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5">
                                                <h3 className="text-sm md:text-base font-medium text-black dark:text-white">
                                                      iOS
                                                </h3>
                                                <p className="mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                      Used for Swift UI and iOS projects, especially when I need to run and debug native apps.
                                                </p>
                                          </div>
                                    </div>

                                    <div className="flex items-center gap-2 mt-16">
                                          <Server size={20} className="text-black dark:text-white" />
                                          <h2 className="text-base md:text-lg font-semibold text-black dark:text-white">
                                                Containers & Runtime
                                          </h2>
                                    </div>
                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                          <div className="p-4 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5">
                                                <h3 className="text-sm md:text-base font-medium text-black dark:text-white">
                                                      VS Code
                                                </h3>
                                                <p className="mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                      My default way to run services locally so environments stay consistent.
                                                </p>
                                          </div>
                                    </div>

                                    <div className="flex items-center gap-2 mt-16">
                                          <ChartSpline size={20} className="text-black dark:text-white" />
                                          <h2 className="text-base md:text-lg font-semibold text-black dark:text-white">
                                                API & Testing Tools
                                          </h2>
                                    </div>
                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                          <div className="p-4 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5">
                                                <h3 className="text-sm md:text-base font-medium text-black dark:text-white">
                                                      Postman
                                                </h3>
                                                <p className="mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                      For exploring and testing APIs, trying out ideas, and debugging requests.
                                                </p>
                                          </div>
                                          <div className="p-4 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5">
                                                <h3 className="text-sm md:text-base font-medium text-black dark:text-white">
                                                      Swagger
                                                </h3>
                                                <p className="mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                      To explore and test the API with an engaging interface, try out new ideas, and fix errors in requests.
                                                </p>
                                          </div>
                                    </div>

                                    <div className="flex items-center gap-2 mt-16">
                                          <Database size={20} className="text-black dark:text-white" />
                                          <h2 className="text-base md:text-lg font-semibold text-black dark:text-white">
                                                Database & Data
                                          </h2>
                                    </div>
                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                          <div className="p-4 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5">
                                                <h3 className="text-sm md:text-base font-medium text-black dark:text-white">
                                                      DBeaver
                                                </h3>
                                                <p className="mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                      My general-purpose database client for MySQL, PostgreSQL, and others.
                                                </p>
                                          </div>
                                    </div>

                                    <div className="flex items-center gap-2 mt-16">
                                          <SwatchBook size={20} className="text-black dark:text-white" />
                                          <h2 className="text-base md:text-lg font-semibold text-black dark:text-white">
                                                Design & UX
                                          </h2>
                                    </div>
                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                          <div className="p-4 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5">
                                                <h3 className="text-sm md:text-base font-medium text-black dark:text-white">
                                                      Figma
                                                </h3>
                                                <p className="mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                      Where I check designs and plan how to turn them into React or Vue components.
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <Footer />
            </div>
      );
}