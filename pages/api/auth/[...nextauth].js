import NextAuth from "next-auth"
import AzureADProvider from "next-auth/providers/azure-ad";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export const authOptions = {
  // Configure one or more authentication providers
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    AzureADProvider({
      clientId: "e56979e3-ea57-4bba-a34b-7af8cc56a41b",
      clientSecret: "86k8Q~KmO-0Pm7rU4PO2IehH5G-FYfiedmSIgcTm",
      tenantId: "38cfa998-f805-49cf-849a-5c8306f18c04",
    }),
  ]
}
export default NextAuth(authOptions)