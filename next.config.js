module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['child_process'] = 'node:child_process';
      config.resolve.alias['fs'] = 'node:fs';
      config.resolve.alias['crypto'] = 'node:crypto';
      // Add more aliases as needed
    }
    return config;
  },
};
