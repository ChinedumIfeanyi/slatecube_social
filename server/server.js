import app from './app'

import Route from "./routes"


const PORT = process.env.PORT || 7000



//User auth 
app.use('/auth', Route.userRoute)






app.listen(PORT, ()=> console.log(`server booted @ ${PORT}`))