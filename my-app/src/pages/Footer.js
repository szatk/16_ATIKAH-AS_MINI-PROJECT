import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height : 130px;
    background-color: #C4C4C4;
    //  padding : 80px 60px;
`;

const Wrapper = styled.div`
    padding : 10px 10px;
    display : flex;
    justify-content : center;
    align-items: center;
    flex-direction: column;
    max-width: 1000px;
    margin: 0 auto;
`;

const Column = styled.div`
    display:flex;
    flex-direction : column;
    text-align: left;
    margin-left: 60px;
`

const Left = styled.div`
    flex : 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 20px;
    cursor: pointer;
    text-decoration: underline;
`;

const Language1 = styled.span`
    font-size: 20px;
    cursor: pointer;
`;


const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Column>
                    
                    <div className="container row" >
                    <div className="col-md-4 ">
                    <Language style={{color:'black'}}>Atikah Project</Language>
                    <p> 
                       Jl. Kalimantan No.XX
                       Pangkalan Berandan 20857
                       (021) 234 567 89
                    </p>
                    </div>

                    <div className="col-md-4 ">
                    <p>BANTUAN
                        <br/>
                        ABOUT US
                        <br/>
                        CONTACT US
                    </p>
                    </div>

                  <div className="col-md-4 ">
                     <Language1 style={{color:'black'}}>Customer Service Hours</Language1>
                    <p> 
                        Monday-Friday   : 09:00-21:00
                        <br/>
                        Saturday-Sunday : 09:00-16:00
                    </p>
                    </div>
                    </div>
                    
                    </Column>
                   
                </Left>
              
            </Wrapper>
            
        </Container>
    )
}

export default Footer