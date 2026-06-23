import type { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type LockedProps = {
	title?: string;
	description?: string;
	ctaLabel?: string;
};

export const EnterpriseFeatureLocked = ({
	title = "Managed by LayerRail",
	description = "This area is reserved for LayerRail Deploy platform controls.",
}: LockedProps) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent className="text-sm text-muted-foreground">
				{description}
			</CardContent>
		</Card>
	);
};

export const EnterpriseFeatureGate = ({
	children,
}: {
	children: ReactNode;
	lockedProps?: LockedProps;
}) => {
	return <>{children}</>;
};
