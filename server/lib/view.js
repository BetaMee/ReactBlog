function renderFullPage(html, initiaState) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>十二棵橡树</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <style>
      body{
          margin:0px;
      }
      </style>
    </head>
    <body>
      <div id="root">
        <div>
          ${html}
        </div>
      </div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initiaState)};
      </script>
      <script src="/js/client.bundle.js"></script>
    </body>
    </html>
  `;
}


module.exports = renderFullPage;
