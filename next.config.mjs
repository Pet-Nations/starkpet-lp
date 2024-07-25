/** @type {import('next').NextConfig} */
import path from "path";
import createRouterRewrite from "./src/app/router/rewrites.js";
import createRouterRedirect from "./src/app/router/redirects.js";
const nextConfig = {
  output: "standalone",
  sassOptions: {
    includePaths: [path.join(process.cwd(), "src/app/assets/styles/scss")],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value:
              "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return createRouterRewrite();
  },
  async redirects() {
    return createRouterRedirect();
  },
};

export default nextConfig;
