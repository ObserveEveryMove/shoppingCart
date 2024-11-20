export const getNum = (str) =>{
    if(!Number(str)){
        let money = str.match(/(?<!\d)(?<!\d\.)(?:\d{1,3}(?:,\d{3})*|\d+)(?:\.\d{1,2})?(?!\.?\d)/)
        return Number(money[0])
    }
    return Number(str)
}