import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || "mongodb+srv://xidesadrian:dXmtqdEoIdGBfUGH@studenttracker.y5x4u2a.mongodb.net/?retryWrites=true&w=majority&appName=StudentTracker";
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error("please add your uri in the .env.local");
}

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;