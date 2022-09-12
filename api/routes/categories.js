const router = require("express").Router();
const Category = require("../models/Category");

// CREATE CATEGORY
router.post("/", async (req, res) => {
    const newCategory = new Category(req.body);
    try {
        const savedCategory = await newCategory.save();
        res.status(200).json(savedCategory);
    } catch (error) {
        res.status(500).json(error);
    }
});

// GET ALL CATEGORIES
router.get("/", async (req, res) => {
    try {
        const allCategories = await Category.find();
        res.status(200).json(allCategories);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;