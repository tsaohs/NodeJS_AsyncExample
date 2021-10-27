const step0 = 'step 0 - start'
const step1 = 'step 1 - run'
const step2 = 'step 2 - run'
const stepDone = 'step Done'

// @TODO:請修改以下函式
const start = (callback) => {
  setTimeout(() => {
    console.log(step0)
    let event = callback()
    event()
  }, 500)
}

// @TODO:請修改以下函式
const stepEvent1 = () => {
  return () => {
    console.log(step1)
    let event = stepEvent2()
    event()
  }
}

// @TODO:請修改以下函式
const stepEvent2 = () => {
  return () => {
    setTimeout(() => {
      console.log(step2)
      stepEventDone()
    }, 500)
  }
}

const stepEventDone = () => {
  return console.log(stepDone)
}

start(stepEvent1)
