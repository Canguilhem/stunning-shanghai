// TODO add authentication
const mongoose =require('mongoose')
const dotenv = require('dotenv').config()
// Initialize connection to database
// const dbSrv = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_CLUSTER}`
const dbSrv = "mongodb+srv://classicUser:classicPassword@stunning-shanghai-cluster-qvbit.mongodb.net/test?retryWrites=true&w=majority"
const srvOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "Stunning_shanghai"
}
// Set DB from mongoose connection
mongoose.connect(dbSrv, srvOptions)
    .then(() => console.log('Connected to mongoDB Atlas cluster on ' + srvOptions.dbName))
    .catch((error) => console.log('Failed to connect to DB cause:', error) )
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
export default db