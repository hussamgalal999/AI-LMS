import { db } from "@/configs/db";
import { inngest } from "./client";
import { USER_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);


export const CreateNewUser = inngest.createFunction(

  { id: 'create-user' },
  { event: 'user.create' },
  async ({ event, step }) => {
    const {user} = event.data;
    const result = await step.run('Check User and create new if Not in DB', async () => {
      // Check If User Already Exist
      const result = await db.select().from(USER_TABLE)
        .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress)) // Query to get user from DB
      console.log(result);
      if (result?.length == 0) {
        // Is Not, Then add to DB
        const UserResp = await db.insert(USER_TABLE).values({
          name: user?.fullName, //Full name from clerk. 
          email: user?.primaryEmailAddress?.emailAddress // email address from Primary Email.
        }).returning({ id: USER_TABLE.id }) // Stores id to UserResp
        console.log(UserResp);
        return UserResp;
        
      }
      return result;
    })

    return 'Success';
  }

  // Step is to Send Welcome Email notification 

  // Step to Send Email notification After 3 days

)
