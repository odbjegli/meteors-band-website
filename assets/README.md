# METEORS Assets

This folder stores local media for the static METEORS website.

## Supplied Images

- `images/meteors-background.png`: atmospheric cosmic background for full-width visual sections, contact, and media breaks. Recommended use: wide background image with a dark readability overlay.
- `images/meteors-banner.png`: primary hero and promotional banner. Recommended use: desktop hero artwork and wide promotional placements.
- `images/meteors-poster-square.png`: square poster artwork for release, social, and gallery usage.
- `images/meteors-poster-landscape.png`: landscape poster artwork for featured media, performance promotion, and gallery usage.

Do not crop, stretch, recolor, overwrite, or permanently modify the supplied artwork without explicit approval.

## Recommended Future Filenames

- `images/member-name.jpg`
- `images/live-performance-01.jpg`
- `images/studio-session-01.jpg`
- `images/video-thumbnail-01.jpg`
- `audio/track-title.mp3`
- `video/meteors-live-clip.mp4`

## Recommended Dimensions

- Band member photos: 1200x1200 or larger square images
- Live photos: 1800x1200 or larger landscape images
- Studio photos: 1800x1200 or larger landscape images
- Video thumbnails: 1920x1080
- Social square artwork: 1200x1200
- Wide banners: 1920x768 or wider

## Adding Band-Member Photographs

Place final photos in `assets/images/`, then replace the CSS avatar placeholder in each `.member-card` with an `<img>` element and accurate alt text.

## Adding Live Photographs

Place live photographs in `assets/images/`, then replace the gallery placeholder blocks in `index.html` with button/image elements following the existing gallery pattern.

## Adding Audio Files

Place MP3 files in `assets/audio/`. Update the Music section in `index.html` only after real audio files exist, so the page never shows broken players.

## Adding Video Thumbnails

Place thumbnail images in `assets/images/` or `assets/video/`, then update the Media section. Use official video URLs only when available.

## Replacing Placeholder Media Safely

Keep original files in place, update paths in `index.html`, preserve aspect ratios with CSS containers, and test the page at desktop and mobile widths after each replacement.
