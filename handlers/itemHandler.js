const Item = require("../schemas/itemSchema");

exports.addNewItem = async (req, res) => {

    try {

        const savedItem = await Item.create(req.body);

        res.status(201).json({
            success: true,
            data: savedItem
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.showAllItems = async (req, res) => {

    try {

        const itemList = await Item.find();

        res.status(200).json(itemList);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

exports.modifyItem = async (req, res) => {

    try {

        const updatedData = await Item.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        );

        res.status(200).json(updatedData);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

exports.removeItem = async (req, res) => {

    try {

        await Item.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Item Successfully Deleted"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};