<template>
  <div id="app">
    <div class="agraiments" v-autoscroll="center">
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

@media only screen and (max-width: 450px) and (min-width: 400px) {

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

</style>

