import { useEffect, useState } from "react";

export default function useVisitor() {
      const [total, setTotal] = useState(null);
      useEffect(() => {
            const trackVisitor = async () => {
                  try {
                        const hasVisited = localStorage.getItem("hasVisited");

                        if (!hasVisited) {
                        await fetch("/api/visitor", { method: "POST" });
                        localStorage.setItem("hasVisited", "true");
                        }

                        const res = await fetch("/api/visitor");
                        const data = await res.json();

                        setTotal(data.total);
                  } catch (err) {
                        console.error(err);
                        setTotal(0);
                  }
            };

            trackVisitor();
      }, []);

      return total;
}