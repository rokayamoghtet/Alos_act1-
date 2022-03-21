JG.repeat(0, 10, {
    Track: JG.objectTrack(),
    ServiceUPS(){
        return (_.words(this.profile.ServiceUPS)[0])
    },
    Poids: `${JG.integer()}`,
    Adresse: `${JG.integer(1 , 48)} ${JG.street()}, ${JG.city()}, ${JG.state()}`,
    DateLivré: `${JG.date(new Date(2022, 21, 03)).format('DD-MM-YYYY')}`,
    TempsLivré:`${JG.temps(new TimeRanges("9:21:20")).format('HH:MM:SS')}`,
    Signé() {
        return (_.words(this.profile.nom)[0])
      },
    about: JG.loremIpsum({ units: 'sentences', count: 2 }),
  });
