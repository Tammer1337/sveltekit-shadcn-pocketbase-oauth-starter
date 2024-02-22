# SvelteKit + Pocketbase + Shadcn-Svelte Starter

This project is a boilerplate for a SvelteKit application with Pocketbase OAuth2 integration. For the start it only uses Google, but you can add all OAuth provider supported by Pocketbase. Please take note of the  [Pocketbase section](#Pocketbase) if you want to edit or add providers. 

It also includes Tailwind CSS for styling, Shadcn-Svelte for additional UI components, and Lucide Icons for iconography.

![Example Screenshot](https://github.com/Tammer1337/sveltekit-shadcn-pocketbase-oauth-starter/blob/main/static/RUJ2bLZMdh.png)

# Env
Create a .env file in the root directory of the repo and populate it with the following:

```
PUBLIC_REDIRECT_URI="http://localhost:5173/login" # default
PUBLIC_PB_URL="http://127.0.0.1:8090" # default
```

# Pocketbase

During OAuth, the Google avatar is fetched and saved in the Pocketbase column `oauthImage` (type URL). If you don't want to extract this information the normal fallback behavior from [Shadcn-svelte avatar component](https://www.shadcn-svelte.com/docs/components/avatar) applies. If you want to use another OAuth provider, make sure to update the files in [/signin](https://github.com/Tammer1337/sveltekit-shadcn-pocketbase-oauth-starter/tree/main/src/routes/(app)/signin) accordingly.

## Acknowledgements

This project is based on the [pocketbase-sveltekit-oauth-demo repository by AdrianGonz97](https://github.com/AdrianGonz97/pocketbase-sveltekit-oauth-demo).
