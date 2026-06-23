import { createTRPCRouter, protectedProcedure } from "../../trpc";

export const auditLogRouter = createTRPCRouter({
	all: protectedProcedure.query(() => []),
});
