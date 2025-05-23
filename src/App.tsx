import { Button } from "./components/ui/button";
import { Navigation } from "./Navigation";
import { ServerInfo } from "./ServerInfo";

const App = () => {
	return (
		<div>
			<Navigation />
			<p>hello world</p>
			<ServerInfo />
			<Button type="button" variant="ghost">
				push
			</Button>
			<Button type="button" variant="ghost">
				pull
			</Button>
		</div>
	);
};

export default App;
