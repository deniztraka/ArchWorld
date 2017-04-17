ArchWorld.GamePlay = function (game) {
    this.playerName = null;
    this.socket = null;
    this.clientNetworkManager = null;
};

ArchWorld.GamePlay.prototype = {

	init: function (playerName) {
		this.playerName = playerName;
	},

	preload: function () {
		self.game.time.advancedTiming = true;
	},

	create: function () {		
        this.socket = io(window.location.origin, { query: 'playerName=' + this.playerName });
        this.clientNetworkManager = new ClientNetworkEventManager(this.socket);

	},
	update: function () {
        
	},
    startGame: function(){
        
    }
};