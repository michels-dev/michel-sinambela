export default function VisitorCard({ total }) {
      return (
            <div className="mt-4 p-5 rounded-2xl border border-gray-300 dark:border-gray-600">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                        Portfolio Visitors
                  </p>

                  <h2 className="text-xl font-semibold text-sky-500 mt-1">
                        {total !== null ? total : "..."} <span className="text-sm text-gray-500 font-thin">visitors</span>
                  </h2>

                  <p className="text-xs text-gray-400 mt-1">
                        Real-time visitor tracking using serverless architecture (Vercel + Upstash Redis)
                  </p>
            </div>
      );
}