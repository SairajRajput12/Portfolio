const { transform } = require('@svgr/core');
const { readFileSync, writeFileSync } = require('fs');
const svgoConfig = {
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
};

const svg = readFileSync('src/components/Home/Hanimation.svg', 'utf-8');
transform(svg, { svgoConfig, icon: true }, { componentName: 'Hanimation' })
  .then(jsCode => {
    writeFileSync('output/Hanimation.js', jsCode);
  })
  .catch(err => {
    console.error('Error converting SVG:', err);
  });
