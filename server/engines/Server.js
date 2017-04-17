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

        this.connectedPlayers = {};
        this.playerInputQueues = {};
        //this.pendingAtomicEvents = [];
        this.objMemory = {};
        this.requestImmediateUpdate = false;

        io.on('connection', this.onPlayerConnected.bind(this));

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

    onPlayerConnected(socket){
        console.log(socket.handshake.query["playerName"] + " has connected to server"); 
        //Todo
        //send 'createLocalPlayer' command to this socket
        //send current server state to this socket
        //send others players info for its vicinity
    }
}

module.exports = Server;


