// JavaScript Assincrono
// await async
// Fullfilled

import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://lipekockmendonca:ROTxipCouWwpKfVM@cluster0.b7rfk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
