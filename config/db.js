const { Sequelize} = require("sequelize")
 const DB_NAME="ngo"
const DB_USER="root"
const DB_PASSWORD="TVerma@323"
const DB_HOST="localhost"




const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD,{
    
    host:DB_HOST,
    dialect:"mysql",
    logging:false
}
)
 
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
  sequelize.sync({ force: false })
    .catch(err => console.error('Error syncing the database:', err));
module.exports = sequelize;

