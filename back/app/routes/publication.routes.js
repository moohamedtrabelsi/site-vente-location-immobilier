const controller = require("../controllers/publication.controller");
module.exports = function(app) {

  app.post("/api/pub/add", controller.addpublication);
  app.post("/api/pub/addfav", controller.addtofav);
  app.post("/api/pub/remfav", controller.removefav);
  app.post("/api/pub/rempub", controller.deletepub);
  app.get("/api/pub/getachat", controller.getpubsachat);
  app.get("/api/pub/getloc", controller.getpubslocation);
  app.get("/api/pub/getfav", controller.myfav);
  app.get("/api/pub/mypub", controller.mypub);
  
};