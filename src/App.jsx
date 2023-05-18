import Theme from './theme/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BannerComponent from './components/BannerComponent';
import MainContextProvider from './context/MainContextProvider';
import MainComponent from './components/MainComponent';
import ImageCarousel from './components/ImageCarousel';
import NavbarComponent from './components/NavbarComponent';
import Header from './components/Header';
import ArticlesComponent from './components/ArticlesComponent';
import BannerStaticComponent from './components/BannerStaticComponent';
import BanerContextProvider from './context/BanerContextProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import BreadCrumbsComponent from './components/BreadCrumbsComponent';
import VolumesComponent from './components/VolumesComponent';
import VolumeDetailComponent from './components/VolumesComponent/VolumeDetailComponent';
import { Volume } from './pages/Volume';
import MenuComponent from './components/MenuComponent';
import { Article } from './pages/article';
import FooterComponent from './components/Footer';

function App() {
  const queryClient = new QueryClient();

  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        <MainContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<>
                <BanerContextProvider>
                  <Header />
                  <BannerComponent />
                  <BreadCrumbsComponent />
                </BanerContextProvider>
                <MainComponent />
                <ImageCarousel />
                <FooterComponent/>
              </>} />
              <Route path="/articles">
                <Route path='' element={<>
                  <BanerContextProvider>
                    <Header />
                    <BannerStaticComponent />
                  </BanerContextProvider>
                  <ArticlesComponent />
                  <ImageCarousel />
                  <NavbarComponent />
                  <FooterComponent/>
                </>}/>
                <Route path=':id' element={<>
                  <BanerContextProvider>
                    <Header />
                    <BannerStaticComponent />
                  </BanerContextProvider>
                  <Article/>
                  <FooterComponent/>
                </>}/>
              </Route>
              <Route path="/volumes">
                <Route path='' element={
                  <>
                    <BanerContextProvider>
                      <Header />
                      <BannerStaticComponent />
                      <VolumesComponent />
                    </BanerContextProvider>
                    <FooterComponent/>
                  </>} />
                <Route path=":date" element={<>
                  <BanerContextProvider>
                    <Header />
                    <BannerStaticComponent />
                    <VolumesComponent />
                  </BanerContextProvider>
                  <FooterComponent/>
                </>} />
                <Route path="volume/:id" element={
                  <>
                    <BanerContextProvider>
                      <Header />
                      <BannerStaticComponent />
                      <BreadCrumbsComponent />
                      <Volume />
                    </BanerContextProvider>
                    <FooterComponent/>
                  </>}
                />
              </Route>
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
