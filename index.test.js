'use strict'

const { test } = require('ava')
const path = require('path')
const sharp = require('sharp')
const tempy = require('tempy')

const extractFrame = require('.')

const fixturesPath = path.join(__dirname, `media`)
const input = path.join(fixturesPath, '1.mp4')

test('jpg', async (t) => {
  const output = tempy.file({ extension: 'jpg' })
  await extractFrame({
    log: console.log,
    input,
    output,
    offset: 1000
  })

  const image = await sharp(output).metadata()
  t.deepEqual(image.width, 640)
  t.deepEqual(image.height, 360)
  t.deepEqual(image.channels, 3)
  t.deepEqual(image.format, 'jpeg')
})

test('png', async (t) => {
  const output = tempy.file({ extension: 'png' })
  await extractFrame({
    log: console.log,
    input,
    output,
    offset: 3500
  })

  const image = await sharp(output).metadata()
  t.deepEqual(image.width, 640)
  t.deepEqual(image.height, 360)
  t.deepEqual(image.channels, 3)
  t.deepEqual(image.format, 'png')
})

test('noaccurate_seek', async (t) => {
  const output = tempy.file({extension: 'jpg'})
  await extractFrame({
    log: console.log,
    input,
    output,
    offset: 1000,
    noaccurate: true
  })

  const image = await sharp(output).metadata()
  t.deepEqual(image.width, 640)
  t.deepEqual(image.height, 360)
  t.deepEqual(image.channels, 3)
  t.deepEqual(image.format, 'jpeg')
})
