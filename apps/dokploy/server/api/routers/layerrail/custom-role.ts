import { createTRPCRouter, protectedProcedure } from "../../trpc";

export const customRoleRouter = createTRPCRouter({
	all: protectedProcedure.query(() => []),
});
