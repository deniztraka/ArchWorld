ArchWorld.MainMenu = function (game) {
    this.nameInput = null;
};

ArchWorld.MainMenu.prototype = {

	init: function () {
		this.game.add.plugin(PhaserInput.Plugin);        
	},

	preload: function () {
		
	},

	create: function () {		
        this.nameInput = this.game.add.inputField(this.game.width / 2 - 75, 50,
        {
            font: '18px Arial',
            fill: '#212121',
            fontWeight: '500',
            backgroundColor: '#cccccc',
            placeHolderColor: '#999999',
            width: 150,
            padding: 8,
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 3,
            placeHolder: 'your name here',
            type: PhaserInput.InputType.text
        });
        this.nameInput.setText("dhezyr");

        this.input.onDown.add(this.startGame, this);

	},
	update: function () {
        
	},
    startGame: function(){
        this.state.start('GamePlay', true, false, this.nameInput.value);
    }
};