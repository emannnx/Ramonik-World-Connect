// /lib/mongodb.ts
import { MongoClient } from "mongodb";

declare global {
  // allow global var reuse in dev (hot reload)
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const uri = process.env.MONGODB_URI!;
if (!uri) {
  throw new Error("❌ MONGODB_URI is missing. Add it to .env.local");
}

const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, create a new client for each instance (no global)
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
