let fs = require('fs')
let path = require('path')
const basePath = './'

let dirs = new Promise((resolve, reject) => {
  fs.readdir(basePath, { encoding: 'utf8', withFileTypes: true }, (err, dirs) => {
    return resolve(dirs)
  })
})

const isDir = (subPath) => {
  return new Promise((resolve, reject) => {
    fs.stat(subPath, (error, pathResult) => {
      if (pathResult.isDirectory()) {
        return resolve(subPath)
      }
      return reject(`[ERROR]: ${subPath}`)
    })
  })
};

async function start () {
  try {
    let folders = await dirs
    let fullPaths = []

    folders.map(async(dir) => {
      let subPath = path.join(basePath, dir.name || dir)
      fullPaths.push(subPath)
    })

    fullPaths.map(async (dir) => {
      try {
        let subPath = await isDir(dir.name || dir)
        fs.readdir(subPath, (error, fileName) => {
          console.log(`SUCCESS in \"${dir}\",`, fileName)
        })
      } catch (e) {
        console.warn(e)
      }
    })

  } catch (e) {
    console.warn(e)
  }
}

start()
