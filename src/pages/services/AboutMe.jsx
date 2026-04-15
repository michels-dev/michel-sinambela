import Footer from "../../components/navigations/Footer";
import NavigationNavbar from "../../components/navigations/NavigationNavbar";
import Me from "../../assets/images/me.jpeg";
import { GraduationCap, Layers } from "lucide-react";

const arsenal = [
      {
            category: "Core Backend",
            tools: ["NestJS", "PHP (Laravel)", "Node.js (Express)"],
      },
      {
            category: "Data & Storage",
            tools: ["PostgreSQL", "MySQL/MariaDB", "SQL Server"],
      },
      {
            category: "Infrastructure",
            tools: ["Eranyacloud (CloudFront/S3)", "Docker", "CI/CD", "Shared Hosting / VPS"],
      },
      {
            category: "Frontend",
            tools: ["ReactJS", "Next UI", "ViteJS", "Tailwind"],
      },
];

export default function AboutMe() {
      return (
            <div className="min-h-screen bg-white dark:bg-darkbg text-black dark:text-white">
                  <NavigationNavbar />
                  <div className="pt-28 sm:pt-36 md:pt-44 pb-16 sm:pb-20 flex justify-center px-4">
                        <div className="w-full max-w-[700px] px-4 sm:px-6">

                              {/* Hero: Text + Photo */}
                              <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10">
                                    <div className="flex-1 text-left">
                                          <h1 className="text-xl md:text-2xl font-semibold leading-relaxed">
                                                I develop and build web-based systems using modern technologies.
                                          </h1>

                                          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-thin">
                                                I'm a{" "}
                                                <span className="font-semibold text-black dark:text-white">
                                                      Fullstack Software Engineer
                                                </span>{" "}
                                                focused on building new web-based systems that support and enhance the performance of students and staff, using a microservices-based architecture.
                                          </p>
                                    </div>

                                    {/* Photo — center on mobile, right-aligned on desktop */}
                                    <div className="w-full flex justify-center md:flex-shrink-0 md:w-auto md:mt-6 md:justify-end">
                                          <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden shadow-lg">
                                                <img
                                                      src={Me}
                                                      alt="profile"
                                                      className="w-full h-full object-cover grayscale"
                                                />
                                          </div>
                                    </div>
                              </div>

                              {/* Bio paragraphs */}
                              <div className="mt-6 text-left">
                                    <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-thin">
                                          I have experience designing and developing end-to-end systems, from building scalable backend services to creating responsive and user-friendly interfaces. I work with modern technologies such as NestJS and React, and I focus on writing clean, maintainable code while ensuring system performance and reliability.
                                    </p>

                                    <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-thin">
                                          I also integrate authentication systems, manage databases, and implement microservices architecture to support modular and scalable applications. In addition, I am familiar with deployment processes, CI/CD pipelines, and cloud-based environments to ensure smooth and efficient system delivery.
                                    </p>

                                    {/* Education */}
                                    <div className="mt-14 sm:mt-20">
                                          <div className="flex items-center gap-2">
                                                <GraduationCap size={20} className="text-black dark:text-white" />
                                                <h2 className="text-base md:text-lg font-semibold text-black dark:text-white">
                                                      Education
                                                </h2>
                                          </div>

                                          <div className="mt-6">
                                                {/* Desktop: side-by-side | Mobile: stacked */}
                                                <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6 gap-1">
                                                      <p className="text-xs md:text-sm text-gray-500 tracking-widest uppercase sm:min-w-[200px]">
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

                                    {/* Arsenal */}
                                    <div className="mt-12 sm:mt-16">
                                          <div className="flex items-center gap-2">
                                                <Layers size={20} className="text-black dark:text-white" />
                                                <h2 className="text-base md:text-lg font-semibold text-black dark:text-white">
                                                      The Arsenal
                                                </h2>
                                          </div>

                                          <div className="mt-6 space-y-6">
                                                {arsenal.map((section, i) => (
                                                      <div key={i}>
                                                            {/* Desktop: side-by-side | Mobile: stacked */}
                                                            <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6 gap-2">
                                                                  <p className="text-xs md:text-sm text-gray-500 tracking-widest uppercase sm:min-w-[200px]">
                                                                        {section.category}
                                                                  </p>
                                                                  <div className="flex flex-wrap gap-2">
                                                                        {section.tools.map((tool, idx) => (
                                                                              <span
                                                                                    key={idx}
                                                                                    className="px-3 py-1 text-xs md:text-sm rounded-md border border-gray-300 dark:border-gray-600 text-black dark:text-white"
                                                                              >
                                                                                    {tool}
                                                                              </span>
                                                                        ))}
                                                                  </div>
                                                            </div>
                                                            <div className="mt-4 border-t border-gray-200 dark:border-gray-700" />
                                                      </div>
                                                ))}
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <Footer />
            </div>
      );
}