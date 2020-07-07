/*
* 随机数据生成器
*/

const getRandomStr = (n) => {
    let randStrs = '';
    for (let i = 0; i < n; i++) {
        let randStr = String.fromCharCode(64 + Math.ceil(Math.random() * 26));
        randStrs += randStr;
    }

    return randStrs;
}

/**
 * 生成小于等于n位的数字 
 */
const getRandomNum = (n) => {
    let randNums = '';
    for (let i = 0; i < n; i++) {
        let randNum = Math.floor(Math.random() * 10);
        if(randNum!==0){
            randNums += '' + randNum;
        }   
    }
    return Number(randNums);
}

/**
 * mock数据生成器
 * @param {*} opts 
 */
const getData = (opts) => {
    const { cols, nums } = opts;
    const data = [];

    for (let i = 0; i < nums; i++) {
        const row = {};
        cols.forEach((x, j) => {
            row.id = i + 1;
            switch (x.propType) {
                case 'Number':
                    row[x.colIndex] = getRandomNum(3);
                    break;
                case 'String':
                    row[x.colIndex] = getRandomStr(6);
                    break;
                default:
                    row[x.colIndex] = 'undefined PropType.';
                    break;
            }

        })

        data.push(row);
    }

    return data;
}

 
