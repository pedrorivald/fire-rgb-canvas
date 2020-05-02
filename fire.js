const firePixelsArray = []
let fireWidth = 60
let fireHeight = 40

const fireColorsPalette = [{"r":7,"g":7,"b":7},{"r":31,"g":7,"b":7},{"r":47,"g":15,"b":7},{"r":71,"g":15,"b":7},{"r":87,"g":23,"b":7},{"r":103,"g":31,"b":7},{"r":119,"g":31,"b":7},{"r":143,"g":39,"b":7},{"r":159,"g":47,"b":7},{"r":175,"g":63,"b":7},{"r":191,"g":71,"b":7},{"r":199,"g":71,"b":7},{"r":223,"g":79,"b":7},{"r":223,"g":87,"b":7},{"r":223,"g":87,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":103,"b":15},{"r":207,"g":111,"b":15},{"r":207,"g":119,"b":15},{"r":207,"g":127,"b":15},{"r":207,"g":135,"b":23},{"r":199,"g":135,"b":23},{"r":199,"g":143,"b":23},{"r":199,"g":151,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":167,"b":39},{"r":191,"g":167,"b":39},{"r":191,"g":175,"b":47},{"r":183,"g":175,"b":47},{"r":183,"g":183,"b":47},{"r":183,"g":183,"b":55},{"r":207,"g":207,"b":111},{"r":223,"g":223,"b":159},{"r":239,"g":239,"b":199},{"r":255,"g":255,"b":255}]
const fireColorsPaletteBlue = [{"r": 7,"g": 7,"b": 7},{"r": 7,"g": 7,"b": 31},{"r": 7,"g": 15,"b": 47},{"r": 7,"g": 15,"b": 71},{"r": 7,"g": 23,"b": 87},{"r": 7,"g": 31,"b": 103},{"r": 7,"g": 31,"b": 119},{"r": 7,"g": 39,"b": 143},{"r": 7,"g": 47,"b": 159},{"r": 7,"g": 63,"b": 175},{"r": 7,"g": 71,"b": 191},{"r": 7,"g": 71,"b": 199},{"r": 7,"g": 79,"b": 223},{"r": 7,"g": 87,"b": 223},{"r": 7,"g": 87,"b": 223},{"r": 7,"g": 95,"b": 215},{"r": 7,"g": 95,"b": 215},{"r": 15,"g": 103,"b": 215},{"r": 15,"g": 111,"b": 207},{"r": 15,"g": 119,"b": 207},{"r": 15,"g": 127,"b": 207},{"r": 23,"g": 135,"b": 207},{"r": 23,"g": 135,"b": 199},{"r": 23,"g": 143,"b": 199},{"r": 31,"g": 151,"b": 199},{"r": 31,"g": 159,"b": 191},{"r": 31,"g": 159,"b": 191},{"r": 39,"g": 167,"b": 191},{"r": 39,"g": 167,"b": 191},{"r": 47,"g": 175,"b": 191},{"r": 47,"g": 175,"b": 183},{"r": 47,"g": 183,"b": 183},{"r": 55,"g": 183,"b": 183},{"r": 111,"g": 207,"b": 207},{"r": 159,"g": 223,"b": 223},{"r": 199,"g": 239,"b": 239},{"r": 255,"g": 255,"b": 255}]
const fireColorsPaletteRed = [{"r": 7,"g": 7,"b": 7},{"r": 31,"g": 7,"b": 7},{"r": 47,"g": 7,"b": 7},{"r": 71,"g": 7,"b": 7},{"r": 87,"g": 7,"b": 7},{"r": 103,"g": 7,"b": 7},{"r": 119,"g": 7,"b": 7},{"r": 143,"g": 7,"b": 7},{"r": 159,"g": 7,"b": 7},{"r": 175,"g": 7,"b": 7},{"r": 191,"g": 7,"b": 7},{"r": 199,"g": 7,"b": 7},{"r": 223,"g": 7,"b": 7},{"r": 223,"g": 7,"b": 7},{"r": 223,"g": 7,"b": 7},{"r": 215,"g": 7,"b": 7},{"r": 215,"g": 7,"b": 7},{"r": 215,"g": 15,"b": 15},{"r": 207,"g": 15,"b": 15},{"r": 207,"g": 15,"b": 15},{"r": 207,"g": 15,"b": 15},{"r": 207,"g": 23,"b": 23},{"r": 199,"g": 23,"b": 23},{"r": 199,"g": 23,"b": 23},{"r": 199,"g": 31,"b": 31},{"r": 191,"g": 31,"b": 31},{"r": 191,"g": 31,"b": 31},{"r": 191,"g": 39,"b": 39},{"r": 191,"g": 39,"b": 39},{"r": 191,"g": 47,"b": 47},{"r": 183,"g": 47,"b": 47},{"r": 183,"g": 47,"b": 47},{"r": 183,"g": 55,"b": 55},{"r": 207,"g": 111,"b": 111},{"r": 223,"g": 159,"b": 159},{"r": 239,"g": 199,"b": 199},{"r": 255,"g": 255,"b": 255}]
const fireColorsPaletteGreen = [{"r": 7,"g": 14,"b": 7},{"r": 7,"g": 14,"b": 7},{"r": 7,"g": 22,"b": 7},{"r": 7,"g": 22,"b": 7},{"r": 7,"g": 30,"b": 7},{"r": 7,"g": 38,"b": 7},{"r": 7,"g": 38,"b": 7},{"r": 7,"g": 46,"b": 7},{"r": 7,"g": 54,"b": 7},{"r": 7,"g": 70,"b": 7},{"r": 7,"g": 78,"b": 7},{"r": 7,"g": 78,"b": 7},{"r": 7,"g": 86,"b": 7},{"r": 7,"g": 94,"b": 7},{"r": 7,"g": 94,"b": 7},{"r": 7,"g": 102,"b": 7},{"r": 7,"g": 102,"b": 7},{"r": 15,"g": 118,"b": 15},{"r": 15,"g": 126,"b": 15},{"r": 15,"g": 134,"b": 15},{"r": 15,"g": 142,"b": 15},{"r": 23,"g": 158,"b": 23},{"r": 23,"g": 158,"b": 23},{"r": 23,"g": 166,"b": 23},{"r": 31,"g": 182,"b": 31},{"r": 31,"g": 190,"b": 31},{"r": 31,"g": 190,"b": 31},{"r": 39,"g": 206,"b": 39},{"r": 39,"g": 206,"b": 39},{"r": 47,"g": 222,"b": 47},{"r": 47,"g": 222,"b": 47},{"r": 47,"g": 230,"b": 47},{"r": 55,"g": 238,"b": 55},{"r": 111,"g": 318,"b": 111},{"r": 159,"g": 382,"b": 159},{"r": 199,"g": 438,"b": 199},{"r": 255,"g": 510,"b": 255}]
const fireColorsPaletteYellow = [{"r": 21,"g": 14,"b": 7},{"r": 45,"g": 14,"b": 7},{"r": 69,"g": 30,"b": 7},{"r": 93,"g": 30,"b": 7},{"r": 117,"g": 46,"b": 7},{"r": 141,"g": 62,"b": 7},{"r": 157,"g": 62,"b": 7},{"r": 189,"g": 78,"b": 7},{"r": 213,"g": 94,"b": 7},{"r": 245,"g": 126,"b": 7},{"r": 269,"g": 142,"b": 7},{"r": 277,"g": 142,"b": 7},{"r": 309,"g": 158,"b": 7},{"r": 317,"g": 174,"b": 7},{"r": 317,"g": 174,"b": 7},{"r": 317,"g": 190,"b": 7},{"r": 317,"g": 190,"b": 7},{"r": 333,"g": 206,"b": 15},{"r": 333,"g": 222,"b": 15},{"r": 341,"g": 238,"b": 15},{"r": 349,"g": 254,"b": 15},{"r": 365,"g": 270,"b": 23},{"r": 357,"g": 270,"b": 23},{"r": 365,"g": 286,"b": 23},{"r": 381,"g": 302,"b": 31},{"r": 381,"g": 318,"b": 31},{"r": 381,"g": 318,"b": 31},{"r": 397,"g": 334,"b": 39},{"r": 397,"g": 334,"b": 39},{"r": 413,"g": 350,"b": 47},{"r": 405,"g": 350,"b": 47},{"r": 413,"g": 366,"b": 47},{"r": 421,"g": 366,"b": 55},{"r": 525,"g": 414,"b": 111},{"r": 605,"g": 446,"b": 159},{"r": 677,"g": 478,"b": 199},{"r": 765,"g": 510,"b": 255}]
const fireColorsPaletteGreenyellow = [{"r": 14,"g": 14,"b": 7},{"r": 14,"g": 38,"b": 7},{"r": 22,"g": 54,"b": 7},{"r": 22,"g": 78,"b": 7},{"r": 30,"g": 94,"b": 7},{"r": 38,"g": 110,"b": 7},{"r": 38,"g": 126,"b": 7},{"r": 46,"g": 150,"b": 7},{"r": 54,"g": 166,"b": 7},{"r": 70,"g": 182,"b": 7},{"r": 78,"g": 198,"b": 7},{"r": 78,"g": 206,"b": 7},{"r": 86,"g": 230,"b": 7},{"r": 94,"g": 230,"b": 7},{"r": 94,"g": 230,"b": 7},{"r": 102,"g": 222,"b": 7},{"r": 102,"g": 222,"b": 7},{"r": 118,"g": 230,"b": 15},{"r": 126,"g": 222,"b": 15},{"r": 134,"g": 222,"b": 15},{"r": 142,"g": 222,"b": 15},{"r": 158,"g": 230,"b": 23},{"r": 158,"g": 222,"b": 23},{"r": 166,"g": 222,"b": 23},{"r": 182,"g": 230,"b": 31},{"r": 190,"g": 222,"b": 31},{"r": 190,"g": 222,"b": 31},{"r": 206,"g": 230,"b": 39},{"r": 206,"g": 230,"b": 39},{"r": 222,"g": 238,"b": 47},{"r": 222,"g": 230,"b": 47},{"r": 230,"g": 230,"b": 47},{"r": 238,"g": 238,"b": 55},{"r": 318,"g": 318,"b": 111},{"r": 382,"g": 382,"b": 159},{"r": 438,"g": 438,"b": 199},{"r": 510,"g": 510,"b": 255}]
const fireColorsPaletteCyan = [{"r": 7,"g": 7,"b": 7},{"r": 7,"g": 31,"b": 7},{"r": 7,"g": 47,"b": 15},{"r": 7,"g": 71,"b": 15},{"r": 7,"g": 87,"b": 23},{"r": 7,"g": 103,"b": 31},{"r": 7,"g": 119,"b": 31},{"r": 7,"g": 143,"b": 39},{"r": 7,"g": 159,"b": 47},{"r": 7,"g": 175,"b": 63},{"r": 7,"g": 191,"b": 71},{"r": 7,"g": 199,"b": 71},{"r": 7,"g": 223,"b": 79},{"r": 7,"g": 223,"b": 87},{"r": 7,"g": 223,"b": 87},{"r": 7,"g": 215,"b": 95},{"r": 7,"g": 215,"b": 95},{"r": 15,"g": 215,"b": 103},{"r": 15,"g": 207,"b": 111},{"r": 15,"g": 207,"b": 119},{"r": 15,"g": 207,"b": 127},{"r": 23,"g": 207,"b": 135},{"r": 23,"g": 199,"b": 135},{"r": 23,"g": 199,"b": 143},{"r": 31,"g": 199,"b": 151},{"r": 31,"g": 191,"b": 159},{"r": 31,"g": 191,"b": 159},{"r": 39,"g": 191,"b": 167},{"r": 39,"g": 191,"b": 167},{"r": 47,"g": 191,"b": 175},{"r": 47,"g": 183,"b": 175},{"r": 47,"g": 183,"b": 183},{"r": 55,"g": 183,"b": 183},{"r": 111,"g": 207,"b": 207},{"r": 159,"g": 223,"b": 223},{"r": 199,"g": 239,"b": 239},{"r": 255,"g": 255,"b": 255}]
const fireColorsPalettePurple = [{"r": 7,"g": 7,"b": 7},{"r": 7,"g": 7,"b": 31},{"r": 15,"g": 7,"b": 47},{"r": 15,"g": 7,"b": 71},{"r": 23,"g": 7,"b": 87},{"r": 31,"g": 7,"b": 103},{"r": 31,"g": 7,"b": 119},{"r": 39,"g": 7,"b": 143},{"r": 47,"g": 7,"b": 159},{"r": 63,"g": 7,"b": 175},{"r": 71,"g": 7,"b": 191},{"r": 71,"g": 7,"b": 199},{"r": 79,"g": 7,"b": 223},{"r": 87,"g": 7,"b": 223},{"r": 87,"g": 7,"b": 223},{"r": 95,"g": 7,"b": 215},{"r": 95,"g": 7,"b": 215},{"r": 103,"g": 15,"b": 215},{"r": 111,"g": 15,"b": 207},{"r": 119,"g": 15,"b": 207},{"r": 127,"g": 15,"b": 207},{"r": 135,"g": 23,"b": 207},{"r": 135,"g": 23,"b": 199},{"r": 143,"g": 23,"b": 199},{"r": 151,"g": 31,"b": 199},{"r": 159,"g": 31,"b": 191},{"r": 159,"g": 31,"b": 191},{"r": 167,"g": 39,"b": 191},{"r": 167,"g": 39,"b": 191},{"r": 175,"g": 47,"b": 191},{"r": 175,"g": 47,"b": 183},{"r": 183,"g": 47,"b": 183},{"r": 183,"g": 55,"b": 183},{"r": 207,"g": 111,"b": 207},{"r": 223,"g": 159,"b": 223},{"r": 239,"g": 199,"b": 239},{"r": 255,"g": 255,"b": 255}]
const fireColorsPalettePink = [{"r": 7,"g": 7,"b": 7},{"r": 31,"g": 7,"b": 7},{"r": 47,"g": 7,"b": 15},{"r": 71,"g": 7,"b": 15},{"r": 87,"g": 7,"b": 23},{"r": 103,"g": 7,"b": 31},{"r": 119,"g": 7,"b": 31},{"r": 143,"g": 7,"b": 39},{"r": 159,"g": 7,"b": 47},{"r": 175,"g": 7,"b": 63},{"r": 191,"g": 7,"b": 71},{"r": 199,"g": 7,"b": 71},{"r": 223,"g": 7,"b": 79},{"r": 223,"g": 7,"b": 87},{"r": 223,"g": 7,"b": 87},{"r": 215,"g": 7,"b": 95},{"r": 215,"g": 7,"b": 95},{"r": 215,"g": 15,"b": 103},{"r": 207,"g": 15,"b": 111},{"r": 207,"g": 15,"b": 119},{"r": 207,"g": 15,"b": 127},{"r": 207,"g": 23,"b": 135},{"r": 199,"g": 23,"b": 135},{"r": 199,"g": 23,"b": 143},{"r": 199,"g": 31,"b": 151},{"r": 191,"g": 31,"b": 159},{"r": 191,"g": 31,"b": 159},{"r": 191,"g": 39,"b": 167},{"r": 191,"g": 39,"b": 167},{"r": 191,"g": 47,"b": 175},{"r": 183,"g": 47,"b": 175},{"r": 183,"g": 47,"b": 183},{"r": 183,"g": 55,"b": 183},{"r": 207,"g": 111,"b": 207},{"r": 223,"g": 159,"b": 223},{"r": 239,"g": 199,"b": 239},{"r": 255,"g": 255,"b": 255}]

let palette = fireColorsPalette

const canvas = document.getElementById('fireCanvas')
canvas.width = fireWidth
canvas.height = fireHeight
const context = canvas.getContext('2d')
const image = context.createImageData(fireWidth, fireHeight)

function start() {
  createFireDataStructure()
  createFireSource()

  setInterval(calculateFirePropagation, 50)
}

function createFireDataStructure() {
  const numberOfPixels = fireWidth * fireHeight

  for (let i = 0; i < numberOfPixels; i++) {
    firePixelsArray[i] = 0
  }
}

function calculateFirePropagation() {
  for (let column = 0; column < fireWidth; column++) {
    for (let row = 0; row < fireHeight; row++) {
      const pixelIndex = column + ( fireWidth * row )

      updateFireIntensityPerPixel(pixelIndex)
    }
  }

  renderFire()
}

function updateFireIntensityPerPixel(currentPixelIndex) {
  const belowPixelIndex = currentPixelIndex + fireWidth

  if (belowPixelIndex >= fireWidth * fireHeight) {
    return
  }

  const decay = Math.floor(Math.random() * 3)
  const belowPixelFireIntensity = firePixelsArray[belowPixelIndex]
  const newFireIntensity =
    belowPixelFireIntensity - decay >= 0 ? belowPixelFireIntensity - decay : 0

  firePixelsArray[currentPixelIndex - decay] = newFireIntensity
}

function renderFire() {
  for (let pixelIndex = 0; pixelIndex < firePixelsArray.length; pixelIndex++) {
    const fireIntensity = firePixelsArray[pixelIndex]
    const color = palette[fireIntensity]

    image.data[pixelIndex * 4] = color.r
    image.data[pixelIndex * 4 + 1] = color.g
    image.data[pixelIndex * 4 + 2] = color.b
    image.data[pixelIndex * 4 + 3] = 255
  }

  context.putImageData(image, 0, 0)
}

function createFireSource() {
  for (let column = 0; column <= fireWidth; column++) {
    const overflowPixelIndex = fireWidth * fireHeight
    const pixelIndex = (overflowPixelIndex - fireWidth) + column

    firePixelsArray[pixelIndex] = 36
  }
}

function destroyFireSource() {
  for (let column = 0; column <= fireWidth; column++) {
    const overflowPixelIndex = fireWidth * fireHeight
    const pixelIndex = (overflowPixelIndex - fireWidth) + column

    firePixelsArray[pixelIndex] = 0
  }
}

function increaseFireSource() {
  for (let column = 0; column <= fireWidth; column++) {
    const overflowPixelIndex = fireWidth * fireHeight
    const pixelIndex = (overflowPixelIndex - fireWidth) + column
    const currentFireIntensity = firePixelsArray[pixelIndex]

    if (currentFireIntensity < 36) {
      const increase = Math.floor(Math.random() * 14)
      const newFireIntensity =
        currentFireIntensity + increase >= 36 ? 36 : currentFireIntensity + increase

      firePixelsArray[pixelIndex] = newFireIntensity
    }
  }
}

function decreaseFireSource() {
  for (let column = 0; column <= fireWidth; column++) {
    const overflowPixelIndex = fireWidth * fireHeight
    const pixelIndex = (overflowPixelIndex - fireWidth) + column
    const currentFireIntensity = firePixelsArray[pixelIndex]

    if (currentFireIntensity > 0) {
      const decay = Math.floor(Math.random() * 14)
      const newFireIntensity =
        currentFireIntensity - decay >= 0 ? currentFireIntensity - decay : 0

      firePixelsArray[pixelIndex] = newFireIntensity
    }
  }
}

function changeColor(value){
    switch (value) {
        case '0':
            //red
            palette = fireColorsPaletteRed
            
            break
        case '1':
            //orange
            palette = fireColorsPalette
            break
        case '2':
            //yellow
            palette = fireColorsPaletteYellow
            break
        case '3':
            //greenyellow
            palette = fireColorsPaletteGreenyellow
            break
        case '4':
            //green
            palette = fireColorsPaletteGreen
            break
        case '5':
            //cyan
            palette = fireColorsPaletteCyan
            break
        case '6':
            //blue
            palette = fireColorsPaletteBlue
            break
        case '7':
            //purple
            palette = fireColorsPalettePurple
            break
        case '8':
            //hotpink
            palette = fireColorsPalettePink
            break
        default:
            palette = fireColorsPalette
    }
}

start()