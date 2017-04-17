//	100% of the browser window - see Boot.js for additional configuration
var game = new Phaser.Game(640, 480, Phaser.AUTO, 'game');
game.global = {
    //Global Vars 
}

//	Add the States your game has.
//	You don't have to do this in the html, it could be done in your Boot state too, but for simplicity I'll keep it here.
game.state.add('Boot', ArchWorld.Boot);
game.state.add('Preloader', ArchWorld.Preloader);
game.state.add('MainMenu', ArchWorld.MainMenu);    
// game.state.add('CharacterCustomization', ArchWorld.CharacterCustomization);
game.state.add('GamePlay', ArchWorld.GamePlay);


window.onload = function() {
	//	Now start the Boot state.
	game.state.start('Boot');
};