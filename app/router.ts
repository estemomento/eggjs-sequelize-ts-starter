import { Application } from 'egg';

export default (app: Application) => {
    const controller = app.controller;
    app.redirect('/', '/api/news');
    app.get('/api/news', controller.news.list);
};