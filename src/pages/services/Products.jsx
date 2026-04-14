import NavigationNavbar from "../../components/navigations/NavigationNavbar";
import Footer from "../../components/navigations/Footer";

export default function Products() {
      const features = [
            "Free Trial",
            "Live Demo / Request Demo",
            "Landing Page (Marketing Website)",
            "Use Case / Case Study",
            "ROI Calculator (Time & Cost Saving)",
            "Dashboard & Analytics",
            "Audit Trail & Activity Logs",
            "Role-Based Access Control",
            "API Integration",
            "Notification System (Email / In-App)",
            "File Upload & Document Management",
            "Workflow Customization",
            "Multi-Level Approval System",
            "Reporting & Export (Excel / PDF)",
            "Security & Data Protection",
      ];

  return (
      <div className="min-h-screen bg-white dark:bg-darkbg text-black dark:text-white">
            <NavigationNavbar />
                  <div className="pt-44 pb-20 px-4 flex justify-center">
                        <div className="w-full max-w-[700px] px-6">
                              <h1 className="text-2xl md:text-3xl font-semibold leading-snug text-gray-700 dark:text-gray-400">
                                    A <span className="text-black dark:text-white">powerful</span> and
                                    <br />
                                    <span className="text-black dark:text-white">well-structured system</span>
                                    <br />
                                    is <span className="text-sky-500">coming soon.</span>
                              </h1>

                              <div className="mt-6 inline-block rounded-md border border-yellow-400/30 text-yellow-500 dark:text-yellow-400 bg-yellow-400/10 px-3 py-1">
                                    <p className="text-xs md:text-sm tracking-wide uppercase">
                                          Smart Digital Approval & Workflow System
                                    </p>
                              </div>

                              <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                    <span className="font-semibold text-black dark:text-white">
                                    FlowApprove
                                    </span>{" "}
                                    is a smart digital approval and workflow system designed to help
                                    companies eliminate manual processes, accelerate decision-making,
                                    and maintain full control over every request.
                              </p>

                              <p className="mt-3 text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                    From leave requests and purchase approvals to internal workflows,
                                    FlowApprove streamlines every step into a centralized,
                                    easy-to-manage platform. Teams can submit, track, and approve
                                    requests in real-time, ensuring transparency and faster execution.
                              </p>

                              <p className="mt-3 text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                    With flexible workflow customization, audit trails, and seamless
                                    integrations, FlowApprove empowers businesses to operate more
                                    efficiently and scale with confidence.
                              </p>

                              <div className="mt-10">
                                    <h2 className="text-base md:text-lg font-semibold text-black dark:text-white">
                                          Key Features
                                    </h2>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                          {features.map((item, index) => (
                                                <span
                                                      key={index}
                                                      className="px-3 py-1 text-xs md:text-sm rounded-full bg-gray-100 dark:bg-white/10 text-black dark:text-white"
                                                >
                                                      {item}
                                                </span>
                                          ))}
                                    </div>
                              </div>
                        </div>
                  </div>
            <Footer />
      </div>
  );
}