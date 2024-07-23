// app controller

class AppController {
    static getHomePage(request, response) {
        response.status(200);
        res.send('Hello Holberton School!');
    }
};

module.exports = AppController;
