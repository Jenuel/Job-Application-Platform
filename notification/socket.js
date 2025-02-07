import { Server } from "socket.io";

export const setupSocket = (server, pool) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST", "PATCH"],
    },
  });

  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    socket.on("send-notification", async (data) => {
      const { userId, message, type } = data; 

      try {
        const [result] = await pool.query(
          "INSERT INTO notifications (userID, message, type, is_read, created_at) VALUES (?, ?, ?, ?, NOW())",
          [userId, message, type, false]
        );

        const savedNotification = {
          id: result.insertId,
          userId,
          message,
          type,
          is_read: false,
          created_at: new Date(),
        };

        io.emit(userId).emit("new-notification", savedNotification);
      } catch (err) {
        console.error("Error saving notification:", err);
      }
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected:", socket.id);
    });
  });

  return io;
};
