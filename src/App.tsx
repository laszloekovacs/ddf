import { Button } from "./components/ui/button"
import { Navigation } from "./Navigation"

const App = () => {

    return (
        <div>
            <Navigation />
            <p>hello world</p>

            <Button type="button" variant="ghost">push</Button>
            <Button type="button" variant="ghost">pull</Button>
        </div>
    )
}

export default App