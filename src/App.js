import React from 'react';
import Nav from './components/menu'
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import {categorias} from './dados_iniciais.json';
function App() {
  return (
    <div >
      <Nav/>
     <BannerMain 
     videoTitle={categorias[0].videos[0].titulo}
     url={categorias[0].videos[0].url}
     />
      {categorias.map((category,index)=>{
        if(index == 0){
          return(<Carousel
          ignoreFirstVideo={true}
          category={category}
          />);
        }
        return(
          <Carousel
          ignoreFirstVideo={false}
          category={category}
          />
        );

      })}
      <Footer/>
    </div>
  );
}

export default App;
