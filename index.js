import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { musicRouter } from "./music.js";

// express connection

const server = express();
const port = process.env.PORT;
server.listen(port, () => { console.log("server is connected") });

// middleware

server.use(express.json());
server.use(cors());
server.use("/music", musicRouter);

// Mongodb Connection

const Mongo_URL = process.env.MONGO_URL
async function createConnection() {
    const client = new MongoClient(Mongo_URL);
    await client.connect();
    console.log("MongoDB is connected");
    return client;
}

export const client = await createConnection();


server.get("/", async (request, response) => {
    response.send("SUCCESSFULLY CONNECTED");
})