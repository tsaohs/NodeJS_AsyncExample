const step0 = 'step 0 - start'
const step1 = 'step 1 - run'
const step2 = 'step 2 - run'
const stepDone = 'step Done'

const start = (callback) => {
  setTimeout(() => {
    console.log(step0)
    //callback = stepEvent1()
    callback(stepEvent2)
  }, 5000)
}
const stepEvent1 = (callback) => {
  setTimeout(() => {
    //callback = stepEvent2()
    console.log(step1)
    callback(stepEventDone)
  }, 0)
}
const stepEvent2 = (callback) => {
  setTimeout(() => {
    //callback = stepEventDone()
    console.log(step2)
    callback()
  }, 0)
}
const stepEventDone = () => {
    console.log(stepDone)
}

start(stepEvent1)