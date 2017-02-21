function renderFullPage(html, initiaState) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
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
