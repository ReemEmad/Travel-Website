import "./App.css"
import { Switch, Route } from "react-router-dom"
import Home from "./home"
import Tour from "./components/tour"
import Navbar from "./components/navbar"
import Blog from "./components/blog"
import AllTours from "./components/allTours"
import Categories from "./components/categories"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/tour">
          <Navbar />
          <Tour />
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
