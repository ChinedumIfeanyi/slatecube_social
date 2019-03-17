import { Router } from 'express'
import UserCtrl from '../controllers/UserCtrl'

const userRoute = Router()

userRoute.route('/login')
.post(UserCtrl.login)

userRoute.route('/register')
.post(UserCtrl.register)


export default userRoute