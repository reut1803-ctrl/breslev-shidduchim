/** @type {import('next').NextConfig} */

// כשהבנייה היא ל-GitHub Pages (משתנה הסביבה GITHUB_PAGES=true),
// מפיקים אתר סטטי תחת הנתיב /breslev-shidduchim.
const isPages = process.env.GITHUB_PAGES === "true";
const BASE_PATH = "/breslev-shidduchim";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isPages ? BASE_PATH : "",
  assetPrefix: isPages ? BASE_PATH + "/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isPages ? BASE_PATH : "",
  },
};

export default nextConfig;
