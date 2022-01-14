const dotenv=require('dotenv');
const router=require("./routes")
const app=require('./config/server');

dotenv.config()

app.use('/api',router)

app.listen(app.get("port"), () => {
  console.log(`App listening at http://localhost:${app.get("port")}`);
});