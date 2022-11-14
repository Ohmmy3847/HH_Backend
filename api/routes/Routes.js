const taskBuilder = require("../controllers/Controller");
module.exports = (app) => {
  app
    .route("/Data")
    .get(taskBuilder.list_all_datas)
 
    
};
