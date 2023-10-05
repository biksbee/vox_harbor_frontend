import moment from "moment";

interface IReaction {
    id: number,
    channel_id: number,
    post_date: string,
    point_date: string,
    keys: string[],
    values: number[],
    bot_index: number,
    shard: number
}

interface IReactionPoint {
    x: number,
    y: number
}

export const generatePoints = (res: IReaction[]) => {
    const header = res.at(-1)?.keys;
    const result = new Map<string, IReactionPoint[]>();
    header?.forEach((key) => {
        result.set(key, []);
    })

    res.forEach((el) => {
        let keysIndexes = new Map<string, number>;
        el.keys.forEach((key, index) => {
            keysIndexes.set(key, index);
        })

        header?.forEach((key) => {
            let value: number;
            if (keysIndexes.has(key))
                value = el.values[keysIndexes.get(key)!];
            else
                value = 0;

            result.get(key)!.push(
                {
                    x: moment(el.point_date).valueOf(),
                    y: value
                }
            );
        })

    })

    return result;
}

