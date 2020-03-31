<template>
  <div class="page">
    <h1>Way more than just music</h1>

      <h2>French channels</h2>
    <div class="channels--container">
      <p>E-penser</p>
      <p>Sciences etonnantes</p>
      <p>Dans ton corps</p>
      <p>Micmaths</p>
      <p>M.Phil</p>
      <p>Aurelien Barreau</p>
      <p>Jean-Marc Jancovici</p>
      <p>Victor ferry</p>
      <p>inthepanda</p>
      <p>Nota bene</p>
      <p>Data gueule</p>
      <p>Vu france TV</p>
      <p>Partager c'est sympa</p>
      <p>Cyrus North</p>
      <p>Primum non nocere</p>
      <p>Experimentboy</p>
      <p>Passe science</p>
      <p>Deusex silicium</p>
      <p>cocadmin</p>
      <p>thinkerview</p>
      <p>HEC debats</p>
      <p>ioduremetallique</p>
      <p>Hygiene mentale</p>
      <p>Horizon gull</p>
      <p>Heu?reka</p>
      <p>Psylab</p>
      <p>la tronche en biais</p>
      <p>dany caligula</p>
      <p>ce soir ou jamais</p>
      <p>Institut des hautes etudes scientifiques</p>     
    </div>
    <h2>English channels</h2>
    <div class="channels--container">
      <p>Numberphiles</p>
      <p>hello internet</p>
      <p>Kurgezat</p>
      <p>AsapScience</p>
      <p>Extra credits</p>
      <p>School of life</p>
      <p>freecodecamp</p>
      <p>MindYourDecision</p>
      <p>colt steele</p>
      <p>Oversimplified</p>
      <p>Programming with mosh</p>
      <p>vinheteiro</p>
      <p>webnoob</p>
      <p>MortMort</p> 
      <p>CS50</p>
      <p>Academind</p>
      <p>andrew dotson</p>
      <p>Fireship</p>
      <p>simplilearn</p>
      <p>Code Damn</p>
      <p>Massachusset institue of technology</p>
      <p>MIT Open courseware</p>
      <p>Chinese Pod</p> 
      <p>Coding Tech</p>
      <p>Design course</p> 
      <p>Traversy media</p>
      <p>Circle line art school</p> 
      <p>Aantonop</p>
      <p>Naomi Brockwell</p> 
      <p>Crypto Candor</p>
      <p>Hashoshi</p> 
      <p>Altcoin Daily</p>
      <p>Philakone</p> 
      <p>DevTips</p>
      <p>Kevin Powell</p> 
      <p>Web Dev Simplified</p> 
      <p>Adafruit industries</p> 
      <p>Vincent racaniello</p> 
      <p>khan academy</p> 
      <p>heartbeast</p>
      <p>wisecrack</p>
      <p>Firebase</p>
      <p>Google developers/Angel</p>
      <p>CGP Grey</p>
    </div>
  </div>
</template>
    
<script>

export default {
  layout: "youtube",
};
</script>
<style scoped lang="scss">
h2 {
  text-align: center;
  padding-top: 30px;
}
.channels--container{
  display: grid;
  grid-template-columns: repeat(4, auto);
  padding: 30px 0;
  gap: 15px;
  p{
    border:1px solid ;
    border-radius: 10px;
    padding:5px;
    &:hover{
      color: var(--main-color6);
      background-color: var(--main-color2);
    }
  }
}
</style>