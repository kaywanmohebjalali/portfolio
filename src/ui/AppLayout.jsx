import { Outlet} from "react-router-dom";
import styled from "styled-components";
const AppLayoutContainer = styled.div`
  padding: 1rem 0;
  max-width: 94%;
  @media screen and (min-width: 640px) {
    max-width: 92%;
  }

  @media screen and (min-width: 768px) {
    max-width: 88%;
  }

  @media screen and (min-width: 1024px) {
    max-width: 86%;
  }

  @media screen and (min-width: 1280px) {
    max-width: 82%;
  }

  @media screen and (min-width: 1536px) {
    max-width: 78%;
  }

  margin: auto;
`;
const AppLayout = () => {

  return (
    <AppLayoutContainer>
      <Outlet />
    </AppLayoutContainer>
  );
};

export default AppLayout;
