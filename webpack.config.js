var path = require('path');
var SvgStore = require('webpack-svgstore-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/a.js']
    },

    output: {
        path: path.join(__dirname,'./build/public/'),
        filename: 'app.[hash].js',
        publicPath: '/',
        sourcePrefix: '  '
    },

    plugins: [
        new ExtractTextPlugin('styles.css'),
        new SvgStore(
            './icons/**/*.svg',
            './',
            {
                name: 'iconsSprite.svg',
                prefix: 'icon--',
                svgoOptions: {}
            }
        )
    ],

    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('css')
        }]
    }
}
