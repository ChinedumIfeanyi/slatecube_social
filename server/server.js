import app from './main'

const PORT = process.env.PORT || 7000

app.listen(PORT, ()=> console.log(`server booted @ ${PORT}`))