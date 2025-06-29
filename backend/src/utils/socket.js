let io;

exports.initSocket = (server) => {
  io = require('socket.io')(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  });

  io.on('connection', (socket) => {
    socket.on('join', (userId) => {
      socket.join(userId);
    });

    socket.on('disconnect', () => {
    });
  });
};

exports.emitTaskUpdate = (userId, data) => {
  if (io) {
    io.to(userId).emit('taskUpdate', data);
  }
};
