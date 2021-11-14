import React, { useEffect, useState } from "react"
import "./App.css"
import { Switch, Route, useLocation, Redirect } from "react-router-dom"
import Home from "./home"
import Tour from "./components/tour"
import Navbar from "./components/navbar2"
import Blog from "./components/blog"
import AllTours from "./components/allTours"
import Categories from "./components/categories"
import Category from "./components/category"
import SingleBlog from "./components/SingleBlog"
import Login from "./components/login"
import Register from "./components/register"
import { AnimatePresence, motion } from "framer-motion"
import UserProfile from "./components/userProfile"
import PrivateRoute from "./components/PrivateRoute"
import { GuestUserProvider } from "./Context/GuestUserContext"

function App() {
  const [userExist, setuserExist] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("token")) setuserExist(true)
  }, [userExist])

  const location = useLocation()
  return (
    <div className="App">
      <GuestUserProvider>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route path="/login">
              {(routeProps) => {
                return (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Login {...routeProps} />
                  </motion.div>
                )
              }}
            </Route>
            {/* <Route path="/user">
            {userExist !== undefined ? (
              <>
                <Navbar />
                <UserProfile />
              </>
            ) : (
              <Redirect to="/" />
            )}
          </Route> */}

            <PrivateRoute path="/user" component={UserProfile} />
            <Route path="/register">
              {(routeProps) => {
                return (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Register {...routeProps} />
                  </motion.div>
                )
              }}
            </Route>
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
            <Route path="/blog/:id">
              {(routeProps) => {
                return (
                  <>
                    <SingleBlog {...routeProps} />
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
        </AnimatePresence>
      </GuestUserProvider>
    </div>
  )
}

export default App
