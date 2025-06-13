const axios = require("axios");
const Post = require("../modules/model"); // ✅ Correct import now

const fechandstoreData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;

    await Post.bulkCreate(posts); // ✅ Works now
    console.log("Posts fetched and stored successfully");
  } catch (err) {
    console.error("Error storing posts:", err.message);
  }
};

const getPosts = async (req, res) => {
  const { page = 1, limit = 10, sort = "id", order = "asc" } = req.query;
  const offset = (page - 1) * limit;

  try {
    const posts = await Post.findAndCountAll({
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [[sort, order]]
    });

    res.json({
      total: posts.count,
      page: parseInt(page),
      totalPages: Math.ceil(posts.count / limit),
      data: posts.rows
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts", details: err.message });
  }
};

module.exports = { fechandstoreData, getPosts };
