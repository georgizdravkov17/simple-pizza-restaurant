import React from 'react';
import ReactPlayer from 'react-player';
import { HeaderSection, Banner } from '../../components/components.js';
import { img2 } from '../../assets/assets.js';
import './AboutScreen.css';

const AboutScreen = () => {
  return(
      <div className="about-screen">
        <HeaderSection />
        <div className="container">
              <div className="info">
                     <h1 className="heading">ABOUT US</h1>
                      <p>Пицария - Ресторант Аморе, намираща се в ж.к. Тракия, ул. "Недялка Шилева" 4, комплекс "Гербера", отворила врати на 13.02.2014 год., привлича невероятен поток от клиенти и любители на италианския вкус и средиземноморската кухня. Ресторантът разполага с 65 места в уютна вътрешна обстановка, 100 места зимна добре отоплена градина и нова средиземноморска градина, a в менюто се предлагат и богат избор от риби и морски дарове, а от май месец тази година и здравословно меню! Екипът на Пицария - Ресторант Аморе, с гордост заявява, "само една година по-късно постигнахме всичките си цели и успяхме да утвърдим името "Аморе", което всички да свързват с уют, добро обслужване и много вкусна храна. Пожелаваме си да се развиваме все така стремглаво и да виждаме още повече доволни клиенти." Уважаеми клиенти и приятели, от днес Пицария - Ресторант Аморе влиза във вашия дом и във вашия офис с богатото си вкусно и разнообразно меню! Не се колебайте да направите своята поръчка на телефон 0876 76 44 11, безплатна доставка в квартал Тракия при поръчка над 20лв и -10% отстъпка от сумата, при вземане на поръчката на място от ресторанта! Доставката в рамките на град Пловдив е 4лв, до 10км извън рамките на гр. Пловдив 8лв.</p> 
              </div>
              <div className="video">
                  <ReactPlayer url="https://www.youtube.com/watch?v=Hg5zM6-UbgU&ab_channel=FilippoConta" loop controls muted width="80vw" height="80vh"/>
              </div>
        </div> 
        <Banner />
      </div>
  );
}

export default AboutScreen;