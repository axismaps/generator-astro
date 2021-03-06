# Version 4.1.0
 - Add client route middleware on component subgenerator
 
# Version 4.0.9
 - Fixed broken module alias mapper on client side
 - Removed all client side module alias mapper
 
# Version 4.0.8
 - Fixed broken integration test for service type astro:api generator, when nested api path will fail to look for the correct app index.
 - Fixed broken integration test for fullstack type astro:api generator, when it tried to look for non existent REZA_XXX folder on process.env

# Version 4.0.7
 - Fixed underscore.string vulnerable version
 - Refix test.setup on service only package.json
 - Fix moduleMapper for client on package.json by removing extra /

# Version 4.0.6
 - Fixed package.json, by removing test.setup.js from all types of project to only fullstack project.
 - Fixed collectCovarage on package.json by using props

# Version 4.0.5
 - Cleanup index.html for smaller footprints

# Version 4.0.4
 - Refactor index.html from string in src/server/config/react moved into a file in src/server/views/index.html
 - Add loading indicator and fade away once App container on client side loaded.

# Version 4.0.3
 - Replace asyncComponent with react-loadable for async component loading
 
# Version 4.0.2
 - Add support for scss
 - Refactor client boilerplate to use scss
 - Update component subgenerator to use scss

# Version 4.0.1
 - Fixes extra spaces on src/server/config/react.js
 - Fixes naming for export specifier for reducers, epics and routes.
 - Add component type choice for component subgenerator, either stateless or stateful component.

# Version 4.0.0
 - Transpiler with [Babel 6](https://babeljs.io/)
 - Rendering with [reactjs](https://reactjs.org/)
 - Component Styling with [styled-components](https://www.styled-components.com/)
 - State management with [Redux](https://redux.js.org/)
 - Redux Middleware with [redux-observable](https://redux-observable.js.org/)
 - Reactive Programming for redux-observable with [rxjs](https://github.com/ReactiveX/rxjs)
 - Routing with [react-router](https://github.com/ReactTraining/react-router)
 - Redux Routing with [react-router-redux](https://github.com/reactjs/react-router-redux)
 - Server side Routing with [react-router-dom](https://www.npmjs.com/package/react-router-dom)
 - Module bundling with HMR using [webpack](https://webpack.js.org/)
 - React DOM Testing with [react-testing-library](https://github.com/kentcdodds/react-testing-library)
 - Optional React Testing with [enzyme](https://airbnb.io/enzyme/)

# Version 3.4.0
- Uses reza to construct react+express fullstack

# Version 3.3.2
- Fixed package.json for sequelize, by removing comma dangling

# Version 3.3.1
- Changed src into optional variable that can be changed in .yo-rc.json, and user can use this as relative path for src for all subgenerators.

# Version 3.2.0
- Refactor package.json using conditional if, and deleted extra files.
- Refactor docker-compose.xxx.yml by removing duplicate files
- Update alpine to node:10-alpine
- Remove add yarn.lock on Dockerfile 
- Update celebrate and joi package
- Make port optional, so user can change them upon generation
- Changed validation into validator with joi schema
- Add nested api name when using astro:api sub generator

# Version 1.0 - 3.0.0 

Undocumented
