import { Button } from "./components/button"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"

function App() {
  return <div>
    <Button variant="primary" text="add content" startIcon={<PlusIcon/>}></Button>
    <Button variant="secondary" text="Share" startIcon={<ShareIcon/>}></Button>
  </div>
}

export default App
 