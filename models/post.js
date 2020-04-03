const db = require('./conn.js');

class Posts{
    constructor(id, title, author, content) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.content = content;
    }

    static async getAllPost() {
        try {
            const response = await db.any(`Select u.id, u.name,  p.content  from posts p join users u on p.user_id = u.id;`)
            return response;
        } catch (error) {
            console.error("error =>", error);
            return error;
        }
    }
    static async getById(id) {
        try {
            const reponse = await db.any(`Select user_id, content  from posts where id = ${id};`)
            return response;
        } catch (error) {
            console.error("Error", error);
            return error;
        }
    }
    static async getComments(id) {
        try {
            const response = await db.any(`select u.name, p.content from posts p join users u on p.user_id = u.id where u.id = ${id};`)
            return response;
        } catch (error) {
            console.error("error", error);
            return error;
        }
    }
}



module.exports = Posts;