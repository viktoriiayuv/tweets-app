import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import { Header, Link, ContentContainer } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tweets">Tweets</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <ContentContainer>
            <Outlet />
          </ContentContainer>
        </main>
      </Suspense>
    </>
  );
};

export default SharedLayout;
