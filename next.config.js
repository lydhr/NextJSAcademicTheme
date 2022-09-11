const withOffline = require('next-offline');

const nextConfig = {
	poweredByHeader: false,
	swcMinify: true,
};

module.exports = withOffline(nextConfig);

