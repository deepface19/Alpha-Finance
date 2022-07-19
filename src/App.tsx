import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import theme from "./theme";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import Sidebar from "./components/Sidebar";
import Backgroundimage from "./assets/background.png";
import Analytics from "./pages/Analytics"
import Fiatgateways from "./pages/Fiatgateways";
import "@fontsource/inter";
import { Loan } from "./pages/Loan";
import { Cryptoworld } from "./pages/Cryptoworld";
import { ProtectTransaction } from "./pages/ProtectTransaction";
import { ProtectWallet } from "./pages/ProtectWallet";
import { Home } from "./pages/Home";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="App">
      <Wrapper>
        <Container>
          <Router>
            <Topbar className="App-topbar">
              <Sidebar />
              <ChakraProvider theme={theme}>
                <Flex>
                  <ConnectButton handleOpenModal={onOpen} />
                  <AccountModal isOpen={isOpen} onClose={onClose} />
                </Flex>
              </ChakraProvider>
            </Topbar>
            <Content>
              <Routes>
                <Route path='/home' element={<Home/>} />
                <Route path='/analytics' element={<Analytics />} />
                <Route path='/Loan' element={<Loan/>}/>
                <Route path='/fiatgateways' element={<Fiatgateways/>} />
                <Route path='/protecttransaction' element={<ProtectTransaction/>}/>
                <Route path='/protectwallet' element={<ProtectWallet/>}/>
                <Route path='/cryptoworld' element={<Cryptoworld/>} />
                
              </Routes>
            </Content>
          </Router>
        </Container>
      </Wrapper>
    </div>
  );
}
const Flex = styled.div`
display: flex;
align-items: space-between;
`;

const Topbar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 74px;
width: 100%;
img {
  height: 100px;
  position: center;
  width: 350px;
  margin-left: 1rem;
}
`;

const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
width: 100%;
`;

const Wrapper = styled.div`
  font-size: 1rem;
  background-image:url(${Backgroundimage});
`;
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 100vh;
padding: 0px 24px;
max-width: 1200px;
margin: 0 auto;
`;
export default App;