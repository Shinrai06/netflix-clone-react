const List = require("../models/List");

exports.addList = async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);
    try {
      const list = await newList.save();
      res.status(201).json(list);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed to create list!!");
  }
};

exports.deleteList = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(201).json("Successfully deleted List!!");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed to delete the list!!");
  }
};

exports.getLists = async (req, res) => {
  const { type, genre } = req.query;
  let list = [];
  try {
    if (type) {
      if (genre) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: type, genre: genre } },
        ]);
      } else {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: type } },
        ]);
      }
    } else {
      list = await List.aggregate([{ $sample: { size: 10 } }]);
    }
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
};
