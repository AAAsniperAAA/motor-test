input.onButtonPressed(Button.A, function () {
    if (motor_speed_back == 0) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, motor_speed + 5)
        motor_speed += 5
    }
    if (motor_speed == 0) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, motor_speed_back - 5)
        motor_speed_back += -5
    }
})
input.onButtonPressed(Button.B, function () {
    if (motor_speed_back == 0) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, motor_speed - 5)
        motor_speed += -5
    }
    if (motor_speed == 0) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, motor_speed_back + 5)
        motor_speed_back += 5
    }
})
let motor_speed_back = 0
let motor_speed = 0
motor_speed = 0
motor_speed_back = 0
