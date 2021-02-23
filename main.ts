declare interface Math {
    floor(x: number): number;
}


//% color=#f44242 icon="\u265B"
namespace softwear
{
  const LSM6DS3Addr                       = 0x6B
  const LSM6DS3_ACC_GYRO_TEST_PAGE  			= 0x00
  const LSM6DS3_ACC_GYRO_RAM_ACCESS  			= 0x01
  const LSM6DS3_ACC_GYRO_SENSOR_SYNC_TIME  	= 0x04
  const LSM6DS3_ACC_GYRO_SENSOR_SYNC_EN  		= 0x05
  const LSM6DS3_ACC_GYRO_FIFO_CTRL1  			= 0x06
  const LSM6DS3_ACC_GYRO_FIFO_CTRL2  			= 0x07
  const LSM6DS3_ACC_GYRO_FIFO_CTRL3  			= 0x08
  const LSM6DS3_ACC_GYRO_FIFO_CTRL4  			= 0x09
  const LSM6DS3_ACC_GYRO_FIFO_CTRL5  			= 0x0A
  const LSM6DS3_ACC_GYRO_ORIENT_CFG_G  		= 0x0B
  const LSM6DS3_ACC_GYRO_REFERENCE_G  		= 0x0C
  const LSM6DS3_ACC_GYRO_INT1_CTRL  			= 0x0D
  const LSM6DS3_ACC_GYRO_INT2_CTRL  			= 0x0E
  const LSM6DS3_ACC_GYRO_WHO_AM_I_REG  		= 0x0F
  const LSM6DS3_ACC_GYRO_CTRL1_XL  			= 0x10
  const LSM6DS3_ACC_GYRO_CTRL2_G  			= 0x11
  const LSM6DS3_ACC_GYRO_CTRL3_C  			= 0x12
  const LSM6DS3_ACC_GYRO_CTRL4_C  			= 0x13
  const LSM6DS3_ACC_GYRO_CTRL5_C  			= 0x14
  const LSM6DS3_ACC_GYRO_CTRL6_G  			= 0x15
  const LSM6DS3_ACC_GYRO_CTRL7_G  			= 0x16
  const LSM6DS3_ACC_GYRO_CTRL8_XL  			= 0x17
  const LSM6DS3_ACC_GYRO_CTRL9_XL  			= 0x18
  const LSM6DS3_ACC_GYRO_CTRL10_C  			= 0x19
  const LSM6DS3_ACC_GYRO_MASTER_CONFIG  		= 0x1A
  const LSM6DS3_ACC_GYRO_WAKE_UP_SRC  		= 0x1B
  const LSM6DS3_ACC_GYRO_TAP_SRC  			= 0x1C
  const LSM6DS3_ACC_GYRO_D6D_SRC  			= 0x1D
  const LSM6DS3_ACC_GYRO_STATUS_REG  			= 0x1E
  const LSM6DS3_ACC_GYRO_OUT_TEMP_L  			= 0x20
  const LSM6DS3_ACC_GYRO_OUT_TEMP_H  			= 0x21
  const LSM6DS3_ACC_GYRO_OUTX_L_G  			= 0x22
  const LSM6DS3_ACC_GYRO_OUTX_H_G  			= 0x23
  const LSM6DS3_ACC_GYRO_OUTY_L_G  			= 0x24
  const LSM6DS3_ACC_GYRO_OUTY_H_G  			= 0x25
  const LSM6DS3_ACC_GYRO_OUTZ_L_G  			= 0x26
  const LSM6DS3_ACC_GYRO_OUTZ_H_G  			= 0x27
  const LSM6DS3_ACC_GYRO_OUTX_L_XL  			= 0x28
  const LSM6DS3_ACC_GYRO_OUTX_H_XL  			= 0x29
  const LSM6DS3_ACC_GYRO_OUTY_L_XL  			= 0x2A
  const LSM6DS3_ACC_GYRO_OUTY_H_XL  			= 0x2B
  const LSM6DS3_ACC_GYRO_OUTZ_L_XL  			= 0x2C
  const LSM6DS3_ACC_GYRO_OUTZ_H_XL  			= 0x2D
  const LSM6DS3_ACC_GYRO_SENSORHUB1_REG  		= 0x2E
  const LSM6DS3_ACC_GYRO_SENSORHUB2_REG  		= 0x2F
  const LSM6DS3_ACC_GYRO_SENSORHUB3_REG  		= 0x30
  const LSM6DS3_ACC_GYRO_SENSORHUB4_REG  		= 0x31
  const LSM6DS3_ACC_GYRO_SENSORHUB5_REG  		= 0x32
  const LSM6DS3_ACC_GYRO_SENSORHUB6_REG  		= 0x33
  const LSM6DS3_ACC_GYRO_SENSORHUB7_REG  		= 0x34
  const LSM6DS3_ACC_GYRO_SENSORHUB8_REG  		= 0x35
  const LSM6DS3_ACC_GYRO_SENSORHUB9_REG  		= 0x36
  const LSM6DS3_ACC_GYRO_SENSORHUB10_REG  	= 0x37
  const LSM6DS3_ACC_GYRO_SENSORHUB11_REG  	= 0x38
  const LSM6DS3_ACC_GYRO_SENSORHUB12_REG  	= 0x39
  const LSM6DS3_ACC_GYRO_FIFO_STATUS1  		= 0x3A
  const LSM6DS3_ACC_GYRO_FIFO_STATUS2  		= 0x3B
  const LSM6DS3_ACC_GYRO_FIFO_STATUS3  		= 0x3C
  const LSM6DS3_ACC_GYRO_FIFO_STATUS4  		= 0x3D
  const LSM6DS3_ACC_GYRO_FIFO_DATA_OUT_L  	= 0x3E
  const LSM6DS3_ACC_GYRO_FIFO_DATA_OUT_H  	= 0x3F
  const LSM6DS3_ACC_GYRO_TIMESTAMP0_REG  		= 0x40
  const LSM6DS3_ACC_GYRO_TIMESTAMP1_REG  		= 0x41
  const LSM6DS3_ACC_GYRO_TIMESTAMP2_REG  		= 0x42
  const LSM6DS3_ACC_GYRO_STEP_COUNTER_L  		= 0x4B
  const LSM6DS3_ACC_GYRO_STEP_COUNTER_H  		= 0x4C
  const LSM6DS3_ACC_GYRO_FUNC_SRC  			= 0x53
  const LSM6DS3_ACC_GYRO_TAP_CFG1  			= 0x58
  const LSM6DS3_ACC_GYRO_TAP_THS_6D  			= 0x59
  const LSM6DS3_ACC_GYRO_INT_DUR2  			= 0x5A
  const LSM6DS3_ACC_GYRO_WAKE_UP_THS  		= 0x5B
  const LSM6DS3_ACC_GYRO_WAKE_UP_DUR  		= 0x5C
  const LSM6DS3_ACC_GYRO_FREE_FALL  			= 0x5D
  const LSM6DS3_ACC_GYRO_MD1_CFG  			= 0x5E
  const LSM6DS3_ACC_GYRO_MD2_CFG  			= 0x5F

  /************** Access Device RAM  *********= **********/
  const LSM6DS3_ACC_GYRO_ADDR0_TO_RW_RAM      =    0x62
  const LSM6DS3_ACC_GYRO_ADDR1_TO_RW_RAM      =    0x63
  const LSM6DS3_ACC_GYRO_DATA_TO_WR_RAM       =    0x64
  const LSM6DS3_ACC_GYRO_DATA_RD_FROM_RAM     =    0x65
  const LSM6DS3_ACC_GYRO_RAM_SIZE             =    4096

  /************** Embedded functions register mapping  *******************/
  const LSM6DS3_ACC_GYRO_SLV0_ADD                      = 0x02
  const LSM6DS3_ACC_GYRO_SLV0_SUBADD                   = 0x03
  const LSM6DS3_ACC_GYRO_SLAVE0_CONFIG                 = 0x04
  const LSM6DS3_ACC_GYRO_SLV1_ADD                      = 0x05
  const LSM6DS3_ACC_GYRO_SLV1_SUBADD                   = 0x06
  const LSM6DS3_ACC_GYRO_SLAVE1_CONFIG                 = 0x07
  const LSM6DS3_ACC_GYRO_SLV2_ADD                      = 0x08
  const LSM6DS3_ACC_GYRO_SLV2_SUBADD                   = 0x09
  const LSM6DS3_ACC_GYRO_SLAVE2_CONFIG                 = 0x0A
  const LSM6DS3_ACC_GYRO_SLV3_ADD                      = 0x0B
  const LSM6DS3_ACC_GYRO_SLV3_SUBADD                   = 0x0C
  const LSM6DS3_ACC_GYRO_SLAVE3_CONFIG                 = 0x0D
  const LSM6DS3_ACC_GYRO_DATAWRITE_SRC_MODE_SUB_SLV0   = 0x0E
  const LSM6DS3_ACC_GYRO_CONFIG_PEDO_THS_MIN           = 0x0F
  const LSM6DS3_ACC_GYRO_CONFIG_TILT_IIR               = 0x10
  const LSM6DS3_ACC_GYRO_CONFIG_TILT_ACOS              = 0x11
  const LSM6DS3_ACC_GYRO_CONFIG_TILT_WTIME             = 0x12
  const LSM6DS3_ACC_GYRO_SM_STEP_THS                   = 0x13
  const LSM6DS3_ACC_GYRO_MAG_SI_XX                     = 0x24
  const LSM6DS3_ACC_GYRO_MAG_SI_XY                     = 0x25
  const LSM6DS3_ACC_GYRO_MAG_SI_XZ                     = 0x26
  const LSM6DS3_ACC_GYRO_MAG_SI_YX                     = 0x27
  const LSM6DS3_ACC_GYRO_MAG_SI_YY                     = 0x28
  const LSM6DS3_ACC_GYRO_MAG_SI_YZ                     = 0x29
  const LSM6DS3_ACC_GYRO_MAG_SI_ZX                     = 0x2A
  const LSM6DS3_ACC_GYRO_MAG_SI_ZY                     = 0x2B
  const LSM6DS3_ACC_GYRO_MAG_SI_ZZ                     = 0x2C
  const LSM6DS3_ACC_GYRO_MAG_OFFX_L                    = 0x2D
  const LSM6DS3_ACC_GYRO_MAG_OFFX_H                    = 0x2E
  const LSM6DS3_ACC_GYRO_MAG_OFFY_L                    = 0x2F
  const LSM6DS3_ACC_GYRO_MAG_OFFY_H                    = 0x30
  const LSM6DS3_ACC_GYRO_MAG_OFFZ_L                    = 0x31
  const LSM6DS3_ACC_GYRO_MAG_OFFZ_H                    = 0x32

    /************** OLED Register Mapping & Varibles  *******************/

	  let font: Buffer;


    const SSD1306_SETCONTRAST = 0x81
    const SSD1306_SETCOLUMNADRESS = 0x21
    const SSD1306_SETPAGEADRESS = 0x22
    const SSD1306_DISPLAYALLON_RESUME = 0xA4
    const SSD1306_DISPLAYALLON = 0xA5
    const SSD1306_NORMALDISPLAY = 0xA6
    const SSD1306_INVERTDISPLAY = 0xA7
    const SSD1306_DISPLAYOFF = 0xAE
    const SSD1306_DISPLAYON = 0xAF
    const SSD1306_SETDISPLAYOFFSET = 0xD3
    const SSD1306_SETCOMPINS = 0xDA
    const SSD1306_SETVCOMDETECT = 0xDB
    const SSD1306_SETDISPLAYCLOCKDIV = 0xD5
    const SSD1306_SETPRECHARGE = 0xD9
    const SSD1306_SETMULTIPLEX = 0xA8
    const SSD1306_SETLOWCOLUMN = 0x00
    const SSD1306_SETHIGHCOLUMN = 0x10
    const SSD1306_SETSTARTLINE = 0x40
    const SSD1306_MEMORYMODE = 0x20
    const SSD1306_COMSCANINC = 0xC0
    const SSD1306_COMSCANDEC = 0xC8
    const SSD1306_SEGREMAP = 0xA0
    const SSD1306_CHARGEPUMP = 0x8D
    const chipAdress = 0x3D
    const xOffset = 0
    const yOffset = 0
    let charX = 0
    let charY = 0
    let displayWidth = 128
    let displayHeight = 64 / 8
    let screenSize = 0
    //let font: Array<Array<number>>
    let loadStarted: boolean;
    let loadPercent: number;

function command(cmd: number) {
        let buf = pins.createBuffer(2)
        buf[0] = 0x00
        buf[1] = cmd
        pins.i2cWriteBuffer(chipAdress, buf, false)
    }
 //% block="clear OLED display"
    //% weight=3
    export function clear() {
        loadStarted = false
        loadPercent = 0
        command(SSD1306_SETCOLUMNADRESS)
        command(0x00)
        command(displayWidth - 1)
        command(SSD1306_SETPAGEADRESS)
        command(0x00)
        command(displayHeight - 1)
        let data = pins.createBuffer(17);
        data[0] = 0x40; // Data Mode
        for (let i = 1; i < 17; i++) {
            data[i] = 0x00
        }
        // send display buffer in 16 byte chunks
        for (let i = 0; i < screenSize; i += 16) {
            pins.i2cWriteBuffer(chipAdress, data, false)
        }
        charX = xOffset
        charY = yOffset
    }

    function drawLoadingFrame() {
        command(SSD1306_SETCOLUMNADRESS)
        command(0x00)
        command(displayWidth - 1)
        command(SSD1306_SETPAGEADRESS)
        command(0x00)
        command(displayHeight - 1)
        let col = 0
        let page = 0
        let data = pins.createBuffer(17);
        data[0] = 0x40; // Data Mode
        let i = 1
        for (let page = 0; page < displayHeight; page++) {
            for (let col = 0; col < displayWidth; col++) {
                if (page === 3 && col > 12 && col < displayWidth - 12) {
                    data[i] = 0x60
                } else if (page === 5 && col > 12 && col < displayWidth - 12) {
                    data[i] = 0x06
                } else if (page === 4 && (col === 12 || col === 13 || col === displayWidth - 12 || col === displayWidth - 13)) {
                    data[i] = 0xFF
                } else {
                    data[i] = 0x00
                }
                if (i === 16) {
                    pins.i2cWriteBuffer(chipAdress, data, false)
                    i = 1
                } else {
                    i++
                }

            }
        }
        charX = 30
        charY = 2
        writeString("Loading:")
    }
    function drawLoadingBar(percent: number) {
        charX = 78
        charY = 2
        let num = Math.floor(percent)
        writeNum(num)
        writeString("%")
        let width = displayWidth - 14 - 13
        let lastStart = width * (loadPercent / displayWidth)
        command(SSD1306_SETCOLUMNADRESS)
        command(14 + lastStart)
        command(displayWidth - 13)
        command(SSD1306_SETPAGEADRESS)
        command(4)
        command(5)
        let data = pins.createBuffer(2);
        data[0] = 0x40; // Data Mode
        data[1] = 0x7E
        for (let i = lastStart; i < width * (Math.floor(percent) / 100); i++) {
            pins.i2cWriteBuffer(chipAdress, data, false)
        }
        loadPercent = num
    }

    //% block="draw loading bar at $percent percent"
    //% percent.min=0 percent.max=100
    //% weight=2
    export function drawLoading(percent: number) {
        if (loadStarted) {
            drawLoadingBar(percent)
        } else {
            drawLoadingFrame()
            drawLoadingBar(percent)
            loadStarted = true
        }
    }


    //% block="show (without newline) string $str"
    //% weight=6
    export function writeString(str: string) {
        for (let i = 0; i < str.length; i++) {
            if (charX > displayWidth - 6) {
                newLine()
            }
            drawChar(charX, charY, str.charAt(i))
            charX += 6
        }
    }
    //% block="show (without newline) number $n"
    //% weight=5
    export function writeNum(n: number) {
        let numString = n.toString()
        writeString(numString)
    }
    //% block="show string $str"
    //% weight=8
    export function writeStringNewLine(str: string) {
        writeString(str)
        newLine()
    }
    //% block="show number $n"
    //% weight=7
    export function writeNumNewLine(n: number) {
        writeNum(n)
        newLine()
    }
    //% block="insert newline"
    //% weight=4
    export function newLine() {
        charY++
        charX = xOffset
    }
    function drawChar(x: number, y: number, c: string) {
        command(SSD1306_SETCOLUMNADRESS)
        command(x)
        command(x + 5)
        command(SSD1306_SETPAGEADRESS)
        command(y)
        command(y + 1)
        let line = pins.createBuffer(2)
        line[0] = 0x40
        for (let i = 0; i < 6; i++) {
            if (i === 5) {
                line[1] = 0x00
            } else {
                let charIndex = c.charCodeAt(0)
                let charNumber = font.getNumber(NumberFormat.UInt8BE, 5 * charIndex + i)
                line[1] = charNumber

            }
            pins.i2cWriteBuffer(chipAdress, line, false)
        }

    }
    function drawShape(pixels: Array<Array<number>>) {
        let x1 = displayWidth
        let y1 = displayHeight * 8
        let x2 = 0
        let y2 = 0
        for (let i = 0; i < pixels.length; i++) {
            if (pixels[i][0] < x1) {
                x1 = pixels[i][0]
            }
            if (pixels[i][0] > x2) {
                x2 = pixels[i][0]
            }
            if (pixels[i][1] < y1) {
                y1 = pixels[i][1]
            }
            if (pixels[i][1] > y2) {
                y2 = pixels[i][1]
            }
        }
        let page1 = Math.floor(y1 / 8)
        let page2 = Math.floor(y2 / 8)
        let line = pins.createBuffer(2)
        line[0] = 0x40
        for (let x = x1; x <= x2; x++) {
            for (let page = page1; page <= page2; page++) {
                line[1] = 0x00
                for (let i = 0; i < pixels.length; i++) {
                    if (pixels[i][0] === x) {
                        if (Math.floor(pixels[i][1] / 8) === page) {
                            line[1] |= Math.pow(2, (pixels[i][1] % 8))
                        }
                    }
                }
                if (line[1] !== 0x00) {
                    command(SSD1306_SETCOLUMNADRESS)
                    command(x)
                    command(x + 1)
                    command(SSD1306_SETPAGEADRESS)
                    command(page)
                    command(page + 1)
                    //line[1] |= pins.i2cReadBuffer(chipAdress, 2)[1]
                    pins.i2cWriteBuffer(chipAdress, line, false)
                }
            }
        }
    }

    //% block="draw line from:|x: $x0 y: $y0 to| x: $x1 y: $y1"
    //% x0.defl=0
    //% y0.defl=0
    //% x1.defl=20
    //% y1.defl=20
    //% weight=1
    export function drawLine(x0: number, y0: number, x1: number, y1: number) {
        let pixels: Array<Array<number>> = []
        let kx: number, ky: number, c: number, i: number, xx: number, yy: number, dx: number, dy: number;
        let targetX = x1
        let targetY = y1
        x1 -= x0; kx = 0; if (x1 > 0) kx = +1; if (x1 < 0) { kx = -1; x1 = -x1; } x1++;
        y1 -= y0; ky = 0; if (y1 > 0) ky = +1; if (y1 < 0) { ky = -1; y1 = -y1; } y1++;
        if (x1 >= y1) {
            c = x1
            for (i = 0; i < x1; i++ , x0 += kx) {
                pixels.push([x0, y0])
                c -= y1; if (c <= 0) { if (i != x1 - 1) pixels.push([x0 + kx, y0]); c += x1; y0 += ky; if (i != x1 - 1) pixels.push([x0, y0]); }
                if (pixels.length > 20) {
                    drawShape(pixels)
                    pixels = []
                    drawLine(x0, y0, targetX, targetY)
                    return
                }
            }
        } else {
            c = y1
            for (i = 0; i < y1; i++ , y0 += ky) {
                pixels.push([x0, y0])
                c -= x1; if (c <= 0) { if (i != y1 - 1) pixels.push([x0, y0 + ky]); c += y1; x0 += kx; if (i != y1 - 1) pixels.push([x0, y0]); }
                if (pixels.length > 20) {
                    drawShape(pixels)
                    pixels = []
                    drawLine(x0, y0, targetX, targetY)
                    return
                }
            }
        }
        drawShape(pixels)
    }

    //% block="draw rectangle from:|x: $x0 y: $y0 to| x: $x1 y: $y1"
    //% x0.defl=0
    //% y0.defl=0
    //% x1.defl=20
    //% y1.defl=20
    //% weight=0
    export function drawRectangle(x0: number, y0: number, x1: number, y1: number) {
        drawLine(x0, y0, x1, y0)
        drawLine(x0, y1, x1, y1)
        drawLine(x0, y0, x0, y1)
        drawLine(x1, y0, x1, y1)
    }
    //% block="initialize OLED with width $width height $height"
    //% width.defl=128
    //% height.defl=64
    //% weight=9
    export function init(width: number, height: number) {
        command(SSD1306_DISPLAYOFF);
        command(SSD1306_SETDISPLAYCLOCKDIV);
        command(0x80);                                  // the suggested ratio 0x80
        command(SSD1306_SETMULTIPLEX);
        command(0x3F);
        command(SSD1306_SETDISPLAYOFFSET);
        command(0x0);                                   // no offset
        command(SSD1306_SETSTARTLINE | 0x0);            // line #0
        command(SSD1306_CHARGEPUMP);
        command(0x14);
        command(SSD1306_MEMORYMODE);
        command(0x00);                                  // 0x0 act like ks0108
        command(SSD1306_SEGREMAP | 0x1);
        command(SSD1306_COMSCANDEC);
        command(SSD1306_SETCOMPINS);
        command(0x12);
        command(SSD1306_SETCONTRAST);
        command(0xCF);
        command(SSD1306_SETPRECHARGE);
        command(0xF1);
        command(SSD1306_SETVCOMDETECT);
        command(0x40);
        command(SSD1306_DISPLAYALLON_RESUME);
        command(SSD1306_NORMALDISPLAY);
        command(SSD1306_DISPLAYON);
        displayWidth = width
        displayHeight = height / 8
        screenSize = displayWidth * displayHeight
        charX = xOffset
        charY = yOffset
        font = hex`
    0000000000
    3E5B4F5B3E
    3E6B4F6B3E
    1C3E7C3E1C
    183C7E3C18
    1C577D571C
    1C5E7F5E1C
    00183C1800
    FFE7C3E7FF
    0018241800
    FFE7DBE7FF
    30483A060E
    2629792926
    407F050507
    407F05253F
    5A3CE73C5A
    7F3E1C1C08
    081C1C3E7F
    14227F2214
    5F5F005F5F
    06097F017F
    006689956A
    6060606060
    94A2FFA294
    08047E0408
    10207E2010
    08082A1C08
    081C2A0808
    1E10101010
    0C1E0C1E0C
    30383E3830
    060E3E0E06
    0000000000
    00005F0000
    0007000700
    147F147F14
    242A7F2A12
    2313086462
    3649562050
    0008070300
    001C224100
    0041221C00
    2A1C7F1C2A
    08083E0808
    0080703000
    0808080808
    0000606000
    2010080402
    3E5149453E
    00427F4000
    7249494946
    2141494D33
    1814127F10
    2745454539
    3C4A494931
    4121110907
    3649494936
    464949291E
    0000140000
    0040340000
    0008142241
    1414141414
    0041221408
    0201590906
    3E415D594E
    7C1211127C
    7F49494936
    3E41414122
    7F4141413E
    7F49494941
    7F09090901
    3E41415173
    7F0808087F
    00417F4100
    2040413F01
    7F08142241
    7F40404040
    7F021C027F
    7F0408107F
    3E4141413E
    7F09090906
    3E4151215E
    7F09192946
    2649494932
    03017F0103
    3F4040403F
    1F2040201F
    3F4038403F
    6314081463
    0304780403
    6159494D43
    007F414141
    0204081020
    004141417F
    0402010204
    4040404040
    0003070800
    2054547840
    7F28444438
    3844444428
    384444287F
    3854545418
    00087E0902
    18A4A49C78
    7F08040478
    00447D4000
    2040403D00
    7F10284400
    00417F4000
    7C04780478
    7C08040478
    3844444438
    FC18242418
    18242418FC
    7C08040408
    4854545424
    04043F4424
    3C4040207C
    1C2040201C
    3C4030403C
    4428102844
    4C9090907C
    4464544C44
    0008364100
    0000770000
    0041360800
    0201020402
    3C2623263C
    1EA1A16112
    3A4040207A
    3854545559
    2155557941
    2154547841
    2155547840
    2054557940
    0C1E527212
    3955555559
    3954545459
    3955545458
    0000457C41
    0002457D42
    0001457C40
    F0292429F0
    F0282528F0
    7C54554500
    2054547C54
    7C0A097F49
    3249494932
    3248484832
    324A484830
    3A4141217A
    3A42402078
    009DA0A07D
    3944444439
    3D4040403D
    3C24FF2424
    487E494366
    2B2FFC2F2B
    FF0929F620
    C0887E0903
    2054547941
    0000447D41
    3048484A32
    384040227A
    007A0A0A72
    7D0D19317D
    2629292F28
    2629292926
    30484D4020
    3808080808
    0808080838
    2F10C8ACBA
    2F102834FA
    00007B0000
    08142A1422
    22142A1408
    AA005500AA
    AA55AA55AA
    000000FF00
    101010FF00
    141414FF00
    1010FF00FF
    1010F010F0
    141414FC00
    1414F700FF
    0000FF00FF
    1414F404FC
    141417101F
    10101F101F
    1414141F00
    101010F000
    0000001F10
    1010101F10
    101010F010
    000000FF10
    1010101010
    101010FF10
    000000FF14
    0000FF00FF
    00001F1017
    0000FC04F4
    1414171017
    1414F404F4
    0000FF00F7
    1414141414
    1414F700F7
    1414141714
    10101F101F
    141414F414
    1010F010F0
    00001F101F
    0000001F14
    000000FC14
    0000F010F0
    1010FF10FF
    141414FF14
    1010101F00
    000000F010
    FFFFFFFFFF
    F0F0F0F0F0
    FFFFFF0000
    000000FFFF
    0F0F0F0F0F
    3844443844
    7C2A2A3E14
    7E02020606
    027E027E02
    6355494163
    3844443C04
    407E201E20
    06027E0202
    99A5E7A599
    1C2A492A1C
    4C7201724C
    304A4D4D30
    3048784830
    BC625A463D
    3E49494900
    7E0101017E
    2A2A2A2A2A
    44445F4444
    40514A4440
    40444A5140
    0000FF0103
    E080FF0000
    08086B6B08
    3612362436
    060F090F06
    0000181800
    0000101000
    3040FF0101
    001F01011E
    00191D1712
    003C3C3C3C
    0000000000`
        loadStarted = false
        loadPercent = 0
        clear()
    }


  /**
   * Writes a value to a register on the IMU 
   */
  function writeLSM6DS3Reg(reg: number, val: number): void {
      let test = reg << 8 | val
      pins.i2cWriteNumber(LSM6DS3Addr, reg << 8 | val, NumberFormat.Int16BE)
  }

  /**
   * Reads a value from a register on the IMU
   */
  function readLSM6DS3Reg(reg: number, format: NumberFormat) {
      pins.i2cWriteNumber(LSM6DS3Addr, reg, NumberFormat.UInt8LE, false)
      let val = pins.i2cReadNumber(LSM6DS3Addr, format, false)
      return val
  }

  //% weight=41 blockGap=8 blockId="accelX" block="accelX"    
  export function accelX(): number {
    let accelx = readLSM6DS3Reg(LSM6DS3_ACC_GYRO_OUTX_L_XL, NumberFormat.Int16LE)
    return accelx
  }

  //% weight=41 blockGap=8 blockId="accelY" block="accelY"    
  export function accelY(): number {
    let accely = readLSM6DS3Reg(LSM6DS3_ACC_GYRO_OUTY_L_XL, NumberFormat.Int16LE)
    return accely
  }

  //% weight=41 blockGap=8 blockId="accelZ" block="accelZ"    
  export function accelZ(): number {
    let accelz = readLSM6DS3Reg(LSM6DS3_ACC_GYRO_OUTZ_L_XL, NumberFormat.Int16LE)
    return accelz
  }

  //% weight=41 blockGap=8 blockId="gyroX" block="gyroX"    
  export function gyroX(): number {
    let gyrox = readLSM6DS3Reg(LSM6DS3_ACC_GYRO_OUTX_L_G, NumberFormat.Int16LE)
    return gyrox
  }

  //% weight=41 blockGap=8 blockId="gyroY" block="gyroY"    
  export function gyroY(): number {
    let gyroy = readLSM6DS3Reg(LSM6DS3_ACC_GYRO_OUTY_L_G, NumberFormat.Int16LE)
    return gyroy
  }

  //% weight=41 blockGap=8 blockId="gyroZ" block="gyroZ"    
  export function gyroZ(): number {
    let gyroz = readLSM6DS3Reg(LSM6DS3_ACC_GYRO_OUTZ_L_G, NumberFormat.Int16LE)
    return gyroz
  }

  //% weight=41 blockGap=8 blockId="temp" block="temp"    
  export function temp(): number {
    let temp = readLSM6DS3Reg(LSM6DS3_ACC_GYRO_OUT_TEMP_L, NumberFormat.UInt16LE)
    return temp
  }

  //% weight=41 blockGap=8 blockId="readWhoAmI" block="readWhoAmI"    
  export function readWhoAmI(): number {
    let whoAmI = readLSM6DS3Reg(LSM6DS3_ACC_GYRO_WHO_AM_I_REG, NumberFormat.UInt8LE)
    return whoAmI
  }

  //blocks for gesture detection 
   enum tilt_dir{
    forward = 1,
    back = 2,
    right = 3, 
    left = 4,
   }

   enum spin_dir{
    right = 1,
    left = 2,
   }

   //% blockId="head_tilt" block="head_tilt"
export function head_tilt(head_tilt : tilt_dir) : number {
    return 0
   
    }

     //% blockId="spin" block="spin"
export function spin(spin : spin_dir) : number {
    return 0
   
}

   //% blockId="pop-up" block="pop_up"
   export function pop_up (): number {
       return 0
   
}

}
