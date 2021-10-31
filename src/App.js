import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AlbumList } from "pages/AlbumList";
import { AlbumDetails } from "pages/AlbumDetails";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <AlbumList />
        </Route>
        <Route path="/albums/:albumId">
          <AlbumDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
