export const ENABLE_BACKGROUND = true;

export function BackgroundEffect() {
  if (!ENABLE_BACKGROUND) {
    return null;
  }

  return (
    <div className="background-blobs" aria-hidden="true">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="background-overlay" />
    </div>
  );
}
