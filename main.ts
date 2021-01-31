//% color=#f44242 icon="\u26C8"
namespace softwear
{
  //LSM6DS3 IMU Adresses
  const LSM6DS3Addr                           0x6B
  const LSM6DS3_ACC_GYRO_TEST_PAGE  			0X00
  const LSM6DS3_ACC_GYRO_RAM_ACCESS  			0X01
  const LSM6DS3_ACC_GYRO_SENSOR_SYNC_TIME  	0X04
  const LSM6DS3_ACC_GYRO_SENSOR_SYNC_EN  		0X05
  const LSM6DS3_ACC_GYRO_FIFO_CTRL1  			0X06
  const LSM6DS3_ACC_GYRO_FIFO_CTRL2  			0X07
  const LSM6DS3_ACC_GYRO_FIFO_CTRL3  			0X08
  const LSM6DS3_ACC_GYRO_FIFO_CTRL4  			0X09
  const LSM6DS3_ACC_GYRO_FIFO_CTRL5  			0X0A
  const LSM6DS3_ACC_GYRO_ORIENT_CFG_G  		0X0B
  const LSM6DS3_ACC_GYRO_REFERENCE_G  		0X0C
  const LSM6DS3_ACC_GYRO_INT1_CTRL  			0X0D
  const LSM6DS3_ACC_GYRO_INT2_CTRL  			0X0E
  const LSM6DS3_ACC_GYRO_WHO_AM_I_REG  		0X0F
  const LSM6DS3_ACC_GYRO_CTRL1_XL  			0X10
  const LSM6DS3_ACC_GYRO_CTRL2_G  			0X11
  const LSM6DS3_ACC_GYRO_CTRL3_C  			0X12
  const LSM6DS3_ACC_GYRO_CTRL4_C  			0X13
  const LSM6DS3_ACC_GYRO_CTRL5_C  			0X14
  const LSM6DS3_ACC_GYRO_CTRL6_G  			0X15
  const LSM6DS3_ACC_GYRO_CTRL7_G  			0X16
  const LSM6DS3_ACC_GYRO_CTRL8_XL  			0X17
  const LSM6DS3_ACC_GYRO_CTRL9_XL  			0X18
  const LSM6DS3_ACC_GYRO_CTRL10_C  			0X19
  const LSM6DS3_ACC_GYRO_MASTER_CONFIG  		0X1A
  const LSM6DS3_ACC_GYRO_WAKE_UP_SRC  		0X1B
  const LSM6DS3_ACC_GYRO_TAP_SRC  			0X1C
  const LSM6DS3_ACC_GYRO_D6D_SRC  			0X1D
  const LSM6DS3_ACC_GYRO_STATUS_REG  			0X1E
  const LSM6DS3_ACC_GYRO_OUT_TEMP_L  			0X20
  const LSM6DS3_ACC_GYRO_OUT_TEMP_H  			0X21
  const LSM6DS3_ACC_GYRO_OUTX_L_G  			0X22
  const LSM6DS3_ACC_GYRO_OUTX_H_G  			0X23
  const LSM6DS3_ACC_GYRO_OUTY_L_G  			0X24
  const LSM6DS3_ACC_GYRO_OUTY_H_G  			0X25
  const LSM6DS3_ACC_GYRO_OUTZ_L_G  			0X26
  const LSM6DS3_ACC_GYRO_OUTZ_H_G  			0X27
  const LSM6DS3_ACC_GYRO_OUTX_L_XL  			0X28
  const LSM6DS3_ACC_GYRO_OUTX_H_XL  			0X29
  const LSM6DS3_ACC_GYRO_OUTY_L_XL  			0X2A
  const LSM6DS3_ACC_GYRO_OUTY_H_XL  			0X2B
  const LSM6DS3_ACC_GYRO_OUTZ_L_XL  			0X2C
  const LSM6DS3_ACC_GYRO_OUTZ_H_XL  			0X2D
  const LSM6DS3_ACC_GYRO_SENSORHUB1_REG  		0X2E
  const LSM6DS3_ACC_GYRO_SENSORHUB2_REG  		0X2F
  const LSM6DS3_ACC_GYRO_SENSORHUB3_REG  		0X30
  const LSM6DS3_ACC_GYRO_SENSORHUB4_REG  		0X31
  const LSM6DS3_ACC_GYRO_SENSORHUB5_REG  		0X32
  const LSM6DS3_ACC_GYRO_SENSORHUB6_REG  		0X33
  const LSM6DS3_ACC_GYRO_SENSORHUB7_REG  		0X34
  const LSM6DS3_ACC_GYRO_SENSORHUB8_REG  		0X35
  const LSM6DS3_ACC_GYRO_SENSORHUB9_REG  		0X36
  const LSM6DS3_ACC_GYRO_SENSORHUB10_REG  	0X37
  const LSM6DS3_ACC_GYRO_SENSORHUB11_REG  	0X38
  const LSM6DS3_ACC_GYRO_SENSORHUB12_REG  	0X39
  const LSM6DS3_ACC_GYRO_FIFO_STATUS1  		0X3A
  const LSM6DS3_ACC_GYRO_FIFO_STATUS2  		0X3B
  const LSM6DS3_ACC_GYRO_FIFO_STATUS3  		0X3C
  const LSM6DS3_ACC_GYRO_FIFO_STATUS4  		0X3D
  const LSM6DS3_ACC_GYRO_FIFO_DATA_OUT_L  	0X3E
  const LSM6DS3_ACC_GYRO_FIFO_DATA_OUT_H  	0X3F
  const LSM6DS3_ACC_GYRO_TIMESTAMP0_REG  		0X40
  const LSM6DS3_ACC_GYRO_TIMESTAMP1_REG  		0X41
  const LSM6DS3_ACC_GYRO_TIMESTAMP2_REG  		0X42
  const LSM6DS3_ACC_GYRO_STEP_COUNTER_L  		0X4B
  const LSM6DS3_ACC_GYRO_STEP_COUNTER_H  		0X4C
  const LSM6DS3_ACC_GYRO_FUNC_SRC  			0X53
  const LSM6DS3_ACC_GYRO_TAP_CFG1  			0X58
  const LSM6DS3_ACC_GYRO_TAP_THS_6D  			0X59
  const LSM6DS3_ACC_GYRO_INT_DUR2  			0X5A
  const LSM6DS3_ACC_GYRO_WAKE_UP_THS  		0X5B
  const LSM6DS3_ACC_GYRO_WAKE_UP_DUR  		0X5C
  const LSM6DS3_ACC_GYRO_FREE_FALL  			0X5D
  const LSM6DS3_ACC_GYRO_MD1_CFG  			0X5E
  const LSM6DS3_ACC_GYRO_MD2_CFG  			0X5F

  /************** Access Device RAM  *******************/
  const LSM6DS3_ACC_GYRO_ADDR0_TO_RW_RAM         0x62
  const LSM6DS3_ACC_GYRO_ADDR1_TO_RW_RAM         0x63
  const LSM6DS3_ACC_GYRO_DATA_TO_WR_RAM          0x64
  const LSM6DS3_ACC_GYRO_DATA_RD_FROM_RAM        0x65

  const LSM6DS3_ACC_GYRO_RAM_SIZE                4096

  /************** Embedded functions register mapping  *******************/
  const LSM6DS3_ACC_GYRO_SLV0_ADD                     0x02
  const LSM6DS3_ACC_GYRO_SLV0_SUBADD                  0x03
  const LSM6DS3_ACC_GYRO_SLAVE0_CONFIG                0x04
  const LSM6DS3_ACC_GYRO_SLV1_ADD                     0x05
  const LSM6DS3_ACC_GYRO_SLV1_SUBADD                  0x06
  const LSM6DS3_ACC_GYRO_SLAVE1_CONFIG                0x07
  const LSM6DS3_ACC_GYRO_SLV2_ADD                     0x08
  const LSM6DS3_ACC_GYRO_SLV2_SUBADD                  0x09
  const LSM6DS3_ACC_GYRO_SLAVE2_CONFIG                0x0A
  const LSM6DS3_ACC_GYRO_SLV3_ADD                     0x0B
  const LSM6DS3_ACC_GYRO_SLV3_SUBADD                  0x0C
  const LSM6DS3_ACC_GYRO_SLAVE3_CONFIG                0x0D
  const LSM6DS3_ACC_GYRO_DATAWRITE_SRC_MODE_SUB_SLV0  0x0E
  const LSM6DS3_ACC_GYRO_CONFIG_PEDO_THS_MIN          0x0F
  const LSM6DS3_ACC_GYRO_CONFIG_TILT_IIR              0x10
  const LSM6DS3_ACC_GYRO_CONFIG_TILT_ACOS             0x11
  const LSM6DS3_ACC_GYRO_CONFIG_TILT_WTIME            0x12
  const LSM6DS3_ACC_GYRO_SM_STEP_THS                  0x13
  const LSM6DS3_ACC_GYRO_MAG_SI_XX                    0x24
  const LSM6DS3_ACC_GYRO_MAG_SI_XY                    0x25
  const LSM6DS3_ACC_GYRO_MAG_SI_XZ                    0x26
  const LSM6DS3_ACC_GYRO_MAG_SI_YX                    0x27
  const LSM6DS3_ACC_GYRO_MAG_SI_YY                    0x28
  const LSM6DS3_ACC_GYRO_MAG_SI_YZ                    0x29
  const LSM6DS3_ACC_GYRO_MAG_SI_ZX                    0x2A
  const LSM6DS3_ACC_GYRO_MAG_SI_ZY                    0x2B
  const LSM6DS3_ACC_GYRO_MAG_SI_ZZ                    0x2C
  const LSM6DS3_ACC_GYRO_MAG_OFFX_L                   0x2D
  const LSM6DS3_ACC_GYRO_MAG_OFFX_H                   0x2E
  const LSM6DS3_ACC_GYRO_MAG_OFFY_L                   0x2F
  const LSM6DS3_ACC_GYRO_MAG_OFFY_H                   0x30
  const LSM6DS3_ACC_GYRO_MAG_OFFZ_L                   0x31
  const LSM6DS3_ACC_GYRO_MAG_OFFZ_H                   0x32

  /*******************************************************************************
  * Register      : TEST_PAGE
  * Address       : 0X00
  * Bit Group Name: FLASH_PAGE
  * Permission    : RW
  *******************************************************************************/
  const FLASH_PAGE    0x40
 
  //% weight=41 blockGap=8 blockId="accelX" block="accelX"    
  export function accelX(): number
  {
    return 5200
  }
}
