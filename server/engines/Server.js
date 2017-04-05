'use strict';

const GameEngine = require('./game');
const Scheduler = require('../libs/Schedular');

class Server {
    constructor(io, gameEngine, options) {
        this.options = Object.assign({
            updateRate: 6,
            stepRate: 60,
            timeoutInterval: 180,
            updateOnObjectCreation: true,
            tracesPath: '',
            debug: {
                serverSendLag: false
            }
        }, options);
        if (this.options.tracesPath !== '') {
            this.options.tracesPath += '/';
            require('mkdirp').sync(this.options.tracesPath);
        }

        this.gameEngine = new GameEngine();

        this.io = io;

        // this.serializer = new Serializer();
                
        // this.gameEngine.registerClasses(this.serializer);
        // this.networkTransmitter = new NetworkTransmitter(this.serializer);

        // this.networkMonitor = new NetworkMonitor();

        this.connectedPlayers = {};
        this.playerInputQueues = {};
        //this.pendingAtomicEvents = [];
        this.objMemory = {};
        this.requestImmediateUpdate = false;

        io.on('connection', this.onPlayerConnected.bind(this));
        // this.gameEngine.on('objectAdded', this.onObjectAdded.bind(this));
        // this.gameEngine.on('objectDestroyed', this.onObjectDestroyed.bind(this));

        return this;
    }

    start(){
        let self = this;

        let schedulerConfig = {
            tick: this.step.bind(this),
            period: 1000 / this.options.stepRate,
            delay: 4
        };
        this.scheduler = new Scheduler(schedulerConfig).start();

        console.log("server is started");
        this.gameEngine.start();        
    }

    step(){
        //console.log("server step");
        this.gameEngine.step();
    }

    onPlayerConnected(){
        console.log("player connected to server.");        
    }
}

module.exports = Server;


