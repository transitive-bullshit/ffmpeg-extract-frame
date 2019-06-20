'use strict'

const ffmpeg = require('fluent-ffmpeg')
const noop = () => { }

module.exports = (opts) => {
  const {
    log = noop,
    quality = 2,
    offset = 0,
    input,
    output,
    noaccurate = false
  } = opts

  return new Promise((resolve, reject) => {
    const cmd = ffmpeg(input)

    const inputOptions = []
    if (noaccurate) {
      inputOptions.push('-ss', offset / 1000)
    } else {
      cmd.seek(offset / 1000)
    }

    if (noaccurate) {
      inputOptions.push('-noaccurate_seek')
    }

    const outputOptions = [
      '-vframes', 1,
      '-q:v', quality
    ]

    cmd
      .inputOptions(inputOptions)
      .outputOptions(outputOptions)
      .output(output)
      .on('start', (cmd) => log && log({cmd}))
      .on('end', () => resolve())
      .on('error', (err) => reject(err))
      .run()
  })
}
