import { pool } from "../db.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {SECRETKEYPASSWORD} from '../config.js'


export const registrarUsuario = async(req,res)=>{
    try {
        const {name, email, password} = req.body
        const passwordHash = await bcrypt.hash(password, 10)
        const [response] = await pool.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, passwordHash])
        if(response.affectedRows === 0) return res.status(400).send({message: 'Registro invalido!!'})
        const idusers = response.insertId
        const user = {idusers, name, email}
        jwt.sign(user, SECRETKEYPASSWORD,   { expiresIn: '1h' }, (err, token) => {
            if (err) return console.log(err);
            res.cookie('token', token);
            res.status(200).send({ idusers, name, email });
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({message:error.message})
    }
}

export const iniciarSesion = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const [response] = await pool.query('SELECT * FROM users WHERE email= ?', [email]);
        if (response.length === 0) {
            console.log('User not found');
            return res.status(404).send({ message: "User no encontrado" });
        }
        
        const user = response[0];

        const isMatch = await bcrypt.compare(password, user.password);
        

        if (!isMatch) {
            console.log('Invalid credentials');
            return res.status(401).send({ message: "Credenciales invalidas" });
        }
        delete user.password;

        jwt.sign(user, SECRETKEYPASSWORD, { expiresIn: '1h' }, (err, token) => {
            if (err) {
                console.log(`JWT Error: ${err}`);
                return res.status(500).send({ message: "Error al generar el token" });
            }
            res.cookie('token', token);
            res.status(200).send(user);
        });
    } catch (error) {
        console.log(`Error: ${error.message}`);
        res.status(500).send({ message: error.message });
    }
};
export const cerrarSesion = (req,res)=>{
    res.cookie('token', '',{
    expires: new Date(0)
   })
   return res.sendStatus(200);
}

export const InfoUser = async (req, res) => {
    try {
      const { idusers } = req.user;
      const [response] = await pool.query('SELECT * FROM users WHERE idusers = ?', [idusers]);
      if (response.length === 0) return res.status(404).send({ message: 'Usuario no encontrado' });
      res.status(200).send(response[0]);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };