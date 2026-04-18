import { Redis } from "@upstash/redis";

const redis = new Redis({
      url: process.env.KV_REST_API_URL,
      token: process.env.KV_REST_API_TOKEN,
});

export default async function handler(req, res) {
      try {
            if (req.method === "POST") {
                  const total = await redis.incr("visitors");
                  return res.status(200).json({ total });
            }

            if (req.method === "GET") {
                  const total = (await redis.get("visitors")) || 0;
                  return res.status(200).json({ total });
            }

            return res.status(405).json({ message: "Method not allowed" });
      } catch (err) {
            return res.status(500).json({ error: "Server error" });
      }
}