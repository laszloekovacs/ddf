import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";

export const ServerInfo = () => (
	<HoverCard openDelay={0}>
		<HoverCardTrigger>server info</HoverCardTrigger>
		<HoverCardContent>It's down, not working.</HoverCardContent>
	</HoverCard>
)
