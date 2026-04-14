import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";

const menus = [
      { name: "Home", path: "/" },
      { name: "Projects", path: "/project" },
      { name: "About", path: "/about" },
      { name: "Development", path: "/development" },
      { name: "Products", path: "/product" },
];

export default function NavigationNavbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

      return (
            <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[1000] w-full flex justify-center px-4">
                  <div
                        className="w-full max-w-[700px] flex items-center justify-between px-6 py-3 rounded-full
                        bg-white/70 dark:bg-darkbg/70
                        backdrop-blur-xl
                        border border-gray-300 dark:border-gray-600
                        shadow-lg"
                  >
                        <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-black dark:text-white">
                              {menus.map((menu) => {
                                    const isActive = location.pathname === menu.path;
                                    return (
                                          <Link
                                                key={menu.path}
                                                to={menu.path}
                                                className={`transition ${
                                                      isActive ? "text-sky-500" : "hover:text-sky-500"
                                                }`}
                                          >
                                                {menu.name}
                                          </Link>
                                    );
                              })}
                        </div>

                        <button
                              onClick={() => setIsOpen(!isOpen)}
                              className="md:hidden text-black dark:text-white"
                        >
                              {isOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>

                        <div className="flex items-center gap-2">
                              <button
                                    onClick={() => theme !== "dark" && toggleTheme()}
                                    className={`p-2 rounded-full transition ${
                                    theme === "dark"
                                          ? "bg-white/10 text-sky-500"
                                          : "text-gray-400 hover:text-black"
                                    }`}
                              >
                                    <Moon size={16} />
                              </button>

                              <button
                                    onClick={() => theme !== "light" && toggleTheme()}
                                    className={`p-2 rounded-full transition ${
                                          theme === "light"
                                          ? "bg-gray-100 text-sky-500"
                                          : "text-gray-400 hover:text-white"
                                    }`}
                              >
                                    <Sun size={16} />
                              </button>
                        </div>
                  </div>

                  {isOpen && (
                        <div className="absolute top-20 w-full max-w-[700px] px-4">
                              <div className="bg-white dark:bg-darkbg rounded-2xl shadow-lg border border-gray-300 dark:border-gray-600 p-4 flex flex-col gap-4 text-sm font-medium">
                                    {menus.map((menu) => {
                                          const isActive = location.pathname === menu.path;
                                          return (
                                                <Link
                                                      key={menu.path}
                                                      to={menu.path}
                                                      onClick={() => setIsOpen(false)}
                                                      className={`transition ${
                                                            isActive
                                                            ? "text-sky-500"
                                                            : "text-black dark:text-white hover:text-sky-500"
                                                      }`}
                                                >
                                                      {menu.name}
                                                </Link>
                                          );
                                    })}
                              </div>
                        </div>
                  )}
            </div>
      );
}