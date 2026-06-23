import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ManageCustomRoles = () => (
	<Card>
		<CardHeader>
			<CardTitle>Custom roles</CardTitle>
		</CardHeader>
		<CardContent className="text-sm text-muted-foreground">
			Role management will use LayerRail team permissions.
		</CardContent>
	</Card>
);
