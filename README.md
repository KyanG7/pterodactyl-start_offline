# Pterodactyl Start Offline
While running, this node app will check to see if Pterodactyl server is offline and subsequently run the start command.

Setup
1. Download the files locally
2. Install packages via the `npm i` command.
3. Edit the `config.json` file with any text editor.
  a. api_key is a user API key created in `url/account/api` of your Pterodactyl panel.
  b. base_url is your panel's base url, however you'd access the main page of the panel.
  c. server_identifier is the ID of your Pterodactyl instance. This can be found in the website url whenever accessing the server or commonly found in the settings menu
  d. delay is the interval of which your server will be checked for being offline in seconds.
4. Run the node app with `node index.js`
