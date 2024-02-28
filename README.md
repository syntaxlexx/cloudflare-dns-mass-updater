# CloudFlare DNS Mass-Updater
A Cloudflare DNS updater tool to mass-update records

## Getting Started
- Install [CloudFlare Tools](https://cloudflare-utils.cyberjake.xyz/). 
  - Download from the [Releases](https://github.com/Cyb3r-Jak3/cloudflare-utils/releases) page
- Generate an `api-token` from your [CloudFlare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
- Use the api-token in successive requests to the API
- Alternatively, set the following in your `bashrc` or `zshrc` file

```bash
export CLOUDFLARE_API_TOKEN=MyVeryLongToken
```
> NB: remember to run `source ~/.bashrc` or `source ~/.zshrc`

## Download DNS (YML)
Run the following command to download existing DNS config
> NB: ensure you copy the `zone-id` from cloudflare dashboard unser the selected domain

```bash
cloudflare-utils --zone-id domain-zone-id dns-cleaner download
```

It will download `dns-records.yml` on the current directory.

## Updating the YML file
In the `yml` file, every record block is structured in this way:

```yml
  - id: egfoebfewfwfwef
    keep: true
    name: acelords.com
    type: A
    content: 127.0.0.1
```

Setting the `keep: true` to `keep: false` shall delete it form the CLoudFlare DNS.

Some of these records can be as many as 700+, and thus can be tedious doing it manually.

### Updating it, the Node way
The file `index.js` contains a variable named `validDns` that accepts a `string` of valid `domain addresses`.
- Update it as you deem fit.
- Once done, run 
```bash
node index.js
```
- The 'fixed' DNSs will be located under a new file `dns-fixed.yml`.
- do a quick check on the `dns-fixed.yml` file to confirm it's good
- copy-paste its contents back to `dns-records.yml`. (There's a new `--filename` you can check on how to use it in the [docs](https://github.com/Cyb3r-Jak3/cloudflare-utils). Am just lazy as it's a one-off thing)

Time to upload the changes!

## Upload Changes to CloudFlare DNS
Run the following command to update the DNS records. This might take a while to complete.

```bash
cloudflare-utils --zone-id my-domain-zone-id  dns-cleaner upload
```

You may read up more on the docs for extra options like a `--dry-run` or something.

## Credits
- [Let's Connect on Twitter: SyntaxLexx](https://twitter.com/syntaxlexx)
- [Reach Out: syntaxlexx@gmail.com](mailto:syntaxlexx@gmail.com)
