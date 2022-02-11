import { client } from "./index.js"
import express from "express"


const router = express.Router();
export const musicRouter = router;

//  request to fetch all songs

router.route("/allsongs").get(async (request, response) => {
    const allSongsData = await client.db("music").collection("album").find({}).toArray();
    console.log(allSongsData)
    response.send(allSongsData);
})

