module.exports = {
    settings: {
      "vetur.useWorkspaceDependencies": true,
      "vetur.experimental.templateInterpolationService": false
    },
    projects: [
      './frontend',
      {
        root: './frontend',
        package: './frontend/package.json',
        tsconfig: './frontend/tsconfig.node.json',
      }
    ],
  };
