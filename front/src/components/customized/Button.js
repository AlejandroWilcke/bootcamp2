import styled from 'styled-components';

const Button = styled.button`
    margin-left: 2.3%;
    margin-right: 2.3%;
    margin-top: 2%;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    outline: none;
    width: 110px;
    height: 40px;
    cursor: pointer;
    font-family: "Lucida Sans Unicode";
    background: rgb(230,141,38);
    background: linear-gradient(90deg, rgba(230,141,38,0.8463760504201681) 85%, rgba(230,141,38,0.8407738095238095) 100%, rgba(189,147,104,1) 100%);
    text-shadow: 1px 0 0 #000, 1px 0 0 #000, 0 1px 0 #000, 0 1px 0 #000, 1px 1px #000, 1px 1px 0 #000, 1px 1px 0 #000, 1px 1px 0 #000;
    color: white;

    &:hover {
        color: grey;
    }
`;

export default Button;