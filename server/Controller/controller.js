// Controller/controller.js

const Chat = require("../Model/taskSchema.js");

const getController = async (req, res) => {
  try {
    const data = await Chat.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const postController = async (req, res) => {
  try {
    const { message } = req.body;

    let responseType = "";
    let responseData = null;

    const text = message.toLowerCase();

    if (text.includes("table")) {
      responseType = "table";
      responseData = [
        { id: 1, name: "Tarun" },
        { id: 2, name: "Sai" },
      ];
    } else if (text.includes("chart")) {
      responseType = "chart";
      responseData = [
        { month: "Jan", sales: 100 },
        { month: "Feb", sales: 150 },
      ];
    } else if (text.includes("grid")) {
      responseType = "grid";
      responseData = [
        { title: "Card 1" },
        { title: "Card 2" },
      ];
    } else if (
      text.includes("box") ||
      text.includes("summary")
    ) {
      responseType = "box";
      responseData = {
        title: "Summary",
        description: "This is summary data",
      };
    } else {
      responseType = "text";
      responseData = {
        message: "No matching response",
      };
    }

    const saveData = await Chat.create({
      message,
      responseType,
      responseData,
    });

    res.status(201).json({
      success: true,
      data: saveData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getController,
  postController,
};