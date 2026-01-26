import createMDX from "@next/mdx";

/** @type {import("next").NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
};

const withMDX = createMDX({
  extension: /\.mdx$/,
  options: {
    providerImportSource: undefined,
  },
});

export default withMDX(nextConfig);
