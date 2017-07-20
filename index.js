/**
 * Created by root on 17-7-19.
 */
const inputArrModule=require('../readline-sync');
const guessNumberObj={
    baseArr:()=>{
        let baseArr=[];
        let temp=[];
        let k=0;
        while(baseArr.length<4){
            temp[k]=Math.ceil(Math.random()*9);
            if(baseArr.indexOf(temp[k])===-1){
                 baseArr.push(temp[k++]);
            }
        }
        return baseArr;
    },
    getInputStr:()=>{
        const inputStr=inputArrModule.question('please entry for different numbers:');
        return inputStr;
    }

}
function game() {
    let baseArr=guessNumberObj.baseArr();
    let number=guessNumberObj.getInputStr();
    baseArr=baseArr.split('');
    let getArr = number.split('');
    let count_A = 0, count_B = 0;
    let baseObj = baseArr.reduce(function (accumulator, currentValue, currentIndex) {
        accumulator.push({value: currentValue, tag: currentIndex});
        return accumulator;
    }, []);
    let getObj = getArr.reduce(function (accumulator, currentValue, currentIndex) {
        accumulator.push({value: currentValue, tag: currentIndex});
        return accumulator;
    }, []);
    for (let i = 0; i < baseArr.length; i++) {
        for (let j = 0; j < getArr.length; j++) {
            if (getObj[j].value === baseObj[i].value && getObj[j].tag === baseObj[i].tag) {
                count_A++;
            } else if (getObj[j].value === baseObj[i].value) {
                count_B++;
            }
        }
    }
    return count_A + 'A' + count_B + 'B';
}
module.exports.guessNumberObj=guessNumberObj;
module.exports.game=game;

