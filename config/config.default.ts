'use strict';

const keys = '_1503476888723_7809';

const security = {
  csrf: {
    enable: false,
  },
  domainWhiteList: ['http://localhost:8080']
};

const  sequelize = {
    dialect: 'postgres', 
    database: 'news',
    host: 'localhost',
    port: '5432',
    username: 'username',
    password: 'password'
};

export {keys,security,sequelize}