import styled from 'styled-components';
import Search from '../Search';

const HeaderCss = styled.div `
    .cabecalho {
        width: 100%;
        height: 48px;
        background-color: #357BEF;
        display: flex-row;
        justify-content: space-between;
    }

    .search-container {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
`;

function Header() {
    return (
        <HeaderCss>
            <div className='cabecalho'>
                <div className="search-container">
                    <Search />   
                </div>
            </div>
        </HeaderCss>
    )
}

export default Header;