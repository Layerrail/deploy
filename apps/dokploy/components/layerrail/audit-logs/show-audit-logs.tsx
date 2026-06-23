import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ShowAuditLogs = () => (
	<Card>
		<CardHeader>
			<CardTitle>Audit logs</CardTitle>
		</CardHeader>
		<CardContent className="text-sm text-muted-foreground">
			LayerRail Deploy audit events will appear here.
		</CardContent>
	</Card>
);
