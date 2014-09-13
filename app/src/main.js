/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var TextareaSurface = require('famous/surfaces/TextareaSurface');
    var Surface = require('famous/core/Surface');

    // create the main context
    var mainContext = Engine.createContext();

    // your app here
    mainContext.setPerspective(1000);

    var logo = new Surface({
        size: [200, 200],
        content: '/content/html/landing.html',
        classes: ['backfaceVisibility']
    });

    var initialTime = Date.now();
    var centerSpinModifier = new Modifier({
        origin: [0.5, 0.5],
        transform : function() {
            return Transform.rotateY(.002 * (Date.now() - initialTime));
        }
    });

    // mainContext.add(centerSpinModifier).add(logo);
    mainContext.add(centerSpinModifier).add(logo);
});
