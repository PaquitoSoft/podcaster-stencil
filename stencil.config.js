exports.config = {
  bundles: [
    { components: [
		'my-name',
		'podcaster-app',
		'app-header',
		'podcast-summary',
		'home-view',
		'podcast-view'
	] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
