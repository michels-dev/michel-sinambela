import { ChartSpline, Database, Server, SwatchBook } from "lucide-react";
import { FaCode } from "react-icons/fa";
import NavigationNavbar from "../../components/navigations/NavigationNavbar";
import Footer from "../../components/navigations/Footer";

const sections = [
      {
            icon: (props) => <FaCode size={20} {...props} />,
            title: "Development Environment",
            tools: [
                  {
                        name: "VS Code",
                        desc: "My main editor for almost everything: TypeScript, JavaScript, PHP, and quick edits.",
                  },
                  {
                        name: "iOS",
                        desc: "Used for Swift UI and iOS projects, especially when I need to run and debug native apps.",
                  },
            ],
      },
      {
            icon: (props) => <Server size={20} {...props} />,
            title: "Containers & Runtime",
            tools: [
                  {
                        name: "Docker",
                        desc: "My default way to run services locally so environments stay consistent.",
                  },
            ],
      },
      {
            icon: (props) => <ChartSpline size={20} {...props} />,
            title: "API & Testing Tools",
            tools: [
                  {
                        name: "Postman",
                        desc: "For exploring and testing APIs, trying out ideas, and debugging requests.",
                  },
                  {
                        name: "Swagger",
                        desc: "To explore and test the API with an engaging interface, try out new ideas, and fix errors in requests.",
                  },
            ],
      },
      {
            icon: (props) => <Database size={20} {...props} />,
            title: "Database & Data",
            tools: [
                  {
                        name: "DBeaver",
                        desc: "My general-purpose database client for MySQL, PostgreSQL, and others.",
                  },
            ],
      },
      {
            icon: (props) => <SwatchBook size={20} {...props} />,
            title: "Design & UX",
            tools: [
                  {
                        name: "Figma",
                        desc: "Where I check designs and plan how to turn them into React or Vue components.",
                  },
            ],
      },
];

export default function Development() {
      return (
            <div className="min-h-screen bg-white dark:bg-darkbg text-black dark:text-white">
                  <NavigationNavbar />
                  <div className="pt-28 sm:pt-36 md:pt-44 pb-16 sm:pb-20 px-4 flex justify-center">
                        <div className="w-full max-w-[700px] px-4 sm:px-6">

                              <h1 className="text-xl md:text-2xl font-semibold text-black dark:text-white">
                                    Uses
                              </h1>

                              <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                    My current development setup and the tools I reach for most days.
                              </p>

                              <div className="mt-12 sm:mt-16 space-y-12 sm:space-y-16">
                                    {sections.map((section, i) => {
                                          const Icon = section.icon;
                                          return (
                                                <div key={i}>
                                                      <div className="flex items-center gap-2">
                                                            <Icon className="text-black dark:text-white" />
                                                            <h2 className="text-base md:text-lg font-semibold text-black dark:text-white">
                                                                  {section.title}
                                                            </h2>
                                                      </div>

                                                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            {section.tools.map((tool, idx) => (
                                                                  <div
                                                                        key={idx}
                                                                        className="p-4 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5"
                                                                  >
                                                                        <h3 className="text-sm md:text-base font-medium text-black dark:text-white">
                                                                              {tool.name}
                                                                        </h3>
                                                                        <p className="mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                                              {tool.desc}
                                                                        </p>
                                                                  </div>
                                                            ))}
                                                      </div>
                                                </div>
                                          );
                                    })}
                              </div>
                        </div>
                  </div>
                  <Footer />
            </div>
      );
}