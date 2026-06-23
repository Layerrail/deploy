import { addLayerRail DeployNetworkToRoot } from "@LayerRail Deploy/server";
import { describe, expect, it } from "vitest";

describe("addLayerRail DeployNetworkToRoot", () => {
	it("should create network object if networks is undefined", () => {
		const result = addLayerRail DeployNetworkToRoot(undefined);
		expect(result).toEqual({ "LayerRail Deploy-network": { external: true } });
	});

	it("should add network to an empty object", () => {
		const result = addLayerRail DeployNetworkToRoot({});
		expect(result).toEqual({ "LayerRail Deploy-network": { external: true } });
	});

	it("should not modify existing network configuration", () => {
		const existing = { "LayerRail Deploy-network": { external: false } };
		const result = addLayerRail DeployNetworkToRoot(existing);
		expect(result).toEqual({ "LayerRail Deploy-network": { external: true } });
	});

	it("should add network alongside existing networks", () => {
		const existing = { "other-network": { external: true } };
		const result = addLayerRail DeployNetworkToRoot(existing);
		expect(result).toEqual({
			"other-network": { external: true },
			"LayerRail Deploy-network": { external: true },
		});
	});
});
