import { Router } from "express";
import {cerrarSesion, iniciarSesion, InfoUser, registrarUsuario} from '../controllers/authController.js'
import { authRequired } from "../validateToken.js";
const routerAuth = Router();
routerAuth.post('/register', registrarUsuario)
routerAuth.post('/login', iniciarSesion) 
routerAuth.post('/logout', cerrarSesion)
routerAuth.post('/infoUser', authRequired, InfoUser)
export default routerAuth