# TASK RUNNERS. NPM packages and NODE scripts

![Image of npm](https://github.com/beatrizsmerino/task-runners/blob/feature/task-runners-npm/doc/assets/task-runners-npm/task-runners-npm.svg)

## USE

**Commands list**

### Test

```
npm run test
```

### Compress images

**Minify size images with extension: jpg/jpeg, svg, png, gif**

Use:

```
npm run static:img:compressed
```

NPM Dependencies:

| Name            | Badge                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| chalk           | [![npm version](https://badge.fury.io/js/chalk.svg)](https://badge.fury.io/js/chalk)                     |
| compress-images | [![npm version](https://badge.fury.io/js/compress-images.svg)](https://badge.fury.io/js/compress-images) |
| pngquant-bin    | [![npm version](https://badge.fury.io/js/pngquant-bin.svg)](https://badge.fury.io/js/pngquant-bin)       |
| gifsicle        | [![npm version](https://badge.fury.io/js/gifsicle.svg)](https://badge.fury.io/js/gifsicle)               |

Node script:

-   [compress-images.js](https://github.com/beatrizsmerino/task-runners/blob/feature/task-runners-npm/task-runners-npm/static/bin/compress-images.js)

## BIBLIOGRAFY

-   [https://docs.npmjs.com/misc/scripts](https://docs.npmjs.com/misc/scripts)
-   [https://github.com/semiromid/compress-images/](https://github.com/semiromid/compress-images/)
