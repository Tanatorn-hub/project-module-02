//แบบ esmodule
const data1 = 555

function showWow(){
    console.log('Wow Wow Wow');
}

const sayHi = (nickname) => {
    console.log(`สวัสดี ${nickname}`);
}

export default {data1, showWow, sayHi}