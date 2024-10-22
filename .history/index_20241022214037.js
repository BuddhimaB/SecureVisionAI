require("dotenv").config();
const { Client } = require("pg"); // Import the pg module for PostgreSQL
const app = require("./app");

const http = require("http").Server(app);
const io = require("socket.io")(http);

const sockets = require("./sockets");
const cctvService = require("./src/services/cctvService");

// Set up PostgreSQL connection
const client = new Client({
  connectionString: process.env.DATABASE_URL, 
});

// Connect to the database
client.connect()
  .then(() => {
    console.log("Connected to PostgreSQL database successfully!");
  })
  .catch(err => {
    console.error("Failed to connect to PostgreSQL database:", err);
  });
http.listen(process.env.PORT, () => {
  console.log("Server started sucessfully!");
  console.log(`Listening on port ${process.env.PORT}`);
});

io.use(async (socket, next) => {
  const id = socket.handshake.auth.systemId;
  try {
    const existence = await cctvService.getCCTVSystem(id);
    if (!existence) {
      return next(new Error("invalid system Id"));
    }
  } catch (error) {
    next(new Error("Error in connecting"));
  }
  next();
});

// Socket connection
io.on("connection", function (socket) {
  // Validation of the systemId is required
  sockets.push({
    socket: socket,
    systemId: socket.handshake.auth.systemId,
  });

  // Whenever someone disconnects this piece of code executed
  socket.on("disconnect", function () {
    const disconnetId = socket.id;
    const index = sockets.findIndex((item) => item.socket.id === disconnetId);
    sockets.splice(index, 1);
  });
});
