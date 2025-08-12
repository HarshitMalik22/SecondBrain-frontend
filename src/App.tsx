
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {
  return (
    <div className="p-8">
        <div className="flex flex-row gap-4">
            <Button startIcon={<PlusIcon size="lg" />} variant="primary" size="sm" text="Share" onClick={() => console.log('Share clicked')} />
            <Button variant="secondary" size="md" text="Add Content" onClick={() => console.log('Add Content clicked')} />
        </div>
    </div>
  )
}

export default App
