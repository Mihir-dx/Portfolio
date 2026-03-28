import { useRef } from "react";
import { Maximize2 } from "lucide-react";

interface ModelProps {
  src: string;
  poster?: string;
}

const ModelViewer = ({ src, poster }: ModelProps) => {
  const modelRef = useRef<any>(null);

  const toggleFullscreen = () => {
    if (modelRef.current) {
      // model-viewer has a built-in presentPoster() or you can use the browser API
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        modelRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden bg-muted/20 group">
      <model-viewer
        ref={modelRef}
        src={src}
        poster={poster}
        alt="Interactive 3D Model"
        auto-rotate
        camera-controls
        shadow-intensity="1"
        environment-image="neutral"
        exposure="1.2"
        style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
      >
        {/* Fullscreen Button - Only visible on hover */}
        <button
          onClick={toggleFullscreen}
          className="absolute bottom-4 right-4 p-2 bg-background/80 hover:bg-primary hover:text-primary-foreground backdrop-blur-sm rounded-lg transition-all opacity-0 group-hover:opacity-100 shadow-lg"
          title="View Fullscreen"
        >
          <Maximize2 className="w-5 h-5" />
        </button>
      </model-viewer>
    </div>
  );
};

export default ModelViewer;