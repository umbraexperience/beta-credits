<template>
  <div id="app">
    <div class="agraiments">
      <div class="flex-container">
        <div v-for="person in persons" :key="person.id" class="person">
          <img src="./assets/aniol.png" class="foto" />
          <h2 class="name font-medium">{{ person.name }}</h2>
          <h2 class="role font-medium">{{ person.role }}</h2>
        </div>
      </div>

      <!--  <div class="flex-container">
        <div class="aniol">
          <img src="./assets/aniol.png" class="foto" />
          <h2 class="aniolnom">Aniol Maeso</h2>
          <h2 class="aniolrol">Videographer</h2>
        </div>

        <div class="adria">
          <img src="./assets/aniol.png" class="foto" />
          <h2 class="adrianom">Adrià Crehuet</h2>
          <h2 class="adriarol">Programmer</h2>
        </div>
      </div>

      <div class="flex-container">
        <div class="aniol">
          <img src="./assets/aniol.png" class="foto" />
          <h2 class="aniolnom">Aniol Maeso</h2>
          <h2 class="aniolrol">Videographer</h2>
        </div>

        <div class="adria">
          <img src="./assets/aniol.png" class="foto" />
          <h2 class="adrianom">Adrià Crehuet</h2>
          <h2 class="adriarol">Programmer</h2>
        </div>
      </div>

      <div class="flex-container">
        <div class="aniol">
          <img src="./assets/aniol.png" class="foto" />
          <h2 class="aniolnom">Aniol Maeso</h2>
          <h2 class="aniolrol">Videographer</h2>
        </div>

        <div class="adria">
          <img src="./assets/aniol.png" class="foto" />
          <h2 class="adrianom">Adrià Crehuet</h2>
          <h2 class="adriarol">Programmer</h2>
        </div>
      </div>

      <div class="flex-container">
        <div class="aniol last">
          <img src="./assets/aniol.png" class="foto" />
          <h2 class="aniolnom">Aniol Maeso</h2>
          <h2 class="aniolrol">Videographer</h2>
        </div>
      </div> -->

      <h1 class="ayuda">Agradecimientos</h1>
      <div class="gracies">
        <ul class="container flex">
          <li class="item flex-item">
            <p class="p1">Enric Crehuet</p>
            <p class="p2">Adrià Solà</p>
            <p class="p1">Mayra Segura</p>
            <p class="p2">Tania Tarrés</p>
            <p class="p1">Roser Juanola</p>
            <p class="p2">persona 1</p>
            <p class="p1">persona 2</p>
            <p class="p2">persona 3</p>
          </li>
          <li class="item flex-item">
            <p class="p1">Alfonso Ortega</p>
            <p class="p2">Carles Ponce</p>
            <p class="p1">Xixi Chen</p>
            <p class="p2">Èric Bautista</p>
            <p class="p1">Pilar Calatayud</p>
            <p class="p2">persona 1</p>
            <p class="p1">persona 2</p>
            <p class="p2">persona 3</p>
          </li>
          <li class="item flex-item">
            <p class="p1">Iván Cortés</p>
            <p class="p2">Ferran Crehuet</p>
            <p class="p1">David Monje</p>
            <p class="p2">Tania Muñoz</p>
            <p class="p1">persona 1</p>
            <p class="p2">persona 2</p>
            <p class="p1">persona 3</p>
            <p class="p2">persona 4</p>
          </li>
          <li class="item flex-item">
            <p class="p1">Santi Ramió</p>
            <p class="p2">Roser Canals</p>
            <p class="p1">Roser Carbonell</p>
            <p class="p2">Marc Rovira</p>
            <p class="p1">persona 1</p>
            <p class="p2">persona 2</p>
            <p class="p1">persona 3</p>
            <p class="p2">persona 4</p>
          </li>
          <li class="item flex-item">
            <p class="p1">Aina Alsina</p>
            <p class="p2">Laura Amargant</p>
            <p class="p1">Encarna Jiménez</p>
            <p class="p2">Marta Germana</p>
            <p class="p1">persona 1</p>
            <p class="p2">persona 2</p>
            <p class="p1">persona 3</p>
            <p class="p2">persona 4</p>
          </li>
        </ul>
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
        { id: 0, name: "Abel Martínez", role: "Developer", img: "" },
        { id: 0, name: "Adrià Crehuet", role: "Developer", img: "" },
        { id: 0, name: "Afra Ramió", role: "Developer", img: "" },
        { id: 0, name: "Aniol Maeso", role: "Developer", img: "" },
        { id: 0, name: "Marta Gallego", role: "Developer", img: "" },
        { id: 0, name: "Marc Vila", role: "Developer", img: "" },
        { id: 0, name: "Santi Cros", role: "Developer", img: "" }
      ]
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
}
.font-regular {
  font-family: "Tiempos Headline", Times, serif;
  font-weight: 400;
}
.font-medium {
  font-family: "Tiempos Headline", Times, serif;
  font-weight: 500;
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

  border: 2px solid blue;
}

.gracies {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid green;
  height: 0 auto;
  width: 0 auto;
}

.p1 {
    margin-right: 3rem;
    font-size: 1.26rem;
}

.p2 {
    margin-left: 4rem;
    font-size: 1.26rem;
}

.last {
  border: 2px solid red;
  align-self: left;
  justify-items: left;
}

h1 {
  margin-top: 5rem;
  text-align: left;
  margin-left: 11.5rem;
}


.p1 {
  -webkit-animation: color-change 14s infinite;
  -moz-animation: color-change 14s infinite;
  -o-animation: color-change 14s infinite;
  -ms-animation: color-change 14s infinite;
  animation: color-change 14s infinite;
}

.p2 {
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
  width: 0 auto;
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

@media screen and (max-width: 640px) {
  /*   * {
    border: 2px solid red;
  } */
  html,
  body {
    overflow-x: hidden;
  }

  .aniolnom {
    font-size: 2.2rem;
    filter: blur(0.07rem);
  }

  .aniolrol {
    font-size: 1.75rem;
  }

  .adrianom {
    font-size: 2.2rem;
    filter: blur(0.07rem);
  }

  .adriarol {
    font-size: 1.75rem;
  }

  .adria {
    margin-left: 5rem;
  }

  .aniol {
    margin-right: 5rem;
  }

  .flex-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10rem;
    margin-bottom: 0rem;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
  }
  h1 {
    margin-top: 8rem;
    text-align: center;
    margin-left: 0rem;
    margin-right: 0rem;
    font-size: 1.9rem;
  }
}

.p1 .p2 {
  font-size: 1.15rem;
  text-align: center;
}


</style>
