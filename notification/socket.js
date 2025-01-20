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
      const { userId, message, type } = data; //FIXME: Ensure data is consistent with the expected format

      try {
        const [result] = await pool.query(
          
        );

        const savedNotification = {
            //TBD
        };

        io.emit("new-notification", savedNotification);
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
