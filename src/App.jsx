import Theme from './theme/theme';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './pages/login';
import Header from './components/Header';

import BannerComponent from './components/bannerComponent';
import BreadCrumbComponent from './components/BreadCrumbsComponent';
import SearchComponent from './components/SearchComponent';
import WorksComponent from './components/WorksComponent';
import FooterComponent from './components/Footer';
import MainComponent from './components/MainComponent';
import ContainerSearch from './pages/ContainerSearch';
import Detail from './pages/Detail';
import MainContextProvider from './context/MainContextProvider';
function App() {
  return (
    
      <Theme>
        <MainContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<>
                <Header/>
                <BreadCrumbComponent />
                <BannerComponent>
                  <SearchComponent/>
                </BannerComponent>
                <WorksComponent />
                <FooterComponent />
              </>}/>
              <Route path="/find/:id" element={<>
                <Header/>
                <BreadCrumbComponent />
                <ContainerSearch />
                <MainComponent />
                <FooterComponent />
              </> } />
              <Route path="/detail/:id" element={<>
                <Header/>
                <BreadCrumbComponent />
                <Detail />
                <FooterComponent />
              </> } />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </MainContextProvider>
      </Theme>
  );
}

export default App;
