import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../Loader/Loader";

import { Header, Link, ContentContainer } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <>
      <Header>
        <ContentContainer>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/tweets">Tweets</Link>
          </nav>
        </ContentContainer>
      </Header>
      <main>
        <ContentContainer>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </ContentContainer>
      </main>
    </>
  );
};

export default SharedLayout;
