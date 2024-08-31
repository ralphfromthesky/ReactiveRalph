import React, { useEffect } from "react";

import Main from "../components/main/main";
import { useLocation, useNavigate } from "react-router-dom";

const UserRouter = () => {
  const location = useLocation();
  const navigate  = useNavigate()
  const arrayRoutes = ["/home", "/nested", "/material", '/useRouter'];
useEffect(() => {
    if(location.pathname === '/useRouter') {
        alert('hoy!')
        // navigate('/aboutMe')
    }
}, [location, navigate])
  return (
    <Main>
      <div className="[p-1rem]">
        {arrayRoutes.includes(location.pathname) ? "it has route name" : "no route name"}
        <div className="my-[1rem]">
          useRouter and useLocation are both hooks used in React applications
          for handling routing, but they come from different libraries and serve
          slightly different purposes. Let's look at each of them in detail:
          <img src="image/useRoute.png" alt="" />
        </div>

        <div>
          useRouter Library: <br /> <br />
          This depends on the routing library in use. In Next.js, for example,
          useRouter is provided by next/router. Other libraries may have similar
          hooks. Purpose: useRouter generally provides more comprehensive
          router-related information and capabilities, such as programmatic
          navigation, query parameters, and more. Usage: It is often used in
          frameworks like Next.js to access router properties and methods.
          Example in Next.js:
          <br />
          <br />
          <img src="image/useRoute2.png" />
          <br />
          <br />
          <div className="mb-[2rem]">
            Key Differences Library Origin: useLocation: Part of
            react-router-dom, a widely used routing library for React
            applications. useRouter: Specific to the routing library or
            framework being used (e.g., next/router for Next.js). Functionality:
            useLocation: Primarily provides access to the location object with
            details about the current URL. useRouter: Typically provides a more
            comprehensive API, including methods for navigation (e.g., push,
            replace), access to route parameters, query parameters, and more.
            Use Cases: useLocation: Best used when you need to access current
            location details and URL parameters. useRouter: Ideal when you need
            more control over navigation and access to additional router
            functionalities beyond just location. In summary, while useLocation
            is a straightforward way to access the current location in
            react-router-dom, useRouter (in the context of frameworks like
            Next.js) provides a richer set of features for handling
            routing-related tasks.
          </div>
        </div>
      </div>
    </Main>
  );
};

export default UserRouter;
