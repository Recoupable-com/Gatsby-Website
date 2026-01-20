"use client";

/**
 * SyncstreamWidget.tsx
 * 
 * A client-side wrapper component for Syncstream integration.
 * This component handles Spotify/Apple Music authentication and playback.
 * 
 * Required: "use client" directive because Syncstream uses React hooks
 * that only work in browser environment.
 */

import { SyncstreamProvider, OneTap } from "@syncstreamai/syncstream";
// Import Syncstream's CSS for proper widget styling
import "@syncstreamai/syncstream/dist/index.css";

// Define props for the widget to make it configurable
type SyncstreamWidgetProps = {
  campaignId: string; // Your Syncstream campaign ID
  spotifyLink: string; // Spotify URI for the track/album/playlist
  appleLink?: string; // Optional Apple Music link
  signInRequired?: boolean; // Whether users must sign in to access content
};

/**
 * SyncstreamWidget
 * 
 * Wraps the SyncstreamProvider and OneTap components together.
 * Use this component anywhere you want to add music authentication/playback.
 * 
 * @example
 * <SyncstreamWidget
 *   campaignId="your-campaign-id"
 *   spotifyLink="spotify:track:4cOdK2wGLETKBW3PvgPWqT"
 * />
 */
export default function SyncstreamWidget({
  campaignId,
  spotifyLink,
  appleLink,
  signInRequired = false,
}: SyncstreamWidgetProps) {
  return (
    // SyncstreamProvider manages all authentication state and playback
    <SyncstreamProvider campaignId={campaignId} signInRequired={signInRequired}>
      {/* OneTap is the drop-in widget that shows login buttons and player */}
      <OneTap
        spotifyDefaultLink={spotifyLink as any} // The Spotify content to play
        appleDefaultLink={appleLink} // Optional Apple Music content
      />
    </SyncstreamProvider>
  );
}
