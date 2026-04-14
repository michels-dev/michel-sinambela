export default function Footer() {
      return (
            <footer className="mt-16 py-4 text-center border-t border-gray-200 dark:border-white/10 bg-transparent">
                  <p className="text-sm font-thin text-gray-500 dark:text-gray-500">
                        © 2025 Michel Sinambela. All rights reserved.
                  </p>

                  <p className="text-sm font-thin text-gray-500 dark:text-gray-500">
                        Supported by{" "}
                        <a
                              href="https://vitejs.dev/"
                              target="_blank"
                              className="hover:text-blue-500 transition"
                        >
                              Vite
                        </a>{" "}
                        &{" "}
                        <a
                              href="https://nextui.org/"
                              target="_blank"
                              className="hover:text-blue-500 transition"
                        >
                              Next UI
                        </a>
                  </p>
            </footer>
      );
}