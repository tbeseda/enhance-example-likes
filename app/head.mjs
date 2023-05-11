/** @type {import('@enhance/types').EnhanceHeadFn} */
export default function Head ({ store }) {
  const { liked } = store

  return /* html */`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Enhance + @begin/data</title>
      ${liked
        ? '<link rel="icon" href="https://fav.farm/❤️" />'
        : '<link rel="icon" href="https://fav.farm/🤍" />'
      }
      <style>
        body {
          width: 40vw;
          margin: 0 auto;
          padding: 0;
          font-family: system-ui, sans-serif;
          font-size: 18px;
        }
        button {
          border: none;
          cursor: pointer;
          font-size: 100%;
          padding: 0;
          background: none;
        }
      </style>
    </head>
`
}
