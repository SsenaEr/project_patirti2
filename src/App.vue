<template>
  <div id="app">
     <Stylecss/>
     <Header/>
     <HeaderMiddle/>
     <HeaderMenu/>
     <HomePage/>
     <Body/>
     <Footer/>
  </div>
</template>

<script>
import Stylecss from './assets/css/style.css'
import Header from './components/Header.vue'
import HeaderMiddle from './components/Header_Middle.vue'
import HeaderMenu from './components/HeaderMenu.vue'
import HomePage from './components/HomePage.vue'
import Body from './components/Body.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Stylecss,
    Header,
    HeaderMiddle,
    HeaderMenu,
    HomePage,
    Body,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat',sans-serif;
  font-size: 13px;
  line-height: 1.42857143;
  color: #545454;
  font-size: 10px;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
html {
	font-family: sans-serif;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}

body {
	margin: 0;
}

</style>
