import { Button } from "./components/Button"
import { Card } from "./components/Card"
import { CreateContentModal } from "./components/CreateContentModal"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"

function App() {
  return (
    <div className="p-4">
      <CreateContentModal open={true} />

      <div className="flex justify-end gap-4">
        <Button
          variant="primary"
          text="Add content"
          startIcon={<PlusIcon />}
        />
        <Button
          variant="secondary"
          text="Share button"
          startIcon={<ShareIcon />}
        />
      </div>

      <div className="flex gap-4">
        <Card
          type="twitter"
          link="https://x.com/kirat_tw/status/1633685473821425666"
          title="First tweet"
        />
        <Card
          type="youtube"
          link="https://www.youtube.com/watch?v=k0bBmv45bNQ"
          title="YouTube Video"
        />
      </div>
    </div>
  );
}

export default App;