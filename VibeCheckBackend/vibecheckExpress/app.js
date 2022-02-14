//Add application requirements
//Initialize Express app
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

//Define constants
const PORT = 3001;

//Attach required middleware
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("views", "views");

//Set up server
const httpServer = require("http");
const socketio = require("socket.io");
const server = httpServer.createServer(app);
const io = socketio(httpServer, {wsEngine: "ws"});

//Create a connection handler to deal with users interacting with the chat rooms
io.on("connection", (socket) => {
  
  //Listen for a join event to add users to a given room
  socket.on("join", (data) => {
    const { name, room } = data;
    const { user, error } = addUser({ id: socket.id, name, room });

    if (error) {
      return;
    }

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome!`
    });

    socket.broadcast.to(user.room).emit("message", {
      user:"admin",
      text: `${user.name} has just entered the room`
    });

    socket.join(user.room);

    io.to(user.room).emit("room-data", {
      room: user.room, 
      users: getAllUsers(user.room),
    })
  });

  //Listen for a leave event when user leaves chat room
  socket.on("leave", () => {
    const user = removeUser(socket.id);

    user && io.to(user.room).emit("message", {
      user: "admin",
      text: `${user.name} has just left the chat`
    });
  });
});

app.get("/", (req, res) => {
    res.send("lolol");
})

server.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`)  ;
});