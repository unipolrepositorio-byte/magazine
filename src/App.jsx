import Theme from './theme/theme';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import BannerComponent from './components/BannerComponent';
import MainContextProvider from './context/MainContextProvider';
import SectionComponent from './components/SectionComponent';
import AsideComponent from './components/AsideComponent';
import MainComponent from './components/MainComponent';
import ImageCarousel from './components/ImageCarousel';
import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <Theme>
      <MainContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<>
              <BannerComponent />
              <SectionComponent >
                <MainComponent />
                <AsideComponent />
              </SectionComponent>
              <ImageCarousel />
              <NavbarComponent />
            </>} />
            <Route path="/articles" element={<>
            </>} />
            <Route path="/volumes" element={<>
            </>} />
            <Route path="/content/strapi" element={<></>} />
            <Route path="/register" element={<></>} />
          </Routes>
        </BrowserRouter>
      </MainContextProvider>
    </Theme>
  );
}

export default App;
