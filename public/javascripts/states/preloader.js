ArchWorld.Preloader = function (game) {

};

ArchWorld.Preloader.prototype = {

	init: function () {
		this.preloadBar = null;
		this.ready = false;
        this.assetHelper = new AssetHelper(this);
	},

	preload: function () {

		//	These are the assets we loaded in Boot.js				
		this.preloadBar = this.add.sprite(this.game.width / 2, this.game.height / 2, 'preloaderBar');		
		this.preloadBar.anchor.setTo(0.5);

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files in assetHelper.load() method are loaded in.

		this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.				
        this.assetHelper.load();

	},

	create: function () {


		this.state.start('MainMenu');


	},
	update: function () {
        
	}

};