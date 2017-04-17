function ClientNetworkEventManager(socket,game){
    this.socket = socket;
    this.game = game;
}

ClientNetworkEventManager.prototype.attachServerEvents = function(){
    socket.on("s_CreateLocalPlayer", function (playerData) {
            console.log("event coming from server 's_CreateLocalPlayer'");
            //GameEngine.CreateLocalPlayer(playerData);
    });

    // socket.on("s_UpdatePlayerPositionsAndRotations", function (playerPositionsAndRotationsDatas) {
    //     GameEngine.UpdatePlayerPositionsAndRotations(playerPositionsAndRotationsDatas);
    // });

    socket.on("s_CreateAlreadyLoggedInPlayers", function (playerList) {
        console.log("event coming from server 's_CreateAlreadyLoggedInPlayers'");
    });

    socket.on("s_RemovePlayer", function (playerData) {
        console.log("event coming from server 's_RemovePlayer'");
    });

    socket.on("s_CreateNewRemotePlayer", function (playerData) {
        console.log("event coming from server 's_CreateNewRemotePlayer'");
    });
};