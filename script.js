// let msg2 = 'hello'

// let stringMsg = ((msg) => {

//     setTimeout(() => {
//         console.log(msg2)
//     }, 1000)

//     console.log(msg)

// })

// stringMsg('hola')
// ----------------------------------------------------------------
// let word1 = 'first word'
// let word2 = 'second word'
// let word3 = 'third word'
// let word4 = 'fourth word'

// let getWords = (() => {

//     console.log(word1)

//     setTimeout(() => {
//         console.log(word4)
//     }, 3000)

//     setTimeout(() => {
//         console.log(word3)
//     }, 2000)

//     setTimeout(() => {
//         console.log(word2)
//     }, 1000)
// })
// getWords()
// -----------------------------------------------------------

// let done = (() => {
//     console.log('Jobs Done!')
// })

// let countDown = ((num, callback) => {

//     setTimeout(() => {
//         if (num > 0) {
//             console.log(num)
//             countDown(num - 1, callback)
//         } else {
//             callback();
//         }
//     }, 1000)


// })

// countDown(4, done)
// you dont include the () on the done function because it will immediately call the function. Instead without the (), it will do the countdown then invoke the done function.
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let lunchTime = true;         // toggle b/t true and false

const orderMeSomeFood = (() => {
    return new Promise((resolve, reject) => {
        if (lunchTime === true) {
            let myLunch = {
                lunch: 'Stroganoff',
                beverage: 'Tea'
            }
            resolve(myLunch)
        } else {
            let err = new Error('You done messed up!')
            reject(err)
        }
    })
})

orderMeSomeFood()
    .then((results) => {
        return console.log(results)
    })
    .catch((err) => {
        return console.log(err)
    })
