import { Client, Account } from "appwrite";

const client = new Client()
.setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("694fc522002e9638cf21"); // 👈 इथे project ID

export const account = new Account(client);