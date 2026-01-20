import SyncstreamWidget from "./components/SyncstreamWidget";

/**
 * Home Page for Gatsby Grace
 * 
 * This page demonstrates Syncstream integration for fan engagement.
 * The SyncstreamWidget handles Spotify/Apple Music authentication and playback.
 */
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
      <main className="flex min-h-screen w-full max-w-md flex-col items-center justify-center gap-8 px-6 py-16">
        {/* Artist Info Section */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Gatsby Grace
          </h1>
          <p className="text-lg text-zinc-400">
            Sign in to stream and save my music
          </p>
        </div>

        {/* Syncstream Widget - Handles authentication and playback */}
        {/* 
          TODO: Replace these with your actual values:
          - campaignId: Get this from your Syncstream dashboard
          - spotifyLink: The Spotify URI for your track, album, or playlist
          - appleLink: (Optional) Apple Music link
        */}
        <div className="w-full">
          <SyncstreamWidget
            campaignId="demo-campaign-id" // Replace with your campaign ID
            spotifyLink="spotify:track:4cOdK2wGLETKBW3PvgPWqT" // Example: Blinding Lights
            signInRequired={false}
          />
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-zinc-500">
          Powered by Syncstream
        </footer>
      </main>
    </div>
  );
}
