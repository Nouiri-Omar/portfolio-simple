# Portfolio Media Guide

The portfolio is a single book reader. Media is configured in `app/page.tsx` inside the `projects` array and in the `profileImage` constant near the top of that file.

## Profile picture

1. Add the image file here:

   `public/images/pfp.jpg`

2. Update this line in `app/page.tsx`:

   ```ts
   const profileImage = "/images/pfp.jpg";
   ```

The image appears in the embossed circle on the front cover. Use a square JPG, PNG, or WebP image for the cleanest crop.

## Project images

1. Add project images under:

   `public/images/projects/`

   Example:

   `public/images/projects/rag-insurance.png`

2. Add an `image` field to the matching object in the `projects` array:

   ```ts
   image: "/images/projects/rag-insurance.png",
   ```

The image appears on the right page of that project's spread. The image is cropped into a 4:3 framed plate. Use a screenshot with a clear focal area.

## Project videos

The `video` field accepts a public URL. For a hosted walkthrough, add it to the matching project object:

```ts
video: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
```

The right page will show an `Open project walkthrough` banner. The current implementation opens the video in a new tab so the book remains lightweight and does not autoplay media.

For a local video, place the file under:

`public/videos/`

Then use its public path:

```ts
video: "/videos/rag-insurance-demo.mp4",
```

A local video path is still opened by the banner. If the video needs to play inline later, the `ProjectRight` component in `app/page.tsx` is the place to replace the banner with a lazy-loaded `<video controls />` element.

## Adding a new project

Copy one object in the `projects` array and update:

- `title`, `company`, `period`, `role`, and `category`
- `summary`
- `tech`
- `palette` for the fallback illustration
- `image` for the project screenshot
- `video` for the walkthrough link
- `link` for the live project

Leave `image` or `video` empty when the asset is not ready. The book will keep the generic placeholder instead of showing a broken image or unrelated video.

## Social links and location

The LinkedIn and GitHub icon links are defined once near the top of `app/page.tsx`:

- LinkedIn: `https://www.linkedin.com/in/omar-nouiri/`
- GitHub: `https://github.com/Nouiri-Omar`

The current location text is `Casablanca, Morocco` on the cover, preface, and back cover.
