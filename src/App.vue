<template>
  <div id="app">
    <div class="agraiments">
      <div class="flex-container">
        <div class="aniol">
          <img src="./assets/aniol.png" class="foto">
          <h2 class="aniolnom">Aniol Maeso</h2>
          <h2 class="aniolrol">Videographer</h2> 
        </div>

        <div class="adria">
          <img src="./assets/aniol.png" class="foto">
          <h2 class="adrianom">Adrià Crehuet</h2>
          <h2 class="adriarol">Programmer</h2> 
        </div>
      </div>

      <div class="flex-container">
        <div class="aniol">
          <img src="./assets/aniol.png" class="foto">
          <h2 class="aniolnom">Aniol Maeso</h2>
          <h2 class="aniolrol">Videographer</h2> 
        </div>

        <div class="adria">
          <img src="./assets/aniol.png" class="foto">
          <h2 class="adrianom">Adrià Crehuet</h2>
          <h2 class="adriarol">Programmer</h2> 
        </div>
      </div>

       <div class="flex-container">
        <div class="aniol">
          <img src="./assets/aniol.png" class="foto">
          <h2 class="aniolnom">Aniol Maeso</h2>
          <h2 class="aniolrol">Videographer</h2> 
        </div>

        <div class="adria">
          <img src="./assets/aniol.png" class="foto">
          <h2 class="adrianom">Adrià Crehuet</h2>
          <h2 class="adriarol">Programmer</h2> 
        </div>
      </div>

      <div class="flex-container" >
        <div class="aniol">
          <img src="./assets/aniol.png" class="foto">
          <h2 class="aniolnom">Aniol Maeso</h2>
          <h2 class="aniolrol">Videographer</h2> 
        </div>

        <div class="adria">
          <img src="./assets/aniol.png" class="foto">
          <h2 class="adrianom">Adrià Crehuet</h2>
          <h2 class="adriarol">Programmer</h2> 
        </div>

      </div>

   
        <h1 class="ayuda">Agradecimientos</h1>
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
  margin-top: 2rem; 
  margin-bottom: 10rem;
}

h1 {
  margin-top: 5rem;
  text-align: left;
  margin-left:11.5rem;
}


.p1 {
  margin-right:3rem;
  font-size: 1.26rem;
}

.p2 {

  margin-left:4rem;
  font-size: 1.26rem;
}


.p1{
        -webkit-animation: color-change 20s infinite;
        -moz-animation: color-change 22s infinite;
        -o-animation: color-change 20s infinite;
        -ms-animation: color-change 22s infinite;
        animation: color-change 20s infinite;
    }

.p2{
        -webkit-animation: color-change 13s infinite;
        -moz-animation: color-change 14s infinite;
        -o-animation: color-change 13s infinite;
        -ms-animation: color-change 14s infinite;
        animation: color-change 13s infinite;
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

.flex-container {
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  margin-top:8rem;
}


.aniol {
  margin-left: 2rem;
}
.aniolnom {
  margin-top: -21rem;
  font-size: 2.93rem;
  margin-left: 3.5rem;
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
  filter: blur(0.07rem);
  transition: filter 2s ease-in-out;
}

h2 {
  filter:blur(0.03rem);
}

</style>

