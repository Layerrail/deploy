import { exec } from "node:child_process";
import { exit } from "node:process";
import { promisify } from "node:util";

const execAsync = promisify(exec);

import { setupDirectories } from "@LayerRail Deploy/server/setup/config-paths";
import { initializePostgres } from "@LayerRail Deploy/server/setup/postgres-setup";
import { initializeRedis } from "@LayerRail Deploy/server/setup/redis-setup";
import {
	initializeNetwork,
	initializeSwarm,
} from "@LayerRail Deploy/server/setup/setup";
import {
	createDefaultMiddlewares,
	createDefaultServerTraefikConfig,
	createDefaultTraefikConfig,
	initializeStandaloneTraefik,
	TRAEFIK_VERSION,
} from "@LayerRail Deploy/server/setup/traefik-setup";

(async () => {
	try {
		setupDirectories();
		createDefaultMiddlewares();
		await initializeSwarm();
		await initializeNetwork();
		createDefaultTraefikConfig();
		createDefaultServerTraefikConfig();
		await execAsync(`docker pull traefik:v${TRAEFIK_VERSION}`);
		await initializeStandaloneTraefik();
		await initializeRedis();
		await initializePostgres();
		console.log("LayerRail Deploy setup completed");
		exit(0);
	} catch (e) {
		console.error("Error in LayerRail Deploy setup", e);
	}
})();
