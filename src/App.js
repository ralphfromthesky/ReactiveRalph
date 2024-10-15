import React, { useState } from "react";
import UseState from "./views/useState.tsx";
import PassingDataFromChildToparent from "./views/passingDataFromChildToparent";
import Feed from "./components/feed";
import UseEffect from "./views/useEffect";
import UseRef from "./views/useRef";
import PageNotFound from "./views/pageNotFound";
import Nested from "./views/nested";
import NestedA from "./views/nestedA";
import NestedB from "./views/nestedB";
import Parentprops from "./views/parentProps";
import Material from "./views/material";
import UseMemo from "./views/useMemo";
import UserReducer from "./views/userReducer";
import UseContext from "./views/useContext";
import UseCallback from "./views/useCallback";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseLayoutEffect from "./views/useLayoutEffect";
import UseImperativeHandle from "./views/useImperativeHandle";
import ReactQuery from "./views/reactQuery";
import Zustand from "./views/zustand.tsx";
import Typescript from "./views/typescript.tsx";
import UseHooks from "./views/useHooks.tsx";
import Framer from "./views/framer.tsx";
import CustomElement from "./views/customElement.tsx";
import ZustandChildViewPage from "./views/zustandChildViewPage.tsx";
import Api from "./views/api.tsx";
import UserRouter from "./views/userRouter.tsx";
import PrivateRoutes from "./customHooks/privateRoutes.tsx";
import Crud from './components/apps/crud.tsx'


// import LazyLoad from "./views/lazyLoad";
// this lazyloading is for performance speed or code splitting to speed up the loading
const LazyLoad = React.lazy(() => import("./views/lazyLoad"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        {/* for route with no register path="*" */}
        <Route path="*" element={<PageNotFound />} />
        <Route path="/aboutMe" name="ralph" element={<Feed />} />
        <Route path="/useState" element={<UseState />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/useEffect" element={<UseEffect />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/material" element={<Material />} />
        <Route path="/lazyLoad" element={<LazyLoad />} />
        <Route path="/useReducer" element={<UserReducer />} />
        <Route path="/useContext" element={<UseContext />} />
        <Route path="/UseCallback" element={<UseCallback />} />
        <Route path="/useLayoutEffect" element={<UseLayoutEffect />} />
        <Route path="/useImperativeHandle" element={<UseImperativeHandle />} />
        <Route path="/reactQuery" element={<ReactQuery />} />
        <Route path="/zustand" element={<Zustand />} />
        <Route path="/typescript" element={<Typescript />} />
        <Route path="/customHooks" element={<UseHooks />} />
        <Route path="/framerMotion" element={<Framer />} />
        <Route path="/customElement" element={<CustomElement />} />
        <Route path="/zus" element={<ZustandChildViewPage />} />
        <Route path="/useMemo" element={<UseMemo />} />
        <Route path="/api" element={<Api />} /> 
        <Route path="/useRouter" element={<UserRouter />} /> 
        <Route path="/crud" element={<Crud />} /> 

        {/* <PrivateRoutes path='/api' element={<Api/>}/> */}



        <Route path="/nested" element={<Nested />}>
          {/* this index route ('index') use for initially render a link */}
          <Route index element={<NestedB />} />
          {/* nested route no need to put '/' or it will throw error */}
          <Route path="nestedA" element={<NestedA />} />
          <Route path="nestedB" element={<NestedB />} />
        </Route>
        <Route
          path="/passingDataFromChildToparent"
          element={<PassingDataFromChildToparent />}
        />
        <Route path="/parentProps" element={<Parentprops />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
