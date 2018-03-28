'use strict'

const ffmpeg = require('fluent-ffmpeg')
const noop = () => { }

module.exports = (opts) => {
  const {
    log = noop,
    quality = 2,
    offset = 0,
    input,
    output
  } = opts

  return new Promise((resolve, reject) => {
    const cmd = ffmpeg(input)
      .seek(offset / 1000)

    const outputOptions = [
      '-vframes', 1,
      '-q:v', quality
    ]

    cmd
      .outputOptions(outputOptions)
      .output(output)
      .on('start', (cmd) => log && log({ cmd }))
      .on('end', () => resolve())
      .on('error', (err) => reject(err))
      .run()
  })
}
