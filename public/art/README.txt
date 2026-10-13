Put your 3D renders and turntable videos here.

Files in this folder are served from /art/, so
  public/art/knight-bust.jpg  ->  '/art/knight-bust.jpg'

Reference them in src/data/projects.ts:

  media: [
    { type: 'image', src: '/art/knight-bust.jpg', alt: 'Knight bust, front view' },
    { type: 'video', src: '/art/turntable.mp4', poster: '/art/turntable.jpg',
      alt: 'Turntable of the knight bust' },
  ]

Always write a real `alt` description — it's what screen readers and
search engines see, and it shows if an image fails to load.

Tips:
- Export stills as JPEG around 1600px wide. Anything larger just makes
  the page slow; the layout never shows them bigger than ~800px.
- For turntables, MP4 (H.264) plays everywhere. Keep them short and
  under a few megabytes.
- Give every video a `poster` image, otherwise mobile browsers show
  a blank grey box until it loads.

The placeholder-*.svg files are stand-ins. Delete them once you've
added your own work.
