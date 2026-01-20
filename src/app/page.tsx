/**
 * Gatsby Grace - Main Landing Page
 *
 * Starting point: just the animated gradient background.
 * We'll layer everything else on top, one decision at a time.
 */

import ShaderBackground from "../components/ShaderBackground";
import SyncstreamWidget from "./components/SyncstreamWidget";

export default function Home() {
  return (
    <ShaderBackground>
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <SyncstreamWidget
            campaignId="demo-campaign-id"
            spotifyLink="spotify:track:4cOdK2wGLETKBW3PvgPWqT"
            signInRequired={false}
          />
        </div>
      </main>
    </ShaderBackground>
  );
}
