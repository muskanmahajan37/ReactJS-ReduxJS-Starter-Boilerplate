# ReactJS-ReduxJS-Starter-Boilerplate

Architect Enterprise ReactJS-ReduxJS-Saga-WebPack-Django-Starter-Boilerplate Web Application

#### Django Mocks as Json Server Data

#### Use Fractal Project Structure (https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure)

AKA : Self-Contained Apps, Recursive Route Hierarchy, Providers, etc

Why Architecting from day one important,
Small Apps can built with flat directory structure, like components, containers, etc.
fails to scale, fails velocity as project grows...

Large app is like large tree :evergreen_tree:,
Ex:
Trunk--> Router
Braches--> Route Bundles
Leaves--> Views (can be Common/ Shared/ Container Components)
Global app with UI --> Close to Trunk @base of hugh brach, like `/app` route

I) Routes

1. `<Route path="" component="">` --> inside `<Switch>` --> renders first matched component
2. `<Route component="">` NO path attribute --> Error Handling when no path gets Matched

   Each Route have -->
   Container Folder
   Component Folder
   Modules file (reducers, actions)
   Sagas file
   Own index file --> to define the route

3. Dont let sub router load until parent route has been loaded
   load components async then reducers sagas will be injected and available to store
   then HOCs initiates api calls for the route
   This makes code-splitting possible with small .js files, loaded on demand

II) Store

III) Layouts
Stateless components to composed react-router components into view

IV) Components
Reusable
Functional stateless

V) Containers
have data with them
connect presentational components to actions/state (NO JSX in container components)

#### Use Ducks Modular Redux (https://github.com/erikras/ducks-modular-redux)

Remeber,
You wraps your whole app inside <Provider > tag, --> attribute of `store={store}`
--> which is `CreateStore({})` --> `CombineReducer({})` --> `rootReducer` with simple `reducers`

1. Composition over Inheritance (old dependency injection concept again)
   Use Functional Compoenets where ever possible
   Keep render method as small as possible
   Put render into different components or Things get crazyyy A SIMPLE Component with One render is FINE.

Remeber,
ReactJS Doesnt Support Inheritance --> HOCs are way to do so.....

#### Webpack for ReactJS App

`
"scripts": {
"build": "webpack --mode production"
}

"scripts": {
"start": "webpack-dev-server --open --mode development",
"build": "webpack --mode production"
}`

Using HappyPack (https://github.com/amireh/happypack)
npm install --save-dev happypack

module.exports = webpackConfig;

webpackConfig.module = {}
webpackConfig.plugins = {}

#### Component Material

https://ant.design/

#### Directory Stucture

1. .happypack
2. dist --> build minimised code gets created here, after `npm build`
3. node_modules --> `npm i` or `yarn install`
4. server
5. src

   1. components
      use readymade files here directly
   2. containers
      Makes use of .propTypes and .defaultTypes for Clean code with Linting Errors like TypeScipt compile time errors....
      Lint will act upon while passing unvalidated props
      1. App
         1. App.js
            `export class AppComponent extends Component{}`
            `const mapStateToProps = (state) => ({});`
            `AppComponent.propTypes = {};`
            `export const App = connect(mapStateToProps, {})(HOCsComponentHere(AppComponent, NotFoundImportedFromComponent));`
         2. App.module.scss
            styling
      2. AppContainer
         `export function AppContainerComponent(props) {}`
         `export const AppContainer = connect(mapStateToProps)(AppContainerComponent);`

index.js----> just export all above components, thats all
`export { App } from './App/App';`

3.  HOCS
4.  images
5.  lib
6.  modules
7.  routes
8.  store
9.  styles
10. utils
11. vendors
    index.js
    reducers.js
    sagas.js

12. webpack

#### Component vs PureComponent vs Stateless Functional Component

##### when to move your code into a component, ask yourself:

i) Is your code’s functionality becoming unwieldy?
ii) Does it represent its own thing?
iii) Are you going to reuse your code?

##### If any of these question’s answer is yes, then you need to move your code into a component.

      Makes use of .propTypes and .defaultTypes for Clean code with Linting Errors like TypeScipt compile time errors....
      Lint will act upon while passing unvalidated props,
      Here assume, `userIsLoaded` is not required, so, added false in `defaultProps`,
      If it is required, then we don’t have to define a default prop for it.

##### Pure Component

export default class Profile extends PureComponent {

`static propTypes = {
userIsLoaded: PropTypes.bool,
user: PropTypes.shape({\_id: PropTypes.string,}).isRequired,
}

static defaultProps = {
userIsLoaded: false,
}

render() {
<Compo1 />
<Compo2 />
<Compo3 />
<Compo4 />
}`

}// pure component

##### Stateless Functional Component

components that are not using any kind of state, refs, or lifecycle methods.
you are defining your component as a constant function that returns some data.
In simple words, stateless functional components are just functions that return JSX.

const Billboard = () => (
`<Compo /> React <Compo />`
);

#### Passing Function to Children Components

##### Function Components

We should avoid method binding inside render because during re-rendering,
it will create the new methods instead of using the old one, that will affect the performance,

In function components, we have currently no other choice,
pass the callback directly from the props to the child component or to create an inline arrow function
`const myButton = ({ onClick }) => (<button onClick={() =>onClick({someData}) }>Click</button>);`

1. You generate a function on every render, which will obviously have a new reference.
2. If the component you pass this generated function to is extending PureComponent,
   it will not be able to bail out on rerendering, even if the actual data has not changed.

#### 1) You can force a specific value of this with a function’s call, apply and bind methods.

#### 2) If the function is an => arrow function, this is hard-wired to refer to the value of this at the location where the function was defined.

Once you’ve passed a method as a callback, you have no idea how it will be called, and thus no idea what this will be.
Solution
In an arrow function,
this means the same thing within the function body as it does outside of it.
Which means that if you use arrow functions within your component’s render or lifecycle methods,
they can use this and this.something with no surprises.

##### Arrows prevent this bugs

Arrow functions don’t redefine the value of this within their function body.
This makes it a lot easier to predict their behavior when passed as callbacks,
and prevents bugs caused by use of this within callbacks.

##### Class-Based Components

In class-based components we have a choice: either to generate an inline callback or to use a class method,

class MyComp extends Component{
constructor(props){
super(props);
this.onClick = this.onClick.bind(this);
}

onClick(){
this.props.onClick({someData});
}

render(){
return(
<Child onClick={this.onClick} />
)
}

}

# coming....

Build Enterprise ReactJS-ReduxJS-Saga-WebPack-Django-Starter-Boilerplate Web Application
