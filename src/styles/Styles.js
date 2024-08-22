import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{      
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    *, button, input {
        border: 0;
        outline: 0;
    }
    
    * h1 {
        margin-top: 8px;
        text-align: center;
    }

    * p {
        margin-top: 10px;
        text-align: center;
    }
    
`;
