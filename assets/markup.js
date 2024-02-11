export const getRandomImageMarkup = () => {
  const images = [
    "https://lh3.googleusercontent.com/Xtf7YrzThRSbnHqUXHAGqwaUlRQ9X2zBA8ZiIJUkpMAjFMgvA1AnBfYzsjRWgGAnUPPrHIl60iJ6iJMPz1kthCfY58euKuArT79D8dE",
    "https://www.okx.com/cdn/nft/files/ffe6d963-f11b-4d98-950a-89ba067fde14.webp/type=detail?x-oss-process=image/resize,w_784,type_6/ignore-error,1",
  ];

  // Get the current date
  const currentDate = new Date();
  // Use the date to determine the index of the image to display
  const imageIndex = currentDate.getDate() % images.length;

export const getRandomImageMarkupWithScript = (imageUrl) => {
  return `<html lang="en">
            <head>
              <title>Minimalist Frame - A</title>
              <meta property="fc:frame" content="vNext" />
              <meta
                property="fc:frame:image"
                content="${imageUrl}"
              />
              <meta
                property="og:image"
                content="${imageUrl}"
                id="ogImage"
              />
              <script>
                document.getElementById('ogImage').setAttribute('content', '${imageUrl}');
              </script>
            </head>
            <body>
              <h1>Minimalist Frame - A</h1>
            </body>
          </html>`;
};
  
export const b = `<html lang="en">
<head>
  <title>Minimalist Frame - B</title>
  <meta property="fc:frame" content="vNext" />
  <meta
    property="fc:frame:image"
    content="https://minimalist-frame.vercel.app/img/b.gif"
  />
  <meta property="og:image" content="https://minimalist-frame.vercel.app/img/b.png" />
  <meta property="fc:frame:image:aspect_ratio" content="1:1" />
  <meta property="fc:frame:button:1" content="Go to A" />
  <meta property="fc:frame:button:2" content="Go to C" />
  <meta property="fc:frame:button:3" content="View source code" />
  <meta property="fc:frame:button:3:action" content="link" />
  <meta
    property="fc:frame:button:3:target"
    content="https://github.com/InsideTheSim/minimalist-frame"
  />
  <meta
    property="fc:frame:post_url"
    content="https://minimalist-frame.vercel.app/api/frame-b"
  />
</head>
<body>
  <h1>Minimalist Frame - B</h1>
</body>
</html>`

export const c = `<html lang="en">
<head>
  <title>Minimalist Frame - C</title>
  <meta property="fc:frame" content="vNext" />
  <meta
    property="fc:frame:image"
    content="https://minimalist-frame.vercel.app/img/c.gif"
  />
  <meta property="og:image" content="https://minimalist-frame.vercel.app/img/c.png" />
  <meta property="fc:frame:image:aspect_ratio" content="1:1" />
  <meta property="fc:frame:button:1" content="Go to A" />
  <meta property="fc:frame:button:2" content="Go to B" />
  <meta property="fc:frame:button:3" content="View source code" />
  <meta property="fc:frame:button:3:action" content="link" />
  <meta
    property="fc:frame:button:3:target"
    content="https://github.com/InsideTheSim/minimalist-frame"
  />
  <meta
    property="fc:frame:post_url"
    content="https://minimalist-frame.vercel.app/api/frame-c"
  />
</head>
<body>
  <h1>Minimalist Frame - C</h1>
</body>
</html>
`
