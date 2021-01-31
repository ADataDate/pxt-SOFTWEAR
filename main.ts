//% color=#f44242 icon="\u26C8"
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
  
    /**
     * Writes a value to a register on the CCS811 Air Quality Sensor
     */
    function writeCCSReg(reg: number, val: number): void {
        let test = reg << 8 | val
        pins.i2cWriteNumber(LSM6DS3Addr, reg << 8 | val, NumberFormat.Int16BE)
    }

    /**
     * Reads a value from a register on the CCS811 Air Quality Sensor
     */
    function readCCSReg(reg: number, format: NumberFormat) {
        pins.i2cWriteNumber(LSM6DS3Addr, reg, NumberFormat.UInt8LE, false)
        let val = pins.i2cReadNumber(LSM6DS3Addr, format, false)
        return val
    }
  
  //% weight=41 blockGap=8 blockId="accelX" block="accelX"    
  export function accelX(): number
  {
    let accelx = readCCSReg(LSM6DS3_ACC_GYRO_OUTX_L_XL, NumberFormat.UInt16LE, false)
    return accelx
  }
}
