<template>
  <div class="page">
    <h1>Way more than just music</h1>

    <h2>French channels</h2>
    <div class="channels--container">
      <div>
        <p>Vulgariasation</p>
        <p>E-penser</p>
        <p>Les statistiques expliquees a mon chat</p>
        <p>Sciences etonnantes</p>
        <p>Dans ton corps</p>
        <p>Micmaths</p>
        <p>M.Phil</p>
        <p>Victor ferry</p>
        <p>Nota bene</p>
        <p>Cyrus North</p>
        <p>Primum non nocere</p>
        <p>Experimentboy</p>
        <p>Passe science</p>
        <p>Deusex silicium</p>
        <p>ioduremetallique</p>
        <p>Hygiene mentale</p>
        <p>Horizon gull</p>
        <p>Heu?reka</p>
        <p>Psylab</p>
        <p>la tronche en biais</p>
        <p>dany caligula</p>
      </div>
      <div>
        <p>Conferenciers</p>
        <p>Aurelien Barreau</p>
        <p>Jean-Marc Jancovici</p>
        <p>thinkerview</p>
        <p>ce soir ou jamais</p>
        <p>Institut des hautes etudes scientifiques</p>
        <p>HEC debats</p>
      </div>
      <div>
        <p>Autres</p>
        <p>inthepanda</p>
        <p>cocadmin</p>
        <p>Data gueule</p>
        <p>Vu france TV</p>
        <p>Partager c'est sympa</p>
      </div>
    </div>
    <h2>English channels</h2>
    <div class="channels--container">
      <div>
        <p>Dev</p>
        <p>Academind</p>
        <p>webnoob</p>
        <p>Fireship</p>
        <p>simplilearn</p>
        <p>Code Damn</p>
        <p>Coding Tech</p>
        <p>Design course</p>
        <p>Traversy media</p>
        <p>DevTips</p>
        <p>Kevin Powell</p>
        <p>Web Dev Simplified</p>
        <p>heartbeast</p>
        <p>Firebase</p>
        <p>Google developers/Angel</p>
        <p>colt steele</p>
      </div>

      <div>
        <p>Crypto</p>
        <p>Aantonop</p>
        <p>Naomi Brockwell</p>
        <p>Crypto Candor</p>
        <p>Hashoshi</p>
        <p>Altcoin Daily</p>
        <p>Philakone</p>
      </div>

      <div>
        <p>Vulgarisators</p>
        <p>Kurgezat</p>
        <p>AsapScience</p>
        <p>Numberphiles</p>
        <p>3Blue1Brown</p>
        <p>andrew dotson</p>
        <p>wisecrack</p>
        <p>Extra credits</p>
        <p>School of life</p>
        <p>Oversimplified</p>
        <p>Adafruit industries</p>
        <p>Vincent racaniello</p>
      </div>

      <div>
        <p>Others</p>
        <p>hello internet</p>
        <p>vinheteiro</p>
        <p>Chinese Pod</p>
        <p>Circle line art school</p>
        <p>CGP Grey</p>
        <p>MortMort</p>
        <p>MindYourDecision</p>
      </div>

      <div>
        <p>MOOCS</p>
        <p>freecodecamp</p>
        <p>CS50</p>
        <p>Massachusset institue of technology</p>
        <p>MIT Open courseware</p>
        <p>Programming with mosh</p>
        <p>khan academy</p>
      </div>   
    </div>
  </div>
</template>
    
<script>
export default {
  layout: "youtube"
};
</script>
<style scoped lang="scss">
h2 {
  text-align: center;
  padding-top: 30px;
}
.channels--container {
  display: grid;
  grid-template-columns: repeat(4, auto);
  padding: 30px 0;
  gap: 15px;
  p {
    border: 1px solid;
    border-radius: 10px;
    padding: 5px;
    width: fit-content;
    &:hover {
      color: var(--main-color6);
      background-color: var(--main-color2);
    }
  }
}
</style>