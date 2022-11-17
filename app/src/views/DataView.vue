<script setup>
import Hero from '../components/Hero-DataView.vue'
import Carousel from '../components/Carousel.vue'
</script>

<template>
  <Hero/>
  
  <div class="relative py-20 overflow-hidden bg-white">
    <h2 class="font-bold text-center mb-16 text-2xl md:text-3xl lg:text-4xl font-heading text-emerald-700">
      L'introduction.
    </h2>  

    <div class="mx-auto max-w-7xl flex md:flex-row flex-col-reverse items-center md:justify-center gap-[4%]">
      <div class="w-[95%] md:w-[48%] flex justify-center">
        <img alt="lplplp" class="md:ml-auto w-[90%]" src="https://cdn.discordapp.com/attachments/1028966517481676882/1030459864331333683/unknown.png"/>
      </div>
      <div class="w-[95%] md:w-[48%]">
        <h3 class="font-bold text-xl md:text-2xl lg:text-3xl font-heading text-emerald-700">
          La forêt représente 31% de la surface émergée
        </h3>  
      </div>
    </div>

    <div class="mx-auto max-w-7xl flex md:flex-row flex-col items-center md:justify-center gap-[4%] mt-16">
      <div class="w-[95%] md:w-[48%]">
        <h3 class="font-bold text-xl md:text-2xl lg:text-3xl font-heading text-emerald-700">
          La maison de la planète.
        </h3>  

        <div class="md:ml-auto mt-8 space-y-5">
          <p class="flex items-center text-gray-700">Les forêts primaires regroupent également des espèces endémiques, c’est-à-dire des espèces présentes exclusivement dans une région géographique délimitée.</p>
          <p class="flex items-center text-gray-700">On parle alors de «niches écologiques». Dans ces forêts cohabitent des espèces protégées comme le jaguar, le tigre ou encore le caïman noir.</p>
          <p class="flex items-center text-gray-700">Il s’agit d’autant d’espèces à protéger et c’est sans compter sur les centaines de milliers d’espèces encore inconnues ou non répertoriées.</p>
        </div>
      </div>
      <div class="w-[95%] md:w-[48%] flex justify-center">
        <img alt="lplplp" class="w-[80%]" src="https://cdn.discordapp.com/attachments/1028966517481676882/1030459744550404096/unknown.png"/>
      </div>
    </div>
  </div>

  <div class="relative py-20 overflow-hidden bg-white">
    <h2 class="font-bold text-center mb-16 text-2xl md:text-3xl lg:text-4xl font-heading text-emerald-700">
      Combien de déforestation se produit<br/>chaque année ?
    </h2>  

    <div class="mx-auto max-w-7xl flex md:flex-row flex-col-reverse gap-[4%] md:items-start items-center md:justify-start">
      <div class="w-[95%] md:w-[48%]">
        <div class="md:ml-auto z-20 absolute w-[100%] sm:h-[65px] h-[80px] bg-white"></div>
        <iframe title="lpllp" src="https://ourworldindata.org/grapher/annual-deforestation" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>
        <div class="z-20 sm:mt-[-35px] absolute w-[100%] sm:h-[35px] mt-[-170px] h-[170px] bg-white"></div>
      </div>
      <div class="w-[95%] md:w-[48%] mt-24">
        <h3 class="font-bold text-xl md:text-2xl lg:text-3xl font-heading text-emerald-700">
          Analyse :
        </h3> 

        <div class="mt-8 space-y-5">
          <p class="flex items-center text-gray-700">Au cours de la décennie écoulée depuis 2010, la perte nette de forêts dans le monde a été de 4,7 millions d'hectares par an. 1 Cependant, les taux de déforestation étaient beaucoup plus élevés.</p>

          <p class="flex items-center text-gray-700">L'ONU FAO estime que 10 millions d'hectares de forêt sont abattus chaque année.</p>

          <p class="flex items-center text-gray-700">Cette carte interactive montre les taux de déforestation à travers le monde.</p>

        </div>

        <h3 class="font-bold text-xl md:text-2xl lg:text-3xl mt-10 font-heading text-emerald-700">
            L'adaptation dans l'histoire :
        </h3>  

        <div class="mt-8 space-y-5">
          <p class="flex items-center text-gray-700">
            Juan le B extrait l'huile de palme des palmiers, tout ça pour l'unique plaisir de manger et de faire du Nutella en grosse quantité.
          </p>
        </div>
      </div>
    </div>

    <div class="w-full flex justify-center">
      <img alt="lplplp" src="https://cdn.discordapp.com/attachments/1028966517481676882/1030423332971102230/Infographie-perte-forets-by-La-Nacion_1.png"/>
    </div>
  </div>
  
  <div class="relative pb-10 overflow-hidden bg-white">
    <h2 class="font-bold text-center text-2xl md:text-3xl lg:text-4xl font-heading text-emerald-700">
      La production d'huile de palme au Brésil.
    </h2>
    <div class="mx-auto max-w-7xl flex md:flex-row flex-col md:items-start items-center gap-[4%] md:justify-start">
      <div class="w-[95%] md:w-[48%] mt-24">
        <h3 class="font-bold text-xl md:text-2xl lg:text-3xl font-heading text-emerald-700">
          Analyse :
        </h3> 

        <div class="mt-8 space-y-5">
          <p class="flex items-center text-gray-700">
            La production d'huile de palme a augmenté rapidement au cours des 50 dernières années. En 1970, le monde ne produisait que 2 millions de tonnes. C'est maintenant 35 fois plus élevé : en 2018, le monde a produit 71 millions de tonnes. L'évolution de la production mondiale est indiquée dans le graphique.          </p>
        </div>

        <h3 class="font-bold text-xl md:text-2xl lg:text-3xl mt-10 font-heading text-emerald-700">
            L'adaptation dans l'histoire :
        </h3>  

        <div class="mt-8 space-y-5">
          <p class="flex items-center text-gray-700">
            Juan le B extrait l'huile de palme des palmiers, tout ça pour l'unique plaisir de manger et de faire du Nutella en grosse quantité.
          </p>
        </div>
      </div>
      <div class="w-[95%] md:w-[48%]">
        <div class="z-20 absolute w-[100%] sm:h-[65px] h-[80px] bg-white"></div>
        <iframe title="ccc" src="https://ourworldindata.org/grapher/palm-oil-production?country=~BRA" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>
        <div class="z-20 sm:mt-[-35px] absolute w-[100%] sm:h-[35px] mt-[-170px] h-[170px] bg-white"></div>
      </div>
    </div>
  </div>


  <div class="relative pb-10 overflow-hidden bg-white">
    <h2 class="font-bold text-center text-2xl md:text-3xl lg:text-4xl font-heading text-emerald-700">
      Comment la demande de soja a-t-elle évolué au fil du temps ?
    </h2>
    <div class="mx-auto max-w-7xl flex md:flex-row items-center md:items-start flex-col-reverse gap-[4%] md:justify-start">
      <div class="w-[95%] md:w-[48%]">
        <div class="z-20 absolute w-[100%] sm:h-[65px] h-[80px] bg-white"></div>
        <iframe title="ccc" src="https://ourworldindata.org/grapher/soybean-production?tab=chart&country=~BRA" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>
        <div class="z-20 sm:mt-[-35px] absolute w-[100%] sm:h-[35px] mt-[-170px] h-[170px] bg-white"></div>
      </div>
      <div class="w-[95%] md:w-[48%] mt-24">
        <h3 class="font-bold text-xl md:text-2xl lg:text-3xl font-heading text-emerald-700">
          Analyse :
        </h3>  

        <div class="mt-8 space-y-5">
          <p class="flex items-center text-gray-700">
            La production mondiale de soja a explosé au cours des 50 dernières années. La production mondiale est aujourd'hui plus de 13 fois supérieure à ce qu'elle était au début des années 1960. Même depuis l'an 2000, la production a plus que doublé.
          </p>
        </div>

        <h3 class="font-bold text-xl md:text-2xl lg:text-3xl mt-10 font-heading text-emerald-700">
            L'adaptation dans l'histoire :
        </h3>  

        <div class="mt-8 space-y-5">
          <p class="flex items-center text-gray-700">
            Depuis l'arrivée de Juan Le B en 2000 la production de soja a explosé, il abat tous les arbres sur son passage afin de récupérer le maximum de soja.
          </p>
        </div>
      </div>
    </div>
  </div>


  <h2 class="font-bold text-center mb-16 text-2xl md:text-3xl lg:text-4xl font-heading text-emerald-700">
    Répercussions
  </h2>  
  <Carousel />
</template>
