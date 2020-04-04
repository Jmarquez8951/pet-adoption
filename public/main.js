const pets = [
    {
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Trouble",
      color: "Poop-Colored",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg"
    },
    {
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "http://www.theouthousers.com/images/jck//ThanosCopter/news/grumpasaur.jpg"
    },
    {
      name: "Sassy",
      color: "Poop-Colored",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600"
    },
    {
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      name: "Smokey",
      color: "Poop-Colored",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://images.readwrite.com/wp-content/uploads/2018/03/t-rex-dino-quiz-e1490854556549.jpg"
    },
    {
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg"
    },
    {
      name: "Salem",
      color: "Poop-Colored",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://www.nation.co.ke/image/view/-/4078922/highRes/1742693/-/maxw/600/-/1453yvh/-/DINO.jpg"
    },
    {
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782"
    },
    {
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg"
    },
    {
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2015-11/2/12/enhanced/webdr15/anigif_enhanced-29802-1446485228-10.gif?crop=250:165;0,0&downsize=715"
    },
    {
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "http://funnyanimalphoto.com/wp-content/uploads/2013/08/cat_caught_mouse_thegatewaypundit.jpg"
    },
    {
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg"
    },
    {
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "data:image/jpeg;base64,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"
    },
    {
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "https://static01.nyt.com/images/2019/09/04/business/04chinaclone-01/merlin_160087014_de761d9a-4360-402d-a15b-ddeff775760d-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
    },
    {
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0G0r48FioGAtbIPPv1WjioDOFQAtVPfEomldxMTsPVkMAMjtM&s"
    }
  ];

  const printToDom = (divId, textToPrint) => {
    const selecetedDiv = document.getElementById(divId);
    selecetedDiv.innerHTML = textToPrint;
};

const buildPetsCard = (arr) => {
    let domString = '';
    for (let i = 0; i < arr.length; i++) {
        domString += `<div class="pets">`;
        domString += '<header>'
        domString += `<h3>${arr[i].name}</h3>`
        domString += '</header>'
        domString += `<img src="${arr[i].imageUrl}" alt="">`
        domString += `<p>${arr[i].color}</p>`
        domString += `<p>${arr[i].specialSkill}</p>`
        domString += `<footer class="${arr[i].type}">${arr[i].type}</footer>`
        domString += '</div>'
    }
    printToDom('pets', domString)
};

const findMyCard = (e) => {
  const buttonId = e.target.id;
  if (buttonId === 'reset'){
    buildPetsCard(pets);
  } else {
    const myCard = [];
    for (let i = 0; i < pets.length; i++){
      if (pets[i].type === buttonId){
        myCard.push(pets[i]);
      }
    }
    buildPetsCard(myCard);
  }
};

const events = () => {
  document.getElementById('cat').addEventListener('click', findMyCard);
  document.getElementById('dog').addEventListener('click', findMyCard);
  document.getElementById('dino').addEventListener('click', findMyCard);
  document.getElementById('reset').addEventListener('click', findMyCard);
}

const init = () => {
  buildPetsCard(pets);
  events();
}

init();