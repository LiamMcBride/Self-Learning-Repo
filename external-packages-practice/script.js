// import MicroModal from 'micromodal';
// // var MicroModal = require('micromodal');

// MicroModal.init()
// // MicroModal.close('modal-1');
// console.log("hi")

const dayjs = require('dayjs')

function getTime(){
    // hour = dayjs().hour()
    // minute = dayjs().minute()
    // second = dayjs().second()

    console.log(dayjs().format())
}

getTime()