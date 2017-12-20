import * as Sequelize from "sequelize";
import { Application } from 'egg';

interface INews {
    id?: number;
    url?: string;
    title?: string;
    content?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

interface INewsInstance extends INews, Sequelize.Instance<INews> {
}

const schema = {
    id: { type: Sequelize.INTEGER, unique: true, autoIncrement: true, primaryKey: true, displayName: 'id' },
    url: { type: Sequelize.TEXT, allowNull: false },
    title: { type: Sequelize.TEXT, allowNull: false},
    content: { type: Sequelize.TEXT, allowNull: true },
};

const schemaOption = {

    timestamps: true
};


export default async (app: Application) => {
    let news = app.model.define<INewsInstance, INews>('News', schema, schemaOption);
    app.logger.info(`model news loaded`)
    return news;
}
