import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;

if (!uri) throw new Error("Please Add A Uri in the .env.local!")

const client = new MongoClient(uri);

const clientPromise = client.connect();

export default clientPromise;