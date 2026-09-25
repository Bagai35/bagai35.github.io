# BAGAI35 Synthwave Personal Portfolio v2

## Files

- index.html
- style.css
- assets/avatar.jpg

## First things to edit

In `index.html` replace:

1. `BAGAI35` with your preferred nickname/name.
2. `YOUR_USERNAME` in Telegram.
3. `YOUR_USERNAME` in Instagram.
4. `YOUR_ID` / `YOUR_USERNAME` in Discord.
5. `YOUR_USERNAME` in GitHub.
6. Project names/descriptions/links.
7. About Me text.

Put your photo at:

assets/avatar.jpg

The page works without the photo too: it will show a neon `YOUR PHOTO` placeholder.

## Local test

Open `index.html` directly in a browser.

Or run:

python3 -m http.server 8080

Then open:

http://localhost:8080

## Nginx

Copy the project to:

/var/www/simple-site

and point Nginx `root` there.

For the public IP/hostname, configure MikroTik port forwarding for TCP 80 to the server.
