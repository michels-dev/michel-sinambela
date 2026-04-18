import { Redis } from "@upstash/redis";

const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
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