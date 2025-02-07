import Notification from "../models/Notification";
const getNotifications = async (request, response) => {

    try {
        const notification = await Notification.find()
        response.status(200).json(notification)
    } catch (error) {
        response.status(500).send({ message: 'Error fetching notification', error: error.message })
    }
};


const updateNotification = async (request, response) => {
    const { id } = request.params;
    try {

        const result = await Notification.findOneAndUpdate(
            { _id: id },  
            { $set: { isRead: true } },  
            { new: true }  
        );
        console.log("Result:", result)
        if (result) {
            return response.status(200).send(result);
        } else {
            return response.sendStatus(404);  
        }
    } catch (error) {
        return response.status(400).json({ message: "Error updating notification", error: error.message });
    }
};


export { getNotifications, updateNotification };