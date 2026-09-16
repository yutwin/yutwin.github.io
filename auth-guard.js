// Redirects to the login splash page if the site password hasn't been entered yet.
// Same deterrent-not-security-boundary spirit as Mom Mode in index.html - this is a
// static site, so there's no real way to hide protected content from a determined visitor
// who reads the JS. It just keeps casual visitors out.
(function () {
    if (localStorage.getItem('siteAuthenticated') === 'true') return;
    var here = location.pathname.split('/').pop() || 'index.html';
    location.replace('login.html?redirect=' + encodeURIComponent(here + location.search));
})();
