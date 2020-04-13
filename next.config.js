module.exports = {
  webpack (config) {
    config.module.rules.push({
      test: /\.md$/i,
      use: [
        {
          loader: 'raw-loader',
          options: {
            esModule: false,
          },
        },
      ],
    })
    return config
  }
}
