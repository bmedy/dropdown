exports.config = {
  namespace: 'wtech',
  generateDistribution: true,
  bundles: [
    { components: ['w-dropdown'] }
  ],
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
