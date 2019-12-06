export default function() {
    const testExecutor = (resolve, reject) => {
        setTimeout(() => {
            resolve('hoge')
        }, 3000)
    }
    const testPromise = new Promise(testExecutor)
    testPromise.then(result => {
        console.log(result)
    }).finally(() => { 
        console.log('done!') 
    })
}