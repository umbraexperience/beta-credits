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
        <div class="wrapper">
          <div v-for="mecena in mecenes" :key="mecena.id" class="paypal">{{ mecena.name }}</div>
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
        { id: 0, name: "Marc Vila", role: "Developer", img: "" },
        { id: 0, name: "Santi Cros", role: "Developer", img: "" },
        { id: 0, name: "Abel Martínez", role: "Developer", img: "" },
        { id: 0, name: "Adrià Crehuet", role: "Developer", img: "" },
        { id: 0, name: "Afra Ramió", role: "Developer", img: "" },
        { id: 0, name: "Aniol Maeso", role: "Developer", img: "" },
        { id: 0, name: "Marta Gallego", role: "Developer", img: "" }
      ],

      mecenes: [
        { id: 0, name: "Enric Crehuet"},
        { id: 0, name: "Alfonso Ortega"},
        { id: 0, name: "Iván Cortés"},
        { id: 0, name: "Santi Ramió"},
        { id: 0, name: "Mar Palma"},
        { id: 0, name: "Aina Alsina"},
        { id: 0, name: "Adrià Solà"},
        { id: 0, name: "Carles Ponce"},
        { id: 0, name: "Ferran Crehuet"},
        { id: 0, name: "Roser Canals"},
        { id: 0, name: "Laura Amargant"},
        { id: 0, name: "Mayra Segura"},
        { id: 0, name: "Xixi Chen"},
        { id: 0, name: "David Monje"},
        { id: 0, name: "Roser Carbonell"},
        { id: 0, name: "Encarna Jiménez"},
        { id: 0, name: "Tania Tarrés"},
        { id: 0, name: "Èric Bautista"},
        { id: 0, name: "Tania Muñoz"},
        { id: 0, name: "Marc Rovira"},
        { id: 0, name: "Marta Germana"},
        { id: 0, name: "Roser Juanola"},
        { id: 0, name: "Pilar Calatayud"},
        { id: 0, name: "Enrique Cros"}
      ],
    };
  }


};
</script>

<style>
#app {
  font-family: "Tiempos Headline", Times, serif;
  font-weight: 300;
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
.flex {
  padding: 0;
  margin: 0;
  list-style: none;

  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  -webkit-flex-flow: row wrap;
  justify-content: center;
  z-index: auto;
  margin-top: 2rem;
  margin-bottom: 10rem;
  flex-wrap: wrap;
  width: 60rem;
  height: 0 auto;

}

.wrapper {
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
}

.gracies {
  filter: blur(0.07rem);
  margin-top: 10rem;
  text-align: left;
}

.last {
  align-self: left;
  justify-items: left;
}

h1 {
  margin-top: 5rem;
  text-align: left;
  margin-left: 11.5rem;
}


.paypal:nth-child(odd) {
  -webkit-animation: color-change 14s infinite;
  -moz-animation: color-change 14s infinite;
  -o-animation: color-change 14s infinite;
  -ms-animation: color-change 14s infinite;
  animation: color-change 14s infinite;
} 

.paypal:nth-child(even)  {
  -webkit-animation: color-change 14s infinite;
  -moz-animation: color-change 14s infinite;
  -o-animation: color-change 14s infinite;
  -ms-animation: color-change 14s infinite;
  animation: color-change 14s infinite;
  animation-delay: 7s;
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

.person:last-child {
  width: auto;
  justify-content: left;
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
  /* filter: blur(0.07rem); */
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

@media screen and (min-width: 1000px) {
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
  .wrapper {
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
