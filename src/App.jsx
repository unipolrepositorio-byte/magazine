import Theme from './theme/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BannerComponent from './components/BannerComponent';
import MainContextProvider from './context/MainContextProvider';
import SectionComponent from './components/SectionComponent';
import AsideComponent from './components/AsideComponent';
import MainComponent from './components/MainComponent';
import ImageCarousel from './components/ImageCarousel';
import NavbarComponent from './components/NavbarComponent';
import Header from './components/Header';
import ArticlesComponent from './components/ArticlesComponent';
import BannerStaticComponent from './components/BannerStaticComponent';
import BanerContextProvider from './context/BanerContextProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import BreadCrumbsComponent from './components/BreadCrumbsComponent';
import VolumeDetailComponent from './components/VolumesComponent/VolumeDetailComponent';
import VolumesDateComponent from './components/VolumesComponent/VolumesDateComponent';

function App() {
  const queryClient = new QueryClient();

  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        <MainContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/volume/:id" element={<VolumeDetailComponent />} />
              <Route path="/volumes/:date" element={<VolumesDateComponent />} />
              <Route path="/" element={<>
                <BanerContextProvider>
                  <Header />
                  <BannerComponent />
                  <BreadCrumbsComponent />
                </BanerContextProvider>
                <SectionComponent >
                  <MainComponent />
                  <AsideComponent />
                </SectionComponent>
                <ImageCarousel />
                <NavbarComponent />
              </>} />
              <Route path="/articles" element={<>
                <BanerContextProvider>
                  <Header />
                  <BannerStaticComponent />
                </BanerContextProvider>
                <ArticlesComponent />
                <ImageCarousel />
                <NavbarComponent />
              </>} />
              <Route path="/volumes" element={<>
                <BanerContextProvider>
                  <Header />
                  <BannerStaticComponent />
                </BanerContextProvider>
              </>} />
              <Route path="/content/strapi" element={<></>} />
              <Route path="/register" element={<></>} />
            </Routes>
          </BrowserRouter>
        </MainContextProvider>
      </QueryClientProvider>
    </Theme>
  );
}

export default App;
