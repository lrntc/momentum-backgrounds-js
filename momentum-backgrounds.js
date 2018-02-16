let momentumBackgrounds = {
  state: {
    elm: '',
    moments: [{
        hour: '5',
        url: '/images/antoine-barres.jpg'
      },
      {
        hour: '12',
        url: '/images/welcome-1.jpg'
      },
      {
        hour: '18',
        url: '/images/welcome-2.jpg'
      },
      {
        hour: '23',
        url: '/images/welcome-3.jpg'
      }
    ]
  },
  init: (elm, moments = {}) => { //TODO add support for custom moments

    if (elm) {

      momentumBackgrounds.state.elm = document.getElementById(elm);
      const bg = momentumBackgrounds.getBackground();
      momentumBackgrounds.state.elm.style.backgroundImage = "url('" + bg + "')";

    } else {
      console.log('momentumBackgrounds: Please define your anchor element')
    }

  },
  getBackground: () => {

    //Get current hour
    const dateTime = new Date();
    const hour = dateTime.getHours();

    //Calculate time diffs for each defined moment
    const timeDiff = momentumBackgrounds.state.moments.map(function(moment) {
      return Math.abs(hour - moment.hour);
    })

    //Get the smallest time diff from the array
    const smallestDiff = Math.min(...timeDiff);

    //Get the index to fetch the background url
    let momentsIndex = 0;
    timeDiff.find((elm, i) => {
      if (parseInt(elm) == parseInt(smallestDiff)) {
        momentsIndex = i;
      }
    })

    return momentumBackgrounds.state.moments[momentsIndex].url;

  }
}

export default momentumBackgrounds;