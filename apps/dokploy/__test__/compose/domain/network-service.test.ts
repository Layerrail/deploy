import { addLayerRail DeployNetworkToService } from "@LayerRail Deploy/server";
import { describe, expect, it } from "vitest";

describe("addLayerRail DeployNetworkToService", () => {
	it("should add network to an empty array", () => {
		const result = addLayerRail DeployNetworkToService([]);
		expect(result).toEqual(["LayerRail Deploy-network", "default"]);
	});

	it("should not add duplicate network to an array", () => {
		const result = addLayerRail DeployNetworkToService(["LayerRail Deploy-network"]);
		expect(result).toEqual(["LayerRail Deploy-network", "default"]);
	});

	it("should add network to an existing array with other networks", () => {
		const result = addLayerRail DeployNetworkToService(["other-network"]);
		expect(result).toEqual(["other-network", "LayerRail Deploy-network", "default"]);
	});

	it("should add network to an object if networks is an object", () => {
		const result = addLayerRail DeployNetworkToService({ "other-network": {} });
		expect(result).toEqual({
			"other-network": {},
			"LayerRail Deploy-network": {},
			default: {},
		});
	});

	it("should not duplicate default network when already present", () => {
		const result = addLayerRail DeployNetworkToService(["default", "LayerRail Deploy-network"]);
		expect(result).toEqual(["default", "LayerRail Deploy-network"]);
	});
});
