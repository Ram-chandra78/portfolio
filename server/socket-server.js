const http = require('http');
const { Server } = require('socket.io');

const PORT = process.env.SOCKET_PORT || 3001;

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Simple in-memory message store for demo purposes
let messages = [];

io.on('connection', (socket) => {
  console.log('Socket connected:', socket.id, 'query:', socket.handshake.query);

  // Send initial messages
  socket.emit('msgs-receive-init', messages);

  // Broadcast incoming messages
  socket.on('msg-send', (msg) => {
    if (!msg) return;
    messages.push(msg);
    io.emit('msg-receive', msg);
  });

  socket.on('disconnect', (reason) => {
    console.log('Socket disconnected:', socket.id, reason);
  });
});

server.listen(PORT, () => {
  console.log(`Socket server listening on http://localhost:${PORT}`);
});
