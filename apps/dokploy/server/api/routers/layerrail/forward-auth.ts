import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../../trpc";

const forwardAuthInput = z.object({
	applicationId: z.string().optional(),
	domainId: z.string().optional(),
});

export const forwardAuthRouter = createTRPCRouter({
	status: protectedProcedure.input(forwardAuthInput).query(() => ({
		enabled: false,
		configured: false,
	})),
	enable: protectedProcedure.input(forwardAuthInput).mutation(() => ({
		enabled: false,
	})),
	disable: protectedProcedure.input(forwardAuthInput).mutation(() => ({
		enabled: false,
	})),
});
