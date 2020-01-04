<template>
  <div id="app">
    <div class="agraiments">
      <div class="aniol">
        <img src="./assets/aniol.png" class="aniolvideo">
        <h2 class="aniolmaeso">Aniol Maeso</h2>
        <h2 class="aniolmaeso2">Videographer</h2> 
      </div>

      <div class="adria">
        <img src="./assets/aniol.png" class="adriaprogramer">
        <h2 class="adria1">Adrià Crehuet</h2>
        <h2 class="adria2">Programmer</h2> 
      </div>

      <div class="aniol2">
        <img src="./assets/aniol.png" class="aniolvideo">
        <h2 class="aniolmaeso">Aniol Maeso</h2>
        <h2 class="aniolmaeso2">Videographer</h2> 
      </div>

      <div class="adria22">
        <img src="./assets/aniol.png" class="adriaprogramer">
        <h2 class="adria1">Adrià Crehuet</h2>
        <h2 class="adria2">Programmer</h2> 
      </div>

      
        <h1 class="ayuda">Flexbox</h1>
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
      
  
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
 
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
  justify-content:center;
  z-index: auto;
  margin-top: 76rem; 
  margin-bottom: 10rem;
}

.ayuda {
  margin-top: 70rem;
  z-index:auto;
}

.p1 {
  margin-right:4rem;
  font-size: 1.26rem;
}

.p2 {

  margin-left:4rem;
  font-size: 1.26rem;
}


.p1{
        -webkit-animation: color-change 15s infinite;
        -moz-animation: color-change 16s infinite;
        -o-animation: color-change 15s infinite;
        -ms-animation: color-change 16s infinite;
        animation: color-change 15s infinite;
    }

.p2{
        -webkit-animation: color-change 10s infinite;
        -moz-animation: color-change 11s infinite;
        -o-animation: color-change 10s infinite;
        -ms-animation: color-change 11s infinite;
        animation: color-change 10s infinite;
    }

    @-webkit-keyframes color-change {
        0% { color:black }
        50% { color:white; }
        100% { color:black; }
    }
    @-moz-keyframes color-change {
        0% { color:black }
        50% { color:white; }
        100% { color:black; }
    }
    @-ms-keyframes color-change {
         0% { color:black }
        50% { color:white; }
        100% { color:black; }
    }
    @-o-keyframes color-change {
         0% { color:black }
        50% { color:white;  }
        100% { color:black; }
    }
    @keyframes color-change {
         0% { color:black }
        50% { color:white; }
        100% { color:black; }
    }




.aniol2 {
  float:left;
  margin-left:-5rem;
  margin-top: 15rem;
}

.adria22 {
  float:right;
  margin-right:25rem;
  margin-top: 18rem;
}




.adria {
  float:right;
  margin-right:25rem;
  margin-top: 15rem;
}

.adriaprogramer{
  position: absolute;
  filter:blur(0.1rem);
  z-index: -10px;
}

.adria1 {
  position: relative;
  margin-top: -2.2rem;
  margin-right: -12rem; 
  font-size: 2.93rem;
  z-index: 12px;

}

.adria2 { 
  position: relative;
  margin-top: 11.5rem;
  margin-right: -31rem;
  font-size: 1.75rem;
  z-index: 12px;
  transform: rotate(90deg);
}


.aniol {
  float:left;
  margin-left:-5rem;
  margin-top: 8rem;
}

.aniolvideo {
  position: absolute;
  filter:blur(0.1rem);
  z-index: -1px;
}

.aniolmaeso {
  position: relative;
  margin-top: -2.2rem;
  margin-left: 19rem; 
  font-size: 2.93rem;
  z-index: 11px;
}

.aniolmaeso2 { 
  position: relative;
  margin-top: 11.5rem;
  margin-left: -0.5rem;
  font-size: 1.75rem;
  z-index: 10px;
  transform: rotate(-90deg);

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
  filter: blur(0.07rem);
  transition: filter 2s ease-in-out;
}

h1 {
  font-family: "Tiempos Headline Regular", Times, serif;
  font-size: 3.15rem;
  font-weight: 500;
  text-align: left;
  margin-top: 5.1rem;
  margin-left: 13.5rem;
  color: #f5f9fb;
}

@media only screen and (max-width: 450px) and (min-width: 410px) {

.aniol {
  float:left;
  margin-left:-8rem;
  margin-top: 8rem; 
  
}
.aniolvideo {
  position: absolute;
  filter:blur(0.1rem);
  z-index: -1px;
}
.aniolmaeso {
  position: relative;
  margin-top: -1.5rem;
  margin-left: 19rem; 
  font-size: 2.2rem;
  z-index: 11px;
  filter:blur(0.07rem);
  
}
.aniolmaeso2 { 
  position: relative;
  margin-top: 11.5rem;
  margin-left: -0.5rem;
  font-size: 1.75rem;
  z-index: 10px;
  transform: rotate(-90deg);
}

.adria {
  float:right;
  margin-right:22rem;
  margin-top: 10rem;
}

.adriaprogramer{
  position: absolute;
  filter:blur(0.1rem);
  z-index: -10px;
}
.adria1 {
  position: relative;
  margin-top: -1.6rem;
  margin-right: -12rem; 
  font-size: 2.2rem;
  z-index: 12px;
  filter:blur(0.07rem);
}
 
.aniol2 {
  float:left;
  margin-left:-8rem;
  margin-top: 10rem;
}

.adria22 {
  float:right;
  margin-right:22rem;
  margin-top: 10rem;
}

.adria2 { 
  position: relative;
  margin-top: 11.5rem;
  margin-right: -31rem;
  font-size: 1.75rem;
  z-index: 12px;
  transform: rotate(90deg);
}
}


@media screen and (max-width: 399px) and (min-width: 340px) {

.aniol {
  float:left;
  margin-left:-10.1rem;
  margin-top: 8rem; 
  
}
.aniolvideo {
  position: absolute;
  filter:blur(0.1rem);
  z-index: -1px;
}
.aniolmaeso {
  position: relative;
  margin-top: -1.5rem;
  margin-left: 19rem; 
  font-size: 2.2rem;
  z-index: 11px;
  filter:blur(0.07rem);
  
}
.aniolmaeso2 { 
  position: relative;
  margin-top: 11.5rem;
  margin-left: -0.5rem;
  font-size: 1.75rem;
  z-index: 10px;
  transform: rotate(-90deg);
}

.adria {
  float:right;
  margin-right:19.7rem;
  margin-top: 8.5rem;
}

.adriaprogramer{
  position: absolute;
  filter:blur(0.1rem);
  z-index: -10px;
}
.adria1 {
  position: relative;
  margin-top: -1.6rem;
  margin-right: -12rem; 
  font-size: 2.2rem;
  z-index: 12px;
  filter:blur(0.07rem);
}
 
.aniol2 {
  float:left;
  margin-left:-10.1rem;
  margin-top: 8.5rem;
}

.adria22 {
  float:right;
  margin-right:19.7rem;
  margin-top: 8.5rem;
}

.adria2 { 
  position: relative;
  margin-top: 11.5rem;
  margin-right: -31rem;
  font-size: 1.75rem;
  z-index: 12px;
  transform: rotate(90deg);
}

}


</style>

