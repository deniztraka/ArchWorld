'use strict';
const GameWorld = require('./World');

class GameEngine {
    constructor(options) {

        // if no GameWorld is specified, use the default one
        this.options = Object.assign({
            // traceLevel: Trace.TRACE_NONE
        }, options);    
    }

    start(){        
        this.initWorld();
        console.log("game engine is started");
    }

    step(){
        //console.log("game engine step");
    }

    initWorld() {
        this.world = new GameWorld(); 
        console.log("world initialized");                   
    }

}

module.exports = GameEngine;