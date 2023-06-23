/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: { newNextLinkBehavior: true },

	compiler: {
		styledComponents: true,
	},
}

module.exports = nextConfig
