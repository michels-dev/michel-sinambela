import Footer from "../../components/navigations/Footer";
import NavigationNavbar from "../../components/navigations/NavigationNavbar";

const projects = [
      {
            year: "2025",
            title: "Sistem Administrasi Sekolah",
            badge: "Project Lead",
            description:
                  "The core website serves as the main landing page to provide system information to users. It also automatically redirects users to the appropriate service dashboard login based on their needs.",
            tools: ["NestJS", "React", "Clerk Auth", "PostgreSQL", "Docker", "Eranyacloud", "Gitlab", "CI/CD"],
            role: "Fullstack Developer",
      },
      {
            year: "2025",
            title: "Dashboard Sistem Bank Soal",
            badge: null,
            description:
                  "Integrated with the School Administration System via microservices for centralized enrollment. Helps staff create sets of questions for students to complete.",
            tools: ["NestJS", "React", "SMTP", "PostgreSQL", "Docker", "Eranyacloud", "Eranyacloud S3", "Gitlab", "CI/CD"],
            role: "Fullstack Developer",
      },
      {
            year: "2024",
            title: "Sistem Pengajuan Perjanjian/SPK & Addendum",
            badge: null,
            description:
                  "Integrated with the School Administration System via microservices for centralized login. Helps staff submit agreements/SPK and addendums digitally through the system.",
            tools: ["NestJS", "React", "SMTP", "PostgreSQL", "Docker", "Eranyacloud", "Eranyacloud S3", "Gitlab", "CI/CD"],
            role: "Fullstack Developer",
      },
      {
            year: "2024",
            title: "Dashboard Pengajuan Cuti Izin",
            badge: null,
            description:
                  "Integrated with the School Administration System via microservices for centralized enrollment. Helps staff submit leave requests and permissions digitally through the system.",
            tools: ["NestJS", "React", "PostgreSQL", "Docker", "Eranyacloud", "Gitlab", "CI/CD"],
            role: "Fullstack Developer",
      },
      {
            year: "2023",
            title: "Dashboard Peminjaman Ruangan",
            badge: null,
            description:
                  "Integrated with the School Administration System via microservices for centralized registration. Helps staff submit room reservation requests digitally through the system.",
            tools: ["Laravel", "Inertia", "PostgreSQL", "Docker", "Alibaba Cloud", "VPS", "Gitlab"],
            role: "Fullstack Developer",
      },
      {
            year: "2023",
            title: "Dashboard Peminjaman Kendaraan",
            badge: null,
            description:
                  "Integrated with the School Administration System via microservices for centralized registration. Helps staff submit vehicle reservation requests digitally through the system.",
            tools: ["Laravel", "Inertia", "PostgreSQL", "Docker", "Alibaba Cloud", "VPS", "Gitlab"],
            role: "Fullstack Developer",
      },
];

export default function Projects() {
      return (
            <div className="min-h-screen bg-white dark:bg-darkbg text-black dark:text-white">
                  <NavigationNavbar />
                  <div className="pt-28 sm:pt-36 md:pt-44 pb-16 sm:pb-20 px-4 flex justify-center">
                        <div className="w-full max-w-[700px] px-4 sm:px-6">

                              {/* Page Header */}
                              <h1 className="text-xl md:text-2xl font-semibold text-black dark:text-white">
                                    Projects Experience
                              </h1>

                              <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                    A collection of experiences in designing system architectures focused on building structured, scalable, and user-friendly systems.
                              </p>

                              <div className="mt-14 sm:mt-20">

                                    {/* ── DESKTOP TABLE HEADER (hidden on mobile) ── */}
                                    <div className="hidden sm:grid grid-cols-[60px_1fr_140px] pb-4 border-b border-gray-200 dark:border-gray-700 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                          <span>Year</span>
                                          <span>Details</span>
                                          <span>Role</span>
                                    </div>

                                    <div className="space-y-6 mt-4 sm:mt-6">
                                          {projects.map((project, i) => (
                                                <div key={i}>
                                                      {/* ── DESKTOP ROW ── */}
                                                      <div className="hidden sm:grid grid-cols-[60px_1fr_140px] items-start pt-6 border-t border-gray-200 dark:border-gray-700 first:border-t-0 first:pt-0">
                                                            {/* Year */}
                                                            <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 pt-0.5">
                                                                  {project.year}
                                                            </span>

                                                            {/* Details */}
                                                            <div className="pl-10">
                                                                  <h3 className="flex flex-wrap items-center gap-2 text-sm md:text-base font-medium text-black dark:text-white">
                                                                        {project.title}
                                                                        {project.badge && (
                                                                              <span className="px-2 py-0.5 text-[10px] md:text-xs rounded-md border border-yellow-400/30 text-yellow-500 dark:text-yellow-400 bg-yellow-400/10">
                                                                                    {project.badge}
                                                                              </span>
                                                                        )}
                                                                  </h3>
                                                                  <p className="mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                                        {project.description}
                                                                  </p>
                                                                  <div className="mt-3 flex flex-wrap gap-2">
                                                                        {project.tools.map((tool, idx) => (
                                                                              <span
                                                                                    key={idx}
                                                                                    className="px-2 py-1 text-xs md:text-sm rounded-full text-sky-500 dark:text-sky-400 bg-sky-400/10"
                                                                              >
                                                                                    {tool}
                                                                              </span>
                                                                        ))}
                                                                  </div>
                                                            </div>

                                                            {/* Role */}
                                                            <div className="text-right">
                                                                  <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                                                        {project.role}
                                                                  </span>
                                                            </div>
                                                      </div>

                                                      {/* ── MOBILE CARD ── */}
                                                      <div className="sm:hidden pt-5 border-t border-gray-200 dark:border-gray-700 first:border-t-0 first:pt-0">
                                                            {/* Year + Role on one line */}
                                                            <div className="flex items-center justify-between mb-2">
                                                                  <span className="text-xs text-gray-500 dark:text-gray-400">
                                                                        {project.year}
                                                                  </span>
                                                                  <span className="text-xs text-gray-500 dark:text-gray-400">
                                                                        {project.role}
                                                                  </span>
                                                            </div>

                                                            {/* Title + Badge */}
                                                            <h3 className="flex flex-wrap items-center gap-2 text-sm font-medium text-black dark:text-white">
                                                                  {project.title}
                                                                  {project.badge && (
                                                                        <span className="px-2 py-0.5 text-[10px] rounded-md border border-yellow-400/30 text-yellow-500 dark:text-yellow-400 bg-yellow-400/10">
                                                                              {project.badge}
                                                                        </span>
                                                                  )}
                                                            </h3>

                                                            {/* Description */}
                                                            <p className="mt-2 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                                                  {project.description}
                                                            </p>

                                                            {/* Tools */}
                                                            <div className="mt-3 flex flex-wrap gap-2">
                                                                  {project.tools.map((tool, idx) => (
                                                                        <span
                                                                              key={idx}
                                                                              className="px-2 py-1 text-xs rounded-full text-sky-500 dark:text-sky-400 bg-sky-400/10"
                                                                        >
                                                                              {tool}
                                                                        </span>
                                                                  ))}
                                                            </div>
                                                      </div>
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