import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/profileClass";
import AboutChildError from "./components/AboutChildError";
import BlankBox from "./components/shimmer";
import AuthModal from "./components/AuthModal";
import {Provider} from "react-redux";
import appStore from "./redux/store";
import CheckOut from "./components/CheckOut";
// import ReactPractice from "./components/ReactPractice"


const Instamart = lazy(() => import("./components/Instamart"));

// console.log(<About />);

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
    </Provider>
    
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <AboutChildError />,
        children: [
          {
            path: "profile",
            element: <Profile name={"sunny"} />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instaMart",
        element: (
          <Suspense fallback={<BlankBox />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resid",
        element: <RestaurantMenu />,
      },
      {
        path: "/auth",
        element: <AuthModal />,
      },
      {
        path: "/checkOut",
        element: <CheckOut />,
      },
     
    ],
  },
]);
// console.log(appRouter);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// Create React elements
// const element = React.createElement(
//   "div",
//   null,
//   React.createElement(
//     "h1",
//     {
//       id: "greet",
//       style: { backgroundColor: "red" },
//     },
//     "Namaste React"
//   ),
//   React.createElement(
//     "h2",
//     {
//       className: "namaste",
//       style: { backgroundColor: "yellow" },
//     },
//     "HELLO SIR!!"
//   )
// );

// // Render the React element

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(element);

// const greet = <h1 className="hello">Hello world</h1>;
// const HeadComponent = () => {
//   return (<div>
//   {/* {greet()}//when greet is functional component , it is called component composition;  */}
//     {greet};
//     <h1>Hello React</h1>;
//     <h2>"swagat nhi karoge humara ?"</h2>;
//   </div>
//   );
// }

// root.render(<HeadComponent />);

// const title = React.createElement('div',{},[
//   React.createElement('h1',{},"Heading1"),
//   React.createElement('h2',{},"heading2"),
//   React.createElement('h3',{},"heading3")
// ])

// const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(title);

// // const title = (
// //   <div>
// //     <h1>H1</h1>;
// //     <h2>H2</h2>;
// //     <h3>H3</h3>;
// //   </div>
// // )
// // root.render(title);

// const Title = () => {
//   return (
//     <div>
//     <h1>H1</h1>;
//     <h2>H2</h2>;
//     <h3>H3</h3>;
//    </div>
//   )
// }

// root.render(<Title />)
