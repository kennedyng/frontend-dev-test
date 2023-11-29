import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { useErrorBoundary } from "react-error-boundary";
import { useEffect } from "react";
import { AddUser, ManageUsers, Products } from "./pages";
import { RootLayout } from "./layouts";
const queryClient = new QueryClient();
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Products />,
        },

        {
          path: "manage-users",

          children: [
            {
              index: true,
              element: <ManageUsers />,
            },
            {
              path: "add-one",
              element: <AddUser />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
