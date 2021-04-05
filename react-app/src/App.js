import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./SignupForm";
import Nav from "./components/Nav";
import SideNav from "./components/Nav/SideNav";
import TopNav from "./components/Nav/TopNav";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/User/UsersList";
import User from "./components/User";
import Home from "./components/Home";
import AllVideos from "./components/AllVideos";
import VideoPage from "./components/VideoPage";
import SearchResults from "./components/Nav/SearchResults";
import NoResults from "./components/Nav/NoResults";
import { authenticate } from "./services/auth";
import { restoreUser } from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.user);

  useEffect(() => {
    (async () => {
      const user = await dispatch(restoreUser());
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {/* <Nav setAuthenticated={setAuthenticated} /> */}
      <TopNav setAuthenticated={setAuthenticated} />
      <div id="content">
        <SideNav setAuthenticated={setAuthenticated} />
        <div id="scroll">
          <Switch>
            <Route path="/login" exact={true}>
              <LoginForm
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            </Route>
            <Route path="/sign-up" exact={true}>
              <SignUpForm
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            </Route>
            <ProtectedRoute
              path="/users"
              exact={true}
              authenticated={authenticated}
            >
              <UsersList />
            </ProtectedRoute>
            <ProtectedRoute
              path="/users/:userId"
              exact={true}
              authenticated={authenticated}
            >
              <User />
            </ProtectedRoute>
            <Route path="/" exact={true} authenticated={authenticated}>
              <Home />
            </Route>
            <Route path="/videos/:videoId">
              <VideoPage />
            </Route>
            <Route path="/videos">
              <AllVideos />
            </Route>
            <Route path="/search-results">
              <SearchResults />
            </Route>
            <Route path="/no-results">
              <NoResults />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
