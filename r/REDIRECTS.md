# Redirects

This folder is made for short redirects for selected pages, if you want to make a short redirection:

1. Make a folder with the name of the redirection you want (for example, if you want "site.com/r/folder", make a folder named "folder" inside this "r" folder).
2. Inside that folder, make an "index.html" file with the following content:

```html
<!DOCTYPE html>
<html lang="en">
<script>
location.href = "/path/to/redirect";
</script>
</html>
```
3. Change the "/path/to/redirect" to the path you want to redirect to (for example, if you want to redirect to "site.com/folder", change it to "/folder").

## Important note:

This redirection method without using a server-side redirection (like .htaccess) is not the best for SEO, you can add meta tags to make it more presentable at least.

```html
<!-- robots meta tag to prevent search engines from indexing this page -->
<meta name="robots" content="noindex, nofollow"/>

<!-- Google / Search Engine Tags -->
<meta itemprop="name" content="This Site title" />
<meta itemprop="description" content="My personal website, come and check out the last things I have done." />
<meta itemprop="image" content="banner.jpg" />

<!-- Facebook Meta Tags -->
<meta property="og:url" content="https://site.com/" />
<meta property="og:type" content="website" />
<meta property="og:title" content="This Site title" />
<meta property="og:description" content="My personal website, come and check out the last things I have done." />
<meta property="og:image" content="banner.jpg" />

<!-- Twitter Meta Tags -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="This Site title" />
<meta name="twitter:description" content="My personal website, come and check out the last things I have done." />
<meta name="twitter:image" content="banner.jpg" />
```
