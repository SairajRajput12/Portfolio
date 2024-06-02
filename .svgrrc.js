module.exports = {
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeAttrs: {
              attrs: '(id)'
            },
          },
        },
      },
    ],
  },
};
