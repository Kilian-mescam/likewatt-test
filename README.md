# LIKEWATT TEST - KILIAN MESCAM

## INSTALLATION
First, run the development server:

```bash
npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

```


## EXPLICATION DU PROJET

Le Projet est élaboré à l'aide de Next JS. Plusieurs librairies sont installées :
- tailwind css (ui)
- shadcn (composants)
- react-hook-form (formulaire)
- zod (validation du formulaire)
- lucide-react (icones)
- axios (requeêtes HTTP)

Le composant App effectue un appel API avec getData et récupère les données. Les données sont ensuite hydratées vers le composant Dashboard.
Ce composant Dashboard comprend 3 composants :
- Le composant NonEditableData (un tableau des données)
- Le composant EditDocument (un formulaire pour modifier les données sélectionnées ou créer une nouvelle ligne de donnée)
- le composant WeatherPanel

```bash
return (
    <div className='flex flex-col w-full'>
      <div className='flex w-full'>
        <div className="w-1/2 p-10 flex flex-col">
          <NonEditableData modelState={modelState} handleSelect={setDisplayedModel} />
        </div>
        <div className="w-1/2 p-10 flex flex-col gap-4">
          <EditDocument displayedModel={displayedModel} setModelState={setModelState} setDisplayedModel={setDisplayedModel} />
        </div>
      </div>
      <div className="w-full px-10 flex flex-col">
        <WeatherPanel latitude={latitude} longitude={longitude} />
      </div>
    </div>
  );
```

Le Hook useEffect permet 2 choses : 
- Créer un id aux modèles lorsque celui-ci est manquant (j'ai fait le choix de créer un id (si celui est manquant) afin de faciliter la création ou modification des lignes) En effet, si une ligne l'a pas d'id, le formulaire de droite créé une nouvelle ligne. Si l'id existe, cette ligne est modifiée.
- Collecter les infos de géolocalisation pour le composant Météo



## Composant Non Editable

Le composant Non Editable affiche les données dans un table ModelTable créé à partir de Shadcn

## Composant EditDocument

Le composant de droite EditDocument est un formulaire react-hook-form (DataForm) qui permet de créer des lignes de données supplémentaires. Un système de validation a été mis en place à l'aide de Zod. La validation du formulaire se base sur le modelSchema.

```bash
<ModelCard model={displayedModel}>
    <DataForm model={displayedModel} setModelState={setModelState} setDisplayedModel={setDisplayedModel} />
</ModelCard>
```

Si l'on sélectionne une ligne sur le tableau de gauche, ces données s'affichent dans le composant Editable, le formulaire est ainsi pré-rempli et modifiable ou supprimable.

## Composant Météo WeatherPanel

Je récupère les données latitude et longitude en paramètre du composant fonction WeatherPanel. 
J'effectue la requête API getWeather à l'intérieur du useEffect. 

Je trie ensuite afin de récupérer une seule donnée par jour (je prends arbitrairement les données de 12:00 chaque journée). 

```bash
  const filteredWeatherData = weatherData?.list.filter((weatherDay) => 
    weatherDay.dt_txt.includes("12:00:00")
  );
```

Je récupère ainsi le tableau de jour trié nommé filteredWeatherData, que j'affiche ensuite dans un carrousel.