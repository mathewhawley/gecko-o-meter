/*
 * Allow the use of Fetch API in node in Mocha tests (mount)
 */
import 'isomorphic-fetch';

/*
 * Stop Mocha from trying to load stylesheets
 */
require.extensions['.scss'] = () => null;

/*
 * Set up browser objects for use with Enzyme's 'mount'
 * https://github.com/airbnb/enzyme/blob/master/withDom.js
 */
if (!global.document) {
  try {
    const jsdom = require('jsdom').jsdom; // could throw

    global.document = jsdom('');
    global.window = document.defaultView;
    Object.keys(document.defaultView).forEach((property) => {
      if (typeof global[property] === 'undefined') {
        global[property] = document.defaultView[property];
      }
    });

    global.navigator = {
      userAgent: 'node.js',
    };
  } catch (e) {
    // jsdom is not supported...
  }
}
