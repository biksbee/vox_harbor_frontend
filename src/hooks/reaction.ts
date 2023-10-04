
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

interface IResult {
    [key: string]: number[];
}

export const reactionArtem = (res: IReaction[]) => {

    let quan = 0;
    const result: IResult = Object.create(null)
    res.forEach((el, index) => {
        let pos = 0;
        el.keys.forEach((emoji, pos) => {
            if(!(emoji in result)){
                result[emoji] =  Array(index).fill(0)
                quan++
            }

            result[emoji].push(el.values[pos])
        })

    })
    result.length = [quan]
    console.log(result)
    return result;
}
