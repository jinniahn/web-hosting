/**
 * Module dependencies.
 */
var express = require('express');
var path = require('path');
var jadeStatic = require('connect-jade-static');
var connectAssets = require('connect-assets');

module.exports = function(options) {

    options = options || {};
    options.port = options.port || 3000;
    options.prjDir = options.projDir || '.';
    options.servePath = options.servePath || '/assets';
    
    /**
     * Create Express server.
     */
    var app = express();

    /**
     * Express configuration.
     */
    app.set('port', options.port);
    //app.use(favicon(path.join(options.prjDir, 'public/favicon.png')));

    app.use(express.static(path.join(options.prjDir, 'public')));
    app.use(express.static(path.join(options.prjDir, 'compiled')));

    app.use(connectAssets({
	build: true,
	paths: [path.join(options.prjDir, 'public/css'),
		path.join(options.prjDir, 'public/js'),	    
	       ],
	servePath: options.servePath
	// precompile: ["*.*"],
	// build: true,
	// buildDir:'compiled',
	// compile: true,
	// fingerprinting: true
    }));

    // app.use(connectAssets({
    //     paths: [path.join(__dirname, 'public/css'),
    // 	    path.join(__dirname, 'public/js')],
    //     servPath: '/assets'
    // }));
    // app.use(connectAssets({
    //     paths: [path.join(__dirname, 'public/js')],
    //     servePath: '/js'
    // }));

    app.use(jadeStatic({
	baseDir: path.join(options.prjDir, '/public'),
	baseUrl: '/',
	maxAge: 0,
	jade: { pretty: true }
    }));
    
    return app;
};
