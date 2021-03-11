# React-Routing

![react-private-public-route](https://github.com/ronaksonigara/react-private-public-route/workflows/react-private-public-route/badge.svg)
[![npm version](https://img.shields.io/badge/version-1.1.1-brightgreen)](https://www.npmjs.com/package/react-private-public-route)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Public and Private Routng with restricted functionality in React

### Working demo available at

[Github pages](https://ronaksonigara.github.io/react-private-public-route-example/)

Code Example available at:
[Github](https://github.com/ronaksonigara/react-private-public-route-example)

### Installation

Using [npm](https://www.npmjs.com/):

    $ npm i react-private-public-route

### Basic Usage

```js
...
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
...
import { PublicRoute, PrivateRoute } from "react-private-public-route";
import Homepage from './Homepage';
import Restricted from './Restricted';
import Login from './Login';
...

function App() {
    return (
     ...
        <Router>
            <Switch>
              <PublicRoute exact path="/login" component={Login} />
                <PublicRoute
                exact
                restricted
                redirect="/homepage"
                path="/restricted"
                component={Restricted}
                />
                <PrivateRoute
                isAuthenticated={false}
                restricted
                redirect="/login"
                path="/homepage"
                component={Homepage}
                />
            </Switch>
        </Router>
     ...
    )
}

export default App
```

## Public Route

| Props      | value Type | Defaut Value | isRequired | Description                                            |
| ---------- | ---------- | ------------ | ---------- | ------------------------------------------------------ |
| restricted | bool       | false        | -          | If set to true it will be redirected                   |
| component  | funtion    | -            | yes        | Component which needs to be rendered if not restricted |
| redirect   | string     | /            | -          | If restricted it will be redirected to this route      |

## Private Route

| Props           | value Type | Defaut Value | isRequired | Description                                                              |
| --------------- | ---------- | ------------ | ---------- | ------------------------------------------------------------------------ |
| restricted      | bool       | false        | -          | If set to true it will be redirected                                     |
| component       | funtion    | -            | yes        | Component which needs to be rendered if not Restricted and Authenticated |
| redirect        | string     | /login       | -          | If restricted on not authenticated it will be redirected to this route   |
| isAuthenticated | bool       | false        | -          | To check whether route is Authenticated                                  |

### Issues

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/ronaksonigara/react-private-public-route/issues).

### Credits

React Private Public Route is built and maintained by [@ronaksonigara](https://github.com/ronaksonigara).
