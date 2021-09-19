import "./App.css"
import { Switch, Route } from "react-router-dom"
import Home from "./home"
import Tour from "./components/tour"
import Navbar from "./components/navbar2"
import Blog from "./components/blog"
import AllTours from "./components/allTours"
import Categories from "./components/categories"
import Category from "./components/category"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/tour/:id">
          {(routeProps) => {
            return (
              <>
                <Navbar />
                <Tour {...routeProps} />
              </>
            )
          }}
        </Route>
        <Route path="/category/:id">
          {(routeProps) => {
            return (
              <>
                <Category {...routeProps} />
              </>
            )
          }}
        </Route>
        <Route path="/blog">
          <Navbar />
          <Blog />
        </Route>
        <Route path="/tours">
          <AllTours />
        </Route>
        <Route path="/categories">
          {/* <Navbar /> */}
          <Categories />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App
