import jwt from "jsonwebtoken"
import { SECRETKEYPASSWORD } from "./config.js"

export const authRequired = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: 'Acceso Denegado no existe Token' });
  try {
    const verified = jwt.verify(token, SECRETKEYPASSWORD);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Token Invalido' });
  }
};