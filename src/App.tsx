import { Button } from "./components/Button"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"

function App() {
  return <div>
    <Button variant="primary" text="add content" startIcon={<PlusIcon/>}></Button> 
    <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon/>}></Button>
  </div>
}

export default App
 