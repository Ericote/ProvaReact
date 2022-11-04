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
  import {EVAlbuns} from "../components/Albuns";
  import {EVLobby} from "../components/Lobby"
  import { EVTimMaia } from "../components/EVTimMaia";
  
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<EVPageLayout />} errorElement={<EVErrorPage />}>
         <Route index path="/" element={<EVLobby />}></Route>
        <Route path="sobre" element={<EVTimMaia />}></Route>
        <Route path="Albuns" element={<EVAlbuns />}></Route>
        <Route path="noticias" element={<EVFetchNews />}></Route>
      </Route>
    )
  );
  
  const Root = () => {
    return <RouterProvider router={route} />;
  };
  
  export default Root;
  