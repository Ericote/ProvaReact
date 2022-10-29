import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Route,
    RouterProvider,
    Routes,
  } from "react-router-dom";
  import EVErrorPage from "../components/ErrorPage";
  import EVFetchNews from "../components/FetchNews";
  import { EVPageLayout } from "../components/PageLayout";
  
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<EVPageLayout />} errorElement={<EVErrorPage />}>
        <Route path="sobre" element={<EVFetchNews />}></Route>
        <Route path="albuns" element={<EVFetchNews />}></Route>
        <Route path="noticia" element={<EVFetchNews />}></Route>
      </Route>
    )
  );
  
  const Root = () => {
    return <RouterProvider router={route} />;
  };
  
  export default Root;
  