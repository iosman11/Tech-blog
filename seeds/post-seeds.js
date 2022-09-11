const { Post } = require('../models');

const postData = [
    {
        title: 'Hello',
        body: 'This is my first post',
        user_id: 1
    }
]
    

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;