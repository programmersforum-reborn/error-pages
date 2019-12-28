// https://www.resdevops.com/2018/03/20/Cloudflare-workers-maintenance-mode-static-page/

addEventListener("fetch", event => {
    event.respondWith(fetchAndReplace(event.request))
  })
   
  async function fetchAndReplace(request) {
   
    let modifiedHeaders = new Headers()
   
    modifiedHeaders.set('Content-Type', 'text/html')
    modifiedHeaders.append('Pragma', 'no-cache')
  
    // Return modified response.
    return new Response(maintPage, {
        status: 503,
        headers: modifiedHeaders
    });
  }
   
  let maintPage = `
PUT_YOUR_MAINTENANCE_PAGE_HTML_HERE
  `;
