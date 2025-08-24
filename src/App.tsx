import { useEffect } from 'react';
import { Button } from "./components/Button"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"
import { Card } from "./components/Card"

function App() {
  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">My Content</h1>
          <div className="flex space-x-4">
            <Button 
              variant="primary" 
              text="Add Content" 
              startIcon={<PlusIcon/>}
            />
            <Button 
              variant="secondary" 
              text="Share Brain" 
              startIcon={<ShareIcon/>}
            />
          </div>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card 
            type="twitter" 
            link="https://twitter.com/elonmusk/status/1958835644350046213"
            title="Twitter Post"
          />
          <Card 
            type="youtube" 
            link="https://www.youtube.com/watch?v=k0bBmv45bNQ" 
            title="YouTube Video"
          />
        </div>
      </div>
    </div>
  )
}

export default App
 