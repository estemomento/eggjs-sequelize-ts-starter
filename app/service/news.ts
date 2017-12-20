import { Service, Context } from 'egg';

export default class News extends Service {
    constructor(ctx: Context) {
        super(ctx);
    }

    async list(lastId: number) {
        let result;
        if (lastId < 0) {
            result = await this.app.model.News.findAll({
                limit: 20,
                order: [["id", "desc"]],
            })
        } else {
            result = await this.app.model.News.findAll({
                where: {
                    id: {
                        $lt: lastId
                    },
                },
                limit: 20,
                order: [["id", "desc"]],                
            })
        }
        this.app.logger.info(`result length ${result.length}`)
        if (result.length > 0) {
            let lastId = result[result.length - 1].id;
            return {
                data: result,
                links: {
                    next: `/api/news?last_id=${lastId}`
                }
            };
        } else {
            return {
                data: [],
                links: {
                }
            };
        }
    }

}