WEB STATIC HOSTING
==================

This project is to host some of resources including html, css, js, jade, less, coffee-script, etc.
when you want to test html without creating web service you can use this project.

features
========

- hosting resource files ( html, css, js, jade, less, coffee-script )
- that's it.


Usage
=====

```
$> npm install -g web-hosting
$> mkdir public
$> mkdir public/css
$> mkdir public/less
$> cat > public/index.jade <<EOF
doctype
html
  head
    title test
  body
  h1 this is web-hosting
EOF
$> web-static-hosting 
```

it is easy to use.




