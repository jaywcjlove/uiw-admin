import path from 'path';
import { OptionConf } from 'kkt';
import webpack from 'webpack';

type Webpack = typeof webpack;

export const loaderOneOf = [require.resolve('@kkt/loader-less')];

export const moduleScopePluginOpts = [path.resolve(process.cwd(), 'README.md')];

export default (
  conf: webpack.Configuration,
  opts: OptionConf,
  webpack: Webpack,
) => {
  const pkg = require(path.resolve(process.cwd(), 'package.json'));

  conf.resolve!.alias = {
    // 当前开发模式需要
    // https://github.com/marmelab/react-admin/issues/3078#issuecomment-579128213
    // react: path.resolve('./node_modules/react'),
    // "react-router": path.resolve("./node_modules/react-router"),
    // "react-router-dom": path.resolve("./node_modules/react-router-dom"),
    '@/': path.resolve(__dirname, 'src'),
  };

  // Get the project version.
  conf.plugins!.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    }),
  );

  return conf;
};

/**
 * mocker-api that creates mocks for REST APIs.
 * It will be helpful when you try to test your application without the actual REST API server.
 * https://github.com/jaywcjlove/mocker-api
 */
export const mocker = {
  path: path.resolve('./mocker/index.js'),
  /**
   * https://github.com/jaywcjlove/mocker-api/tree/96c2eb94694571e0e3003e6ad9ce1c809499f577#options
   */
  option: {},
};
