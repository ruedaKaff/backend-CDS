import { Router } from "express";
const idea = Router();
import { find } from "../carrito/carrito.service.js";


idea.use(function timeLog(req, res, next) {
  next();
});

idea.get(
  "/",find
 
  //ideaTomadaModel
);

idea.get(
  "/:id",find
  
  //ideaTomadaModel
);

idea.post(
  "/",find
  
  //todasIdeas
);

idea.put(
  "/:id",find
 
  //todasIdeas
);

idea.delete(
  "/:id",find
 
  /* todasIdeas */
);

export  {
    idea
};
