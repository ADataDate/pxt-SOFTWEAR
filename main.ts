//% color=#f44242 icon="\u26C8"
namespace softwear
{
  const LSM6DS3Addr                       = 0x6B
  const LSM6DS3_ACC_GYRO_TEST_PAGE  			= 0x00

  //% weight=41 blockGap=8 blockId="accelX" block="accelX"    
  export function accelX(): number
  {
    return 5200
  }
}
