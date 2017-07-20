/**
 * Created by root on 17-7-19.
 */
const sinon=require('../sinon');
const guessNumberModule=require('./index.js');
const inputArrModule=require('../readline-sync');
function test0A0B() {
    const baseArr=sinon.stub(guessNumberModule.guessNumberObj,'baseArr').returns('1234');
    const input=sinon.stub(guessNumberModule.guessNumberObj,'getInputStr').returns('6789');
    const actualResult=guessNumberModule.game();
    const expectedResult='0A0B';
    console.log(actualResult===expectedResult?'text passed':'test failed');
    input.restore();
}
function test0A1B() {
    const input=sinon.stub(guessNumberModule.guessNumberObj,'getInputStr').returns('7196');
    const actualResult=guessNumberModule.game();
    const expectedResult='0A1B';
    console.log(actualResult===expectedResult?'text passed':'test failed');
    input.restore();
}
test0A0B();
test0A1B();
function test0A2B() {
    const input=sinon.stub(guessNumberModule.guessNumberObj,'getInputStr').returns('2198');
    const actualResult=guessNumberModule.game();
    const expectedResult='0A2B';
    console.log(actualResult===expectedResult?'text passed':'test failed');
    input.restore();
}
test0A2B();
function test0A3B() {
    const input=sinon.stub(guessNumberModule.guessNumberObj,'getInputStr').returns('3127');
    const actualResult=guessNumberModule.game();
    const expectedResult='0A3B';
    console.log(actualResult===expectedResult?'text passed':'test failed');
    input.restore();
}
test0A3B();
function test0A4B() {
    const input=sinon.stub(guessNumberModule.guessNumberObj,'getInputStr').returns('4321');
    const actualResult=guessNumberModule.game();
    const expectedResult='0A4B';
    console.log(actualResult===expectedResult?'text passed':'test failed');
    input.restore();
}
test0A4B();
function test1A0B() {
    const input=sinon.stub(guessNumberModule.guessNumberObj,'getInputStr').returns('1789');
    const actualResult=guessNumberModule.game();
    const expectedResult='1A0B';
    console.log(actualResult===expectedResult?'text passed':'test failed');
    input.restore();
}
test1A0B();
function test1A1B() {
    const input=sinon.stub(guessNumberModule.guessNumberObj,'getInputStr').returns('1027');
    const actualResult=guessNumberModule.game();
    const expectedResult='1A1B';
    console.log(actualResult===expectedResult?'text passed':'test failed');
    input.restore();
}
test1A1B();
function test1A2B() {
    const input=sinon.stub(guessNumberModule.guessNumberObj,'getInputStr').returns('1473');
    const actualResult=guessNumberModule.game();
    const expectedResult='1A2B';
    console.log(actualResult===expectedResult?'text passed':'test failed');
    input.restore();
}
test1A2B();
function test1A3B() {
    const input=sinon.stub(guessNumberModule.guessNumberObj,'getInputStr').returns('1423');
    const actualResult=guessNumberModule.game();
    const expectedResult='1A3B';
    console.log(actualResult===expectedResult?'text passed':'test failed');
    input.restore();
}
test1A3B();
function test2A0B() {
    const input=sinon.stub(guessNumberModule.guessNumberObj,'getInputStr').returns('1297');
    const actualResult=guessNumberModule.game();
    const expectedResult='2A0B';
    console.log(actualResult===expectedResult?'text passed':'test failed');
    input.restore();
}
test2A0B();
function test2A1B() {
    const input=sinon.stub(guessNumberModule.guessNumberObj,'getInputStr').returns('1247');
    const actualResult=guessNumberModule.game();
    const expectedResult='2A1B';
    console.log(actualResult===expectedResult?'text passed':'test failed');
    input.restore();
}
test2A1B();
function test2A2B() {
    const input=sinon.stub(guessNumberModule.guessNumberObj,'getInputStr').returns('1243');
    const actualResult=guessNumberModule.game();
    const expectedResult='2A2B';
    console.log(actualResult===expectedResult?'text passed':'test failed');
    input.restore();
}
test2A2B();
function test3A0B() {
    const input=sinon.stub(guessNumberModule.guessNumberObj,'getInputStr').returns('1237');
    const actualResult=guessNumberModule.game();
    const expectedResult='3A0B';
    console.log(actualResult===expectedResult?'text passed':'test failed');
    input.restore();
}
test3A0B();
function test4A0B() {
    const input=sinon.stub(guessNumberModule.guessNumberObj,'getInputStr').returns('1234');
    const actualResult=guessNumberModule.game();
    const expectedResult='4A0B';
    console.log(actualResult===expectedResult?'text passed':'test failed');
    input.restore();
}
test4A0B();













