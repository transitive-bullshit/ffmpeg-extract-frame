# ffmpeg-extract-frame

> Extracts a single frame from a video using [fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg).

[![NPM](https://img.shields.io/npm/v/ffmpeg-extract-frame.svg)](https://www.npmjs.com/package/ffmpeg-extract-frame) [![Build Status](https://travis-ci.com/transitive-bullshit/ffmpeg-extract-frame.svg?branch=master)](https://travis-ci.com/transitive-bullshit/ffmpeg-extract-frame) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save ffmpeg-extract-frame
# or
yarn add ffmpeg-extract-frame
```

## Usage

```js
const extractFrame = require('ffmpeg-extract-frame')

await extractFrame({
  input: 'media/1.mp4',
  output: 'test.jpg',
  offset: 1000 // seek offset in milliseconds
})
```

## API

### extractFrame(options)

Extracts a single frame from a video file. Returns a `Promise` for when the file has been written.

#### options

##### input

Type: `String`

Path or URL to a video file.

##### output

Type: `String`

Path to a `jpg` or `png` file to output.

##### offset

Type: `Number`
Default: `0`

Seek offset to take the screenshot from in milliseconds.

##### quality

Type: `Number`
Default: `2`

If exporting a jpeg image, the quality from 1-31 with 31 being the worst quality ([source](https://stackoverflow.com/questions/10225403/how-can-i-extract-a-good-quality-jpeg-image-from-an-h264-video-file-with-ffmpeg)).

##### log

Type: `Function`
Default: `noop`

Optional function to log the underlying ffmpeg command. You may, for example, use `console.log`

## Related

- [ffmpeg-extract-frames](https://github.com/transitive-bullshit/ffmpeg-extract-frames) extracts multiple frames at a time.
- [fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg)
- [awesome-ffmpeg](https://github.com/transitive-bullshit/awesome-ffmpeg) - A curated list of awesome ffmpeg resources with a focus on JavaScript.

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
