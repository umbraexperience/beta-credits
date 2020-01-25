<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <div class="agraiments">
      <div class="flex-container">
        <div v-for="person in persons" :key="person.id" class="person">
          <img src="./assets/aniol.png" class="foto" />
          <h2 class="name font-medium">{{ person.name }}</h2>
          <h2 class="role font-medium">{{ person.role }}</h2>
        </div>
      </div>

    <div class="crowfunding">
    <h1 class="gracies">Agradecimientos </h1>
        <div class="grid-container">
          <div v-for="mecena in mecenes" :key="mecena.id" class="paypal">{{ mecena.name }}</div>
        </div>
        <div class="patrocinadors">
          <img class="logo" src="./assets/logo1.png" alt="Cinema Truffaut">
          <img class="logos" src="./assets/logo2.png" alt="BTM">
          <img class="logo" src="./assets/logo3.png" alt="Doctor Says">
          <img class="logos" src="./assets/logo4.png" alt="Desfilart"> 
          <img class="logo" src="./assets/logo4.png" alt="Teatre Bescanó">
         </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data: function() {
    return {
      persons: [
        { id: 31, name: "Marc Vila", role: "Developer", img: "" },
        { id: 32, name: "Santi Cros", role: "Developer", img: "" },
        { id: 33, name: "Abel Martínez", role: "Developer", img: "" },
        { id: 34, name: "Adrià Crehuet", role: "Developer", img: "" },
        { id: 35, name: "Afra Ramió", role: "Developer", img: "" },
        { id: 36, name: "Aniol Maeso", role: "Developer", img: "" },
        { id: 37, name: "Marta Gallego", role: "Developer", img: "" }
      ],

      mecenes: [
        { id: 0, name: "Enric Crehuet"},
        { id: 1, name: "Alfonso Ortega"},
        { id: 2, name: "Iván Cortés"},
        { id: 3, name: "Santi Ramió"},
        { id: 4, name: "Mar Palma"},
        { id: 5, name: "Aina Alsina"},
        { id: 6, name: "Adrià Solà"},
        { id: 7, name: "Carles Ponce"},
        { id: 8, name: "Ferran Crehuet"},
        { id: 9, name: "Roser Canals"},
        { id: 10, name: "Laura Amargant"},
        { id: 11, name: "Mayra Segura"},
        { id: 12, name: "Xixi Chen"},
        { id: 13, name: "David Monje"},
        { id: 14, name: "Roser Carbonell"},
        { id: 15, name: "Encarna Jiménez"},
        { id: 16, name: "Tania Tarrés"},
        { id: 17, name: "Èric Bautista"},
        { id: 18, name: "Tania Muñoz"},
        { id: 19, name: "Marc Rovira"},
        { id: 20, name: "Ariadna Gallego"},
        { id: 21, name: "Roser Juanola"},
        { id: 22, name: "Pilar Subirós"},
        { id: 23, name: "Pilar Calatayud"},
        { id: 24, name: "Enrique Cros"},
        { id: 25, name: "Marta Peiró"},
        { id: 26, name: "Joan Maeso"},
        { id: 25, name: "Jordi Cros"},
        { id: 26, name: "Mª Josefa Herrero"}
      ],
    };
  }


};
</script>

<style>
#app {
  font-family: "Tiempos Headline", Times, serif;
  font-weight: 300;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}

@font-face {
  font-family: "Tiempos Headline";
  src: local("Tiempos Headline Light"),
    url("./assets/fonts/TiemposHeadline-Light.woff") format("woff");
  font-weight: 300;
}

@font-face {
  font-family: "Tiempos Headline";
  src: local("Tiempos Headline Regular"),
    url("./assets/fonts/TiemposHeadline-Regular.woff") format("woff");
  font-weight: 400;
}

@font-face {
  font-family: "Tiempos Headline";
  src: local("Tiempos Headline Medium"),
    url("./assets/fonts/TiemposHeadline-Medium.woff") format("woff");
  font-weight: 500;
}

.font-light {
  font-family: "Tiempos Headline", Times, serif;
  font-weight: 300;
  filter: blur(0.07rem);
}
.font-regular {
  font-family: "Tiempos Headline", Times, serif;
  font-weight: 400;
  filter: blur(0.07rem);
}
.font-medium {
  font-family: "Tiempos Headline", Times, serif;
  font-weight: 500;
  filter: blur(0.07rem);
}

.agraiments {
  height: 100%;
}
 .flex {
  padding: 0;
  margin: 0;
  list-style: none;

  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  justify-content: center;
  z-index: 1;
  margin-top: 2rem;
  margin-bottom: 10rem;
  flex-wrap: wrap;
  width: 60rem;
  height: 0 auto; 

} 

.flex-container::after {
  content: "";
  flex: auto;
}

.grid-container {
  display: grid;
  grid-gap: 2rem 1rem;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-evenly;
  width: 70%;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 5rem;
}

.paypal {
  font-family: "Tiempos Headline", Times, serif;
  font-weight: 500;
  filter: blur(0.04rem);
  opacity: 0;
}

.gracies {
  filter: blur(0.07rem);
  margin-top: 10rem;
  text-align: left;
}

h1 {
  margin-top: 5rem;
  text-align: left;
  margin-left: 11.5rem;
}


.paypal:nth-child(odd), .logo {
  -webkit-animation: color-change 14s infinite;
  -moz-animation: color-change 14s infinite;
  -o-animation: color-change 14s infinite;
  -ms-animation: color-change 14s infinite;
  animation: color-change 14s infinite;
} 

.paypal:nth-child(even), .logos  {
  -webkit-animation: color-change 14s infinite;
  -moz-animation: color-change 14s infinite;
  -o-animation: color-change 14s infinite;
  -ms-animation: color-change 14s infinite;
  animation: color-change 14s infinite;
  animation-delay: 7s;
}

.patrocinadors{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-evenly;
  width: 70%;
  margin: 0 auto;
  padding-left: 3rem; 
  margin-top: 3rem;
  margin-bottom: 5rem;
}



.logo, .logos {
  width: 120px;
  height: 80px;
  opacity: 0%;
  filter: blur(0.04rem);
}


@-webkit-keyframes color-change {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes color-change {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-ms-keyframes color-change {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-o-keyframes color-change {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes color-change {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 90rem;
  margin: 0 auto;
  
}

.aniol {
  margin-left: 2rem;
}

.person {
  width: 100%;
  margin-top: 8rem;
}

.person .name {
  margin-top: -21rem;
  margin-left: 3.5rem;
  font-size: 2.2rem;
}

.person .role {
  margin-top: 11.5rem;
  margin-left: -16.2rem;
  font-size: 1.75rem;
  transform: rotate(-90deg);
}

.person:nth-child(even) .role {
  transform: rotate(90deg);
  margin-left: 16.2rem;
}

.person:nth-child(even) .name {
  margin-left: 0;
  margin-right: 3.5rem;
}


.aniolrol {
  margin-top: 11.5rem;
  margin-left: -16.2rem;
  font-size: 1.75rem;
  transform: rotate(-90deg);
}

.adria {
  margin-top: 10rem;
  margin-right: 2rem;
}

.adrianom {
  margin-top: -21rem;
  font-size: 2.93rem;
  margin-right: 3.5rem;
}
.adriarol {
  margin-top: 11.5rem;
  margin-right: -16rem;
  font-size: 1.75rem;
  transform: rotate(90deg);
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;


}
body {
  background-color: black;
}
body * {
  color: #b4b4b4;
}
#app {
  font-family: serif;
  text-align: center;
  height: 100%;
  font-family: "Tiempos Headline Light", Times, serif;
  transition: filter 2s ease-in-out;
}

h2 {
  filter: blur(0.03rem);
}


@media screen and (min-width: 640px) {
  .person {
    width: 50%;
  }
  .person:nth-child(even) {
    padding-top: 8rem;
  }
 
}

@media screen  and (min-width: 1000px) and (max-width: 1024px) {
  .person .name {
    font-size: 2.93rem;
    margin-top: -21.5rem;
  }
  .person .role {
    margin-top: 10rem;
    font-size: 2.2rem;
  }
 
 
  
}
@media screen and (max-width: 640px) {
  .paypal {
   text-align: center;
   font-size: 1rem;
   
  }
  .gracies {
    margin-top: 8rem;
    margin-left: 0;
    text-align: center;
  }
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem 2rem;
  }

  .patrocinadors {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem 2rem;
  }

 
}

@media screen and (max-width: 1200px) {
  
  .gracies {
    margin-top: 8rem;
    margin-left: 0;
    text-align: center;
  }


}



</style>
