import { createTRPCRouter, protectedProcedure, publicProcedure } from "../../trpc";

const layerRailBranding = {
	appName: "LayerRail Deploy",
	logo: null,
	favicon: null,
	primaryColor: null,
};

export const whitelabelingRouter = createTRPCRouter({
	get: protectedProcedure.query(() => layerRailBranding),
	getPublic: publicProcedure.query(() => layerRailBranding),
});
