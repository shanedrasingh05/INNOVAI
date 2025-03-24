import Redis from "ioredis";

const redisClient = new Redis({
  host: "127.0.0.1",
  port: ,
  connectTimeout: 10000, // Wait 10 seconds before timeout
  retryStrategy: (times) => Math.min(times * 50, 2000), // Retry on failure
});



redisClient.on("connect", () => console.log("✅ Connected to Redis"));
redisClient.on("error", (err) => console.error("❌ Redis Error:", err));

export default redisClient;

// import Redis from "ioredis";

// const redisClient = new Redis({
//     host: process.env.REDIS_HOST,
//     port: process.env.REDIS_PORT,
//     password: process.env.REDIS_PASSWORD,
// });

// redisClient.on('connect',()=>{
//     console.log("Redis Connected")
// })

// export default redisClient;
