import styled from 'styled-components';

const SearchContainer = styled.div `

    margin-top: 5px;

    svg {
        height: 34px;
        margin-right: 20px;
        width: auto;
    }

    .cls_1 {
        font-size: 47px;
        fill: #fff;
    }

    .cls_2 {
        letter-spacing: -0.03em;
    }
    
    .search_svg {
        fill: #fff;
        width: 15px;
        height: 15px;
        font-weight: bold;
    }

    .search_container {
        position: relative;
        flex: 0.5 1 0%;
    }

    .input_group {
        display: flex;
        flex-direction: row;
        margin-right: 5px;
    }

    .input {
        width: 100%;
        height: 36px;
        font-size: 16px;
        background: rgb(18, 18, 20) none repeat scroll 0% 0%;
        border-color: rgb(18, 18, 20);
        color: rgb(255, 255, 255);
        padding: 0px 1em 0px 2.65em;
        border-radius: 5px;
    }
    
    .search-label {
        position: absolute;
        height: 18px;
        margin-top: 8px;
        margin-left: 16px;
    }
`;

const SearchSvg = styled.svg `
    fill: white;
    width: 5px;
    height: 5px;
`;

const SearchIcon = () => (
    <SearchSvg
    version="1.1"
    className="search_svg"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 512.005 512.005"
  >
    <g>
      <g>
        <path
          d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
                  S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
                  c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
                  M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"
        />
      </g>
    </g>
  </SearchSvg>
)

function Search() {
    return (
        <SearchContainer>
            <label className="search-label" htmlFor="search-bar">
                <SearchIcon />
            </label>
            <input type="text" id="search-bar" className="input" autoComplete="false" placeholder="pesquisar" />
        </SearchContainer>
    )
}

export default Search;