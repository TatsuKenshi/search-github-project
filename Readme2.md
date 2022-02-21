- pages
- - - Authwrapper
- - - Dashboard/Homepage
- - - Error
- - - Login
- - - Private Route
- components
- - - Navbar
- - - Search
- - - Info (stats - followers, following, gists, repos)
- - - User
- - - - - Card (user profile)
- - - - - Followers
- - - Repos
- - - - - Bar3d
- - - - - Column3d
- - - - - Doughnut2d
- - - - - Pie3d
- context
- - - context.js
- data
- - - static followers
- - - static repos
- - - static user
- pics
- - - login image
- - - loader gif

=================================================

- stuff to install
- - - auth0
- - - axios
- - - fusion charts
- - - styled components
- - - react icons

package.json
{
"name": "github-search",
"version": "0.1.0",
"private": true,
"dependencies": {
"@auth0/auth0-react": "^1.0.0",
"@testing-library/jest-dom": "^4.2.4",
"@testing-library/react": "^9.5.0",
"@testing-library/user-event": "^7.2.1",
"axios": "^0.19.2",
"fusioncharts": "^3.15.1-sr.1",
"react": "^16.13.1",
"react-dom": "^16.13.1",
"react-fusioncharts": "^3.1.2",
"react-icons": "^3.10.0",
"react-router-dom": "^5.2.0",
"react-scripts": "3.4.1",
"styled-components": "^5.1.1"
},
"scripts": {
"start": "react-scripts start",
"build": "CI= react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
},
"eslintConfig": {
"extends": "react-app"
},
"browserslist": {
"production": [
">0.2%",
"not dead",
"not op_mini all"
],
"development": [
"last 1 chrome version",
"last 1 firefox version",
"last 1 safari version"
]
}
}

=================================================
John's Readme

## Starter Project

- css provided (global styles, styled components)
- folders/files already setup
- all imports included (warnings)
- index.js for easier imports

## Styled Components

[Styled-Components - Main Docs](https://styled-components.com/)

```jsx
import styled from "styled-components";

const ReactComponent = () => {
 // logic here
 return <Wrapper>
 {some content}
 </Wrapper>
}


const Wrapper = styled.htmlElement`
write your styles here
`
export default ReactComponent
```

## React Icons

[React Icons - Main Docs](https://react-icons.github.io/react-icons/)

```jsx
import { FiUsers, FiUserPlus } from "react-icons/fi";
<FiUsers className="nameOfTheClass"> </FiUsers>;
```

## React Router Dom

version used - "react-router-dom": "^5.2.0",

- [react-router-dom - Main Docs](https://reactrouter.com/web/guides/quick-start)

- <Switch> renders the first child <Route> that matches
- A <Route path="*"> always matches

## Gihthub API

- [Root Endpoint](https://api.github.com)
- [Get User](https://api.github.com/users/wesbos)
- [Repos](https://api.github.com/users/john-smilga/repos?per_page=100)
- [Followers](https://api.github.com/users/john-smilga/followers)
- [Rate Limit](https://api.github.com/rate_limit)

  For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.

## Fusion Charts

- [Fusion Charts - Main Docs](https://www.fusioncharts.com/)
- [First React Chart](https://www.fusioncharts.com/dev/getting-started/react/your-first-chart-using-react)
- [List Of Charts](https://www.fusioncharts.com/dev/chart-guide/list-of-charts)
- [Themes](https://www.fusioncharts.com/dev/themes/introduction-to-themes)

## Auth0

- [Auth0 - Main Docs](https://auth0.com/)

- Create Application
- Choose : Single Page Web Applications
- Choose : React
- Go to Settings Tab
- Copy/Paste Domain, ClientID - can be public (or use .env)
- Add Domain -
  for now http://localhost:3000 (DON'T COPY PASTE FROM URL BAR)

  - Allowed Callback URLs
  - Allowed Logout URLs
  - Allowed Web Origins
  - SAVE CHANGES!!!!!!!!!!!!!!!

- Connections
  email,social

- [React SDK Docs](https://auth0.com/docs/libraries/auth0-react)
- [REACT SDK API Docs](https://auth0.github.io/auth0-react/)

## Deployment

[Netlify](https://www.netlify.com/)

## Additional Info

#### Redirects with react-router-dom

In order for routing to work on netlify, redirects was added to the public folder

- \_redirects file in public

```

/*    /index.html   200

```

[Redirects Blog Post](https://dev.to/dance2die/page-not-found-on-netlify-with-react-router-58mc)

#### Warnings and create-react-app

package.json

```js
"build": "CI= react-scripts build",
```

[create-react-app Warning Fix Blog Post](https://community.netlify.com/t/how-to-fix-build-failures-with-create-react-app-in-production/17752)
