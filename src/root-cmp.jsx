import { Route, Routes } from "react-router-dom";

import routes from "./routes";

export const RootCmp = () => {
  return (
    <div>
      <main>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact
              element={route.element}
              path={route.path}
            />
          ))}
        </Routes>
      </main>
    </div>
  );
};
