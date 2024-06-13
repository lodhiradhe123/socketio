const io = require( "socket.io" )();
const socketapi = {
    io: io
};

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    console.log( "A user connected" );
    io.emit('max','hello msg from server');
    
    // browser se vs code me data .
    socket.on('sony', (msg)=>{
        console.log(msg);
        io.emit("max",msg)
    })

});

// end of socket.io logic
module.exports = socketapi;




// io=> server
// socket => single user or client
// on => recieve
// emit=> send krna  