import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import { initPassport } from './config/passport.config.js';
import { router as sessionsRouter } from './routes/sessionsRouter.js';

const PORT = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initPassport()
app.use(passport.initialize())

app.use(cookieParser("CoderCoder123"))

app.use("/api/sessions", sessionsRouter)


const server = app.listen(PORT, () => {
  console.log(`Server escuchando en puerto ${PORT}`);
});

const connect = async () => {
    try {
      await mongoose.connect(
        "mongodb+srv://pablonav84:pablo1810@cluster0.1ym0zxu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        { dbName: "ecommerce"}
      );
      console.log("DB Online");
    } catch (error) {
      console.log("Fallo conexión. Detalle:", error.message);
    }
  };
  connect();