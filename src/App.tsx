
import './App.css'
import { Button } from './components/ui/Button'

function App() {
  return (
    <div className="p-8">
        <div className="space-y-4">
            <Button variant="primary" size="md" text="Share" onClick={() => console.log('Share clicked')} />
            <Button variant="secondary" size="md" text="Add Content" onClick={() => console.log('Add Content clicked')} />
        </div>
    </div>
  )
}

export default App
