/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  publicPath: '/build/',
  serverBuildPath: 'functions/[[path]].js',
  server: './server.js',
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  serverConditions: ['worker'],
  ignoredRouteFiles: ['**/.*'],
  serverDependenciesToBundle: 'all',
  devServerBroadcastDelay: 1000,
  serverMainFields: ['browser', 'module', 'main'],
  serverMinify: true,
  serverModuleFormat: 'esm',
  serverPlatform: 'neutral',
  future: {
    v2_meta: true,
    unstable_cssModules: true,
  },
};
