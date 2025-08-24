import { ShareIcon } from "../icons/ShareIcon";

interface CardProps{
    title: string;
    link: string;
    type: "twitter" | "youtube";
}
export function Card({title, link, type}: CardProps){
    return (
        <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200 w-full max-w-md mx-auto my-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center text-md font-medium text-gray-700">
                    <div className="text-gray-500 pr-2">
                        <ShareIcon />
                    </div>
                    {title}
                </div>
                <div className="flex space-x-2">
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <ShareIcon />
                    </a>
                </div>
            </div>
            
            {/* Content */}
            <div className="w-full overflow-hidden rounded">
                {type === "youtube" && (
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe 
                            className="w-full h-full" 
                            src={link.replace("watch", "embed").replace("?v=", "/")} 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen>
                        </iframe>
                    </div>
                )}
                {type === "twitter" && (
                    <div className="min-h-[300px] flex items-center justify-center bg-gray-50">
                        <blockquote className="twitter-tweet w-full">
                            <a href={link.replace("x.com", "twitter.com")}></a>
                        </blockquote>
                    </div>
                )}
            </div>
        </div>
    )
}