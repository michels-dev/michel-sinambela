import Footer from "../../components/navigations/Footer";
import NavigationNavbar from "../../components/navigations/NavigationNavbar";

export default function Projects() {
      return (
            <div className="min-h-screen bg-white dark:bg-darkbg text-black dark:text-white">
                  <NavigationNavbar />
                  <div className="pt-44 pb-20 px-4 flex justify-center">
                        <div className="w-full max-w-[700px] px-6">
                              <h1 className="text-xl md:text-2xl font-semibold text-black dark:text-white">
                                    Projects Experience
                              </h1>

                              <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                    A collection of experiences in designing system architectures focused on building structured, scalable, and user-friendly systems.
                              </p>

                              <div className="mt-20">
                                    <div className="grid grid-cols-[60px_1fr_140px] pb-4 border-b border-gray-200 dark:border-gray-700 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                          <span>Year</span>
                                          <span>Details</span>
                                          <span>Role</span>
                                    </div>
                                    <div className="space-y-6 mt-6">
                                          <div className="grid grid-cols-[60px_1fr_140px] items-center">
                                                <div>
                                                      <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                                            2025
                                                      </span>
                                                </div>
                                                <div className="pl-10">
                                                      <h3 className="flex items-center gap-2 text-sm md:text-base font-medium text-black dark:text-white">
                                                            Sistem Administrasi Sekolah

                                                            <span className="px-2 py-0.5 text-[10px] md:text-xs rounded-md border border-yellow-400/30 text-yellow-500 dark:text-yellow-400 bg-yellow-400/10">
                                                                  Project Lead
                                                            </span>
                                                      </h3>

                                                      <p className="mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                            The core website serves as the main landing page to provide system information to users.
                                                            It also automatically redirects users to the appropriate service dashboard login based on their needs.
                                                      </p>

                                                      <div className="mt-3 flex flex-wrap gap-2">
                                                            {["NestJS", "React", "Clerk Auth", "PostgreSQL", "Docker", "Eranyacloud", "Gitlab", "CI/CD"].map((tool, index) => (
                                                                  <span
                                                                        key={index}
                                                                        className="px-2 py-1 text-xs md:text-sm rounded-full
                                                                        text-sky-500 dark:text-sky-400
                                                                        bg-sky-400/10"
                                                                  >
                                                                        {tool}
                                                                  </span>
                                                            ))}
                                                      </div>
                                                </div>
                                                <div className="text-right">
                                                      <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                                            Fullstack Developer
                                                      </span>
                                                </div>
                                          </div>

                                          <div className="grid grid-cols-[60px_1fr_140px] items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                                                <div>
                                                      <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                                            2025
                                                      </span>
                                                </div>
                                                <div className="pl-10">
                                                      <h3 className="text-sm md:text-base font-medium text-black dark:text-white">
                                                            Dashboard Sistem Bank Soal
                                                      </h3>

                                                      <p className="mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                            Integrated with the School Administration System via microservices for centralized enrollment.
                                                            Helps staff create sets of questions for students to complete.
                                                      </p>

                                                      <div className="mt-3 flex flex-wrap gap-2">
                                                            {["NestJS", "React", "SMTP", "PostgreSQL", "Docker", "Eranyacloud", "Eranyacloud S3", "Gitlab", "CI/CD"].map((tool, index) => (
                                                                  <span
                                                                        key={index}
                                                                        className="px-2 py-1 text-xs md:text-sm rounded-full
                                                                        text-sky-500 dark:text-sky-400
                                                                        bg-sky-400/10"
                                                                  >
                                                                        {tool}
                                                                  </span>
                                                            ))}
                                                      </div>
                                                </div>
                                                <div className="text-right">
                                                      <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                                            Fullstack Developer
                                                      </span>
                                                </div>
                                          </div>

                                          <div className="grid grid-cols-[60px_1fr_140px] items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                                                <div>
                                                      <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                                            2024
                                                      </span>
                                                </div>
                                                <div className="pl-10">
                                                      <h3 className="text-sm md:text-base font-medium text-black dark:text-white">
                                                            Sistem Pengajuan Perjanjian/SPK & Addendum
                                                      </h3>

                                                      <p className="mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                            Integrated with the School Administration System via microservices for centralized login.
                                                            Helps staff submit agreements/SPK and addendums digitally through the system.
                                                      </p>

                                                      <div className="mt-3 flex flex-wrap gap-2">
                                                            {["NestJS", "React", "SMTP", "PostgreSQL", "Docker", "Eranyacloud", "Eranyacloud S3", "Gitlab", "CI/CD"].map((tool, index) => (
                                                                  <span
                                                                        key={index}
                                                                        className="px-2 py-1 text-xs md:text-sm rounded-full
                                                                        text-sky-500 dark:text-sky-400
                                                                        bg-sky-400/10"
                                                                  >
                                                                        {tool}
                                                                  </span>
                                                            ))}
                                                      </div>
                                                </div>
                                                <div className="text-right">
                                                      <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                                            Fullstack Developer
                                                      </span>
                                                </div>
                                          </div>

                                          <div className="grid grid-cols-[60px_1fr_140px] items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                                                <div>
                                                      <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                                            2024
                                                      </span>
                                                </div>
                                                <div className="pl-10">
                                                      <h3 className="text-sm md:text-base font-medium text-black dark:text-white">
                                                            Dashboard Pengajuan Cuti Izin
                                                      </h3>

                                                      <p className="mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                            Integrated with the School Administration System via microservices for centralized enrollment.
                                                            Helps staff submit leave requests and permissions digitally through the system.
                                                      </p>

                                                      <div className="mt-3 flex flex-wrap gap-2">
                                                            {["NestJS", "React", "PostgreSQL", "Docker", "Eranyacloud", "Gitlab", "CI/CD"].map((tool, index) => (
                                                                  <span
                                                                        key={index}
                                                                        className="px-2 py-1 text-xs md:text-sm rounded-full
                                                                        text-sky-500 dark:text-sky-400
                                                                        bg-sky-400/10"
                                                                  >
                                                                        {tool}
                                                                  </span>
                                                            ))}
                                                      </div>
                                                </div>
                                                <div className="text-right">
                                                      <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                                            Fullstack Developer
                                                      </span>
                                                </div>
                                          </div>

                                          <div className="grid grid-cols-[60px_1fr_140px] items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                                                <div>
                                                      <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                                            2023
                                                      </span>
                                                </div>
                                                <div className="pl-10">
                                                      <h3 className="text-sm md:text-base font-medium text-black dark:text-white">
                                                            Dashboard Peminjaman Ruangan
                                                      </h3>

                                                      <p className="mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                            Integrated with the School Administration System via microservices for centralized registration.
                                                            Helps staff submit room reservation requests digitally through the system.
                                                      </p>

                                                      <div className="mt-3 flex flex-wrap gap-2">
                                                            {["Laravel", "Inertia", "PostgreSQL", "Docker", "Alibaba Cloud", "VPS", "Gitlab"].map((tool, index) => (
                                                                  <span
                                                                        key={index}
                                                                        className="px-2 py-1 text-xs md:text-sm rounded-full
                                                                        text-sky-500 dark:text-sky-400
                                                                        bg-sky-400/10"
                                                                  >
                                                                        {tool}
                                                                  </span>
                                                            ))}
                                                      </div>
                                                </div>
                                                <div className="text-right">
                                                      <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                                            Fullstack Developer
                                                      </span>
                                                </div>
                                          </div>

                                          <div className="grid grid-cols-[60px_1fr_140px] items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                                                <div>
                                                      <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                                            2023
                                                      </span>
                                                </div>
                                                <div className="pl-10">
                                                      <h3 className="text-sm md:text-base font-medium text-black dark:text-white">
                                                            Dashboard Peminjaman Kendaraan
                                                      </h3>

                                                      <p className="mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                             Integrated with the School Administration System via microservices for centralized registration.
                                                            Helps staff submit vehicle reservation requests digitally through the system.
                                                      </p>

                                                      <div className="mt-3 flex flex-wrap gap-2">
                                                            {["Laravel", "Inertia", "PostgreSQL", "Docker", "Alibaba Cloud", "VPS", "Gitlab"].map((tool, index) => (
                                                                  <span
                                                                        key={index}
                                                                        className="px-2 py-1 text-xs md:text-sm rounded-full
                                                                        text-sky-500 dark:text-sky-400
                                                                        bg-sky-400/10"
                                                                  >
                                                                        {tool}
                                                                  </span>
                                                            ))}
                                                      </div>
                                                </div>
                                                <div className="text-right">
                                                      <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                                            Fullstack Developer
                                                      </span>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <Footer />
            </div>
      );
}