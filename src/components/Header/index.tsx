import styled from "styled-components";
import Search from "../Search";

const HeaderCss = styled.div`
  width: 100%;
  height: 48px;
  background-color: #cccf;
  display: flex-row;
  justify-content: space-between;

  .search-container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .logo-linkedin {
    display: flex;
  }

  .logo-linkedin > img {
    width: 36px;
    height: 36px;
    margin-left: 10px;
  }
`;

function Header() {
  return (
    <HeaderCss className="flex flex-wrap overflow-hidden">
      <div className="w-1/3 overflow-hidden">
        <div className="logo-linkedin">
          <img src="../assets/images/linkedin.png" />
        </div>
      </div>

      <div className="w-1/3 overflow-hidden">
        <div className="search-container">
          <Search />
        </div>
      </div>

      <div className="w-1/3 overflow-hidden">Minha avó ta maluca.</div>
    </HeaderCss>
  );
}

export default Header;
