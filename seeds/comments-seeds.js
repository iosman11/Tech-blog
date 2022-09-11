const { Comments } = require('../models');

const commentsData = [
    {
        body: 'This is my first post',
        post_id: 1,
        user_id: 1
    }
]
    

const seedCategories = () => Comments.bulkCreate(commentsData);

module.exports = seedCategories;