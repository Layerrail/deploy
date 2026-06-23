import { createTRPCRouter, protectedProcedure } from "../../trpc";

export const licenseKeyRouter = createTRPCRouter({
	haveValidLicenseKey: protectedProcedure.query(() => true),
});
