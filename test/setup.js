/*
 * Stop Mocha from trying to load stylesheets
 */
require.extensions['.scss'] = () => null;
