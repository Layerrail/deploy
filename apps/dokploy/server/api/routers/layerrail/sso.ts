import { createTRPCRouter, publicProcedure } from "../../trpc";

export const ssoRouter = createTRPCRouter({
	showSignInWithSSO: publicProcedure.query(() => false),
});
