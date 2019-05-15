const fragment = document.createDocumentFragment();
const artworkTemplate = document.getElementById('artwork-template');

const artworks = [
  {
    alt: 'The Scream',
    width: 474,
    height: 600,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Edvard_Munch_-_The_Scream%2C_1910_%28Munch_Museum%29.jpg/189px-Edvard_Munch_-_The_Scream%2C_1910_%28Munch_Museum%29.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Edvard_Munch_-_The_Scream%2C_1910_%28Munch_Museum%29.jpg/474px-Edvard_Munch_-_The_Scream%2C_1910_%28Munch_Museum%29.jpg',
        w: 474,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Edvard_Munch_-_The_Scream%2C_1910_%28Munch_Museum%29.jpg/606px-Edvard_Munch_-_The_Scream%2C_1910_%28Munch_Museum%29.jpg',
        w: 606,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Edvard_Munch_-_The_Scream%2C_1910_%28Munch_Museum%29.jpg/808px-Edvard_Munch_-_The_Scream%2C_1910_%28Munch_Museum%29.jpg',
        w: 808,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/f/fe/Edvard_Munch_-_The_Scream%2C_1910_%28Munch_Museum%29.jpg',
        w: 10025,
      },
    ],
  },
  {
    alt: 'Anxiety',
    width: 465,
    height: 600,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Edvard_Munch_-_Anxiety_-_Google_Art_Project.jpg/372px-Edvard_Munch_-_Anxiety_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Edvard_Munch_-_Anxiety_-_Google_Art_Project.jpg/372px-Edvard_Munch_-_Anxiety_-_Google_Art_Project.jpg',
        w: 372,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Edvard_Munch_-_Anxiety_-_Google_Art_Project.jpg/595px-Edvard_Munch_-_Anxiety_-_Google_Art_Project.jpg',
        w: 595,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Edvard_Munch_-_Anxiety_-_Google_Art_Project.jpg/794px-Edvard_Munch_-_Anxiety_-_Google_Art_Project.jpg',
        w: 794,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/a/ae/Edvard_Munch_-_Anxiety_-_Google_Art_Project.jpg',
        w: 5221,
      },
    ],
  },
  {
    alt: 'At the Roulette Table in Monte Carlo',
    width: 640,
    height: 416,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Edvard_Munch_-_At_the_Roulette_Table_in_Monte_Carlo_-_Google_Art_Project.jpg/320px-Edvard_Munch_-_At_the_Roulette_Table_in_Monte_Carlo_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Edvard_Munch_-_At_the_Roulette_Table_in_Monte_Carlo_-_Google_Art_Project.jpg/640px-Edvard_Munch_-_At_the_Roulette_Table_in_Monte_Carlo_-_Google_Art_Project.jpg',
        w: 640,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Edvard_Munch_-_At_the_Roulette_Table_in_Monte_Carlo_-_Google_Art_Project.jpg/1024px-Edvard_Munch_-_At_the_Roulette_Table_in_Monte_Carlo_-_Google_Art_Project.jpg',
        w: 1024,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Edvard_Munch_-_At_the_Roulette_Table_in_Monte_Carlo_-_Google_Art_Project.jpg/1280px-Edvard_Munch_-_At_the_Roulette_Table_in_Monte_Carlo_-_Google_Art_Project.jpg',
        w: 1280,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/1/1f/Edvard_Munch_-_At_the_Roulette_Table_in_Monte_Carlo_-_Google_Art_Project.jpg',
        w: 3765,
      },
    ],
  },
  {
    alt: 'Consul Christen Sandberg',
    width: 410,
    height: 599,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Edvard_Munch_-_Consul_Christen_Sandberg_-_Google_Art_Project.jpg/164px-Edvard_Munch_-_Consul_Christen_Sandberg_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Edvard_Munch_-_Consul_Christen_Sandberg_-_Google_Art_Project.jpg/410px-Edvard_Munch_-_Consul_Christen_Sandberg_-_Google_Art_Project.jpg',
        w: 410,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Edvard_Munch_-_Consul_Christen_Sandberg_-_Google_Art_Project.jpg/525px-Edvard_Munch_-_Consul_Christen_Sandberg_-_Google_Art_Project.jpg',
        w: 525,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Edvard_Munch_-_Consul_Christen_Sandberg_-_Google_Art_Project.jpg/700px-Edvard_Munch_-_Consul_Christen_Sandberg_-_Google_Art_Project.jpg',
        w: 700,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/9/93/Edvard_Munch_-_Consul_Christen_Sandberg_-_Google_Art_Project.jpg',
        w: 2690,
      },
    ],
  },
  {
    alt: 'Death and Life',
    width: 405,
    height: 599,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Edvard_Munch_-_Death_and_Life_-_Google_Art_Project.jpg/162px-Edvard_Munch_-_Death_and_Life_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Edvard_Munch_-_Death_and_Life_-_Google_Art_Project.jpg/406px-Edvard_Munch_-_Death_and_Life_-_Google_Art_Project.jpg',
        w: 406,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Edvard_Munch_-_Death_and_Life_-_Google_Art_Project.jpg/519px-Edvard_Munch_-_Death_and_Life_-_Google_Art_Project.jpg',
        w: 519,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Edvard_Munch_-_Death_and_Life_-_Google_Art_Project.jpg/692px-Edvard_Munch_-_Death_and_Life_-_Google_Art_Project.jpg',
        w: 692,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/6/67/Edvard_Munch_-_Death_and_Life_-_Google_Art_Project.jpg',
        w: 2695,
      },
    ],
  },
  {
    alt: 'Death in the Sickroom',
    width: 713,
    height: 599,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Edvard_Munch_-_Death_in_the_Sickroom_-_Google_Art_Project.jpg/286px-Edvard_Munch_-_Death_in_the_Sickroom_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Edvard_Munch_-_Death_in_the_Sickroom_-_Google_Art_Project.jpg/714px-Edvard_Munch_-_Death_in_the_Sickroom_-_Google_Art_Project.jpg',
        w: 714,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Edvard_Munch_-_Death_in_the_Sickroom_-_Google_Art_Project.jpg/914px-Edvard_Munch_-_Death_in_the_Sickroom_-_Google_Art_Project.jpg',
        w: 914,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Edvard_Munch_-_Death_in_the_Sickroom_-_Google_Art_Project.jpg/1218px-Edvard_Munch_-_Death_in_the_Sickroom_-_Google_Art_Project.jpg',
        w: 1218,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/0/08/Edvard_Munch_-_Death_in_the_Sickroom_-_Google_Art_Project.jpg',
        w: 4310,
      },
    ],
  },
  {
    alt: 'Edvard Munch at the Beach in Warnemünde',
    width: 634,
    height: 599,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Edvard_Munch_-_Edvard_Munch_at_the_Beach_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg/254px-Edvard_Munch_-_Edvard_Munch_at_the_Beach_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Edvard_Munch_-_Edvard_Munch_at_the_Beach_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg/635px-Edvard_Munch_-_Edvard_Munch_at_the_Beach_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg',
        w: 635,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Edvard_Munch_-_Edvard_Munch_at_the_Beach_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg/813px-Edvard_Munch_-_Edvard_Munch_at_the_Beach_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg',
        w: 813,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Edvard_Munch_-_Edvard_Munch_at_the_Beach_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg/1084px-Edvard_Munch_-_Edvard_Munch_at_the_Beach_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg',
        w: 1084,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/8/81/Edvard_Munch_-_Edvard_Munch_at_the_Beach_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg',
        w: 4238,
      },
    ],
  },
  {
    alt: 'Evening. Melancholy',
    width: 663,
    height: 599,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Edvard_Munch_-_Evening._Melancholy_I_-_Google_Art_Project.jpg/266px-Edvard_Munch_-_Evening._Melancholy_I_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Edvard_Munch_-_Evening._Melancholy_I_-_Google_Art_Project.jpg/664px-Edvard_Munch_-_Evening._Melancholy_I_-_Google_Art_Project.jpg',
        w: 664,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Edvard_Munch_-_Evening._Melancholy_I_-_Google_Art_Project.jpg/850px-Edvard_Munch_-_Evening._Melancholy_I_-_Google_Art_Project.jpg',
        w: 850,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Edvard_Munch_-_Evening._Melancholy_I_-_Google_Art_Project.jpg/1133px-Edvard_Munch_-_Evening._Melancholy_I_-_Google_Art_Project.jpg',
        w: 1133,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/c/c0/Edvard_Munch_-_Evening._Melancholy_I_-_Google_Art_Project.jpg',
        w: 2720,
      },
    ],
  },
  {
    alt: 'Four Girls in Åsgårdstrand',
    width: 765,
    height: 600,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Edvard_Munch_-_Four_Girls_in_%C3%85sg%C3%A5rdstrand_-_Google_Art_Project.jpg/306px-Edvard_Munch_-_Four_Girls_in_%C3%85sg%C3%A5rdstrand_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Edvard_Munch_-_Four_Girls_in_%C3%85sg%C3%A5rdstrand_-_Google_Art_Project.jpg/612px-Edvard_Munch_-_Four_Girls_in_%C3%85sg%C3%A5rdstrand_-_Google_Art_Project.jpg',
        w: 612,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Edvard_Munch_-_Four_Girls_in_%C3%85sg%C3%A5rdstrand_-_Google_Art_Project.jpg/979px-Edvard_Munch_-_Four_Girls_in_%C3%85sg%C3%A5rdstrand_-_Google_Art_Project.jpg',
        w: 979,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Edvard_Munch_-_Four_Girls_in_%C3%85sg%C3%A5rdstrand_-_Google_Art_Project.jpg/1280px-Edvard_Munch_-_Four_Girls_in_%C3%85sg%C3%A5rdstrand_-_Google_Art_Project.jpg',
        w: 1280,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/7/7f/Edvard_Munch_-_Four_Girls_in_%C3%85sg%C3%A5rdstrand_-_Google_Art_Project.jpg',
        w: 4366,
      },
    ],
  },
  {
    alt: 'Galloping Horse',
    width: 488,
    height: 600,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Edvard_Munch_-_Galloping_Horse_-_Google_Art_Project.jpg/195px-Edvard_Munch_-_Galloping_Horse_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Edvard_Munch_-_Galloping_Horse_-_Google_Art_Project.jpg/390px-Edvard_Munch_-_Galloping_Horse_-_Google_Art_Project.jpg',
        w: 390,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Edvard_Munch_-_Galloping_Horse_-_Google_Art_Project.jpg/625px-Edvard_Munch_-_Galloping_Horse_-_Google_Art_Project.jpg',
        w: 625,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Edvard_Munch_-_Galloping_Horse_-_Google_Art_Project.jpg/833px-Edvard_Munch_-_Galloping_Horse_-_Google_Art_Project.jpg',
        w: 833,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/7/7f/Edvard_Munch_-_Galloping_Horse_-_Google_Art_Project.jpg',
        w: 3661,
      },
    ],
  },
  {
    alt: 'Inheritance',
    width: 510,
    height: 600,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Edvard_Munch_-_Inheritance_-_Google_Art_Project.jpg/204px-Edvard_Munch_-_Inheritance_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Edvard_Munch_-_Inheritance_-_Google_Art_Project.jpg/408px-Edvard_Munch_-_Inheritance_-_Google_Art_Project.jpg',
        w: 408,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Edvard_Munch_-_Inheritance_-_Google_Art_Project.jpg/653px-Edvard_Munch_-_Inheritance_-_Google_Art_Project.jpg',
        w: 653,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Edvard_Munch_-_Inheritance_-_Google_Art_Project.jpg/870px-Edvard_Munch_-_Inheritance_-_Google_Art_Project.jpg',
        w: 870,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/2/2b/Edvard_Munch_-_Inheritance_-_Google_Art_Project.jpg',
        w: 3202,
      },
    ],
  },
  {
    alt: 'Jealousy',
    width: 780,
    height: 600,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Edvard_Munch_-_Jealousy_-_Google_Art_Project.jpg/312px-Edvard_Munch_-_Jealousy_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Edvard_Munch_-_Jealousy_-_Google_Art_Project.jpg/624px-Edvard_Munch_-_Jealousy_-_Google_Art_Project.jpg',
        w: 624,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Edvard_Munch_-_Jealousy_-_Google_Art_Project.jpg/999px-Edvard_Munch_-_Jealousy_-_Google_Art_Project.jpg',
        w: 999,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Edvard_Munch_-_Jealousy_-_Google_Art_Project.jpg/1280px-Edvard_Munch_-_Jealousy_-_Google_Art_Project.jpg',
        w: 1280,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/2/2f/Edvard_Munch_-_Jealousy_-_Google_Art_Project.jpg',
        w: 4506,
      },
    ],
  },
  {
    alt: 'Kiss',
    width: 591,
    height: 600,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Edvard_Munch_-_Kiss_IV_-_Google_Art_Project.jpg/236px-Edvard_Munch_-_Kiss_IV_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Edvard_Munch_-_Kiss_IV_-_Google_Art_Project.jpg/473px-Edvard_Munch_-_Kiss_IV_-_Google_Art_Project.jpg',
        w: 473,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Edvard_Munch_-_Kiss_IV_-_Google_Art_Project.jpg/757px-Edvard_Munch_-_Kiss_IV_-_Google_Art_Project.jpg',
        w: 757,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Edvard_Munch_-_Kiss_IV_-_Google_Art_Project.jpg/1009px-Edvard_Munch_-_Kiss_IV_-_Google_Art_Project.jpg',
        w: 1009,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/0/08/Edvard_Munch_-_Kiss_IV_-_Google_Art_Project.jpg',
        w: 4170,
      },
    ],
  },
  {
    alt: 'Madonna',
    width: 451,
    height: 599,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Edvard_Munch_-_Madonna_-_Google_Art_Project_%28495100%29.jpg/181px-Edvard_Munch_-_Madonna_-_Google_Art_Project_%28495100%29.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Edvard_Munch_-_Madonna_-_Google_Art_Project_%28495100%29.jpg/452px-Edvard_Munch_-_Madonna_-_Google_Art_Project_%28495100%29.jpg',
        w: 452,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Edvard_Munch_-_Madonna_-_Google_Art_Project_%28495100%29.jpg/578px-Edvard_Munch_-_Madonna_-_Google_Art_Project_%28495100%29.jpg',
        w: 578,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Edvard_Munch_-_Madonna_-_Google_Art_Project_%28495100%29.jpg/771px-Edvard_Munch_-_Madonna_-_Google_Art_Project_%28495100%29.jpg',
        w: 771,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/f/f8/Edvard_Munch_-_Madonna_-_Google_Art_Project_%28495100%29.jpg',
        w: 3144,
      },
    ],
  },
  {
    alt: 'Madonna',
    width: 364,
    height: 480,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Edvard_Munch_-_Madonna_-_Google_Art_Project.jpg/182px-Edvard_Munch_-_Madonna_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Edvard_Munch_-_Madonna_-_Google_Art_Project.jpg/455px-Edvard_Munch_-_Madonna_-_Google_Art_Project.jpg',
        w: 455,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Edvard_Munch_-_Madonna_-_Google_Art_Project.jpg/582px-Edvard_Munch_-_Madonna_-_Google_Art_Project.jpg',
        w: 582,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Edvard_Munch_-_Madonna_-_Google_Art_Project.jpg/776px-Edvard_Munch_-_Madonna_-_Google_Art_Project.jpg',
        w: 776,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/5/5f/Edvard_Munch_-_Madonna_-_Google_Art_Project.jpg',
        w: 3190,
      },
    ],
  },
  {
    alt: 'Metabolism',
    width: 418,
    height: 600,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Edvard_Munch_-_Metabolism_-_Google_Art_Project.jpg/167px-Edvard_Munch_-_Metabolism_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Edvard_Munch_-_Metabolism_-_Google_Art_Project.jpg/334px-Edvard_Munch_-_Metabolism_-_Google_Art_Project.jpg',
        w: 334,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Edvard_Munch_-_Metabolism_-_Google_Art_Project.jpg/535px-Edvard_Munch_-_Metabolism_-_Google_Art_Project.jpg',
        w: 535,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Edvard_Munch_-_Metabolism_-_Google_Art_Project.jpg/713px-Edvard_Munch_-_Metabolism_-_Google_Art_Project.jpg',
        w: 713,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/a/a5/Edvard_Munch_-_Metabolism_-_Google_Art_Project.jpg',
        w: 3449,
      },
    ],
  },

  {
    alt: 'On the Sofa',
    width: 800,
    height: 422,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Edvard_Munch_-_On_the_Sofa_-_Google_Art_Project.jpg/320px-Edvard_Munch_-_On_the_Sofa_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Edvard_Munch_-_On_the_Sofa_-_Google_Art_Project.jpg/640px-Edvard_Munch_-_On_the_Sofa_-_Google_Art_Project.jpg',
        w: 640,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Edvard_Munch_-_On_the_Sofa_-_Google_Art_Project.jpg/1024px-Edvard_Munch_-_On_the_Sofa_-_Google_Art_Project.jpg',
        w: 1024,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Edvard_Munch_-_On_the_Sofa_-_Google_Art_Project.jpg/1280px-Edvard_Munch_-_On_the_Sofa_-_Google_Art_Project.jpg',
        w: 1280,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/f/f4/Edvard_Munch_-_On_the_Sofa_-_Google_Art_Project.jpg',
        w: 3806,
      },
    ],
  },
  {
    alt: 'Red and White',
    width: 800,
    height: 578,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Edvard_Munch_-_Red_and_White_-_Google_Art_Project.jpg/320px-Edvard_Munch_-_Red_and_White_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Edvard_Munch_-_Red_and_White_-_Google_Art_Project.jpg/640px-Edvard_Munch_-_Red_and_White_-_Google_Art_Project.jpg',
        w: 640,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Edvard_Munch_-_Red_and_White_-_Google_Art_Project.jpg/1024px-Edvard_Munch_-_Red_and_White_-_Google_Art_Project.jpg',
        w: 1024,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Edvard_Munch_-_Red_and_White_-_Google_Art_Project.jpg/1280px-Edvard_Munch_-_Red_and_White_-_Google_Art_Project.jpg',
        w: 1280,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/b/b2/Edvard_Munch_-_Red_and_White_-_Google_Art_Project.jpg',
        w: 4976,
      },
    ],
  },
  {
    alt: 'Rosa Meissner at the Hotel Rohn in Warnemünde',
    width: 517,
    height: 599,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Edvard_Munch_-_Rosa_Meissner_at_the_Hotel_Rohn_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg/207px-Edvard_Munch_-_Rosa_Meissner_at_the_Hotel_Rohn_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Edvard_Munch_-_Rosa_Meissner_at_the_Hotel_Rohn_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg/517px-Edvard_Munch_-_Rosa_Meissner_at_the_Hotel_Rohn_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg',
        w: 517,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Edvard_Munch_-_Rosa_Meissner_at_the_Hotel_Rohn_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg/662px-Edvard_Munch_-_Rosa_Meissner_at_the_Hotel_Rohn_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg',
        w: 662,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Edvard_Munch_-_Rosa_Meissner_at_the_Hotel_Rohn_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg/883px-Edvard_Munch_-_Rosa_Meissner_at_the_Hotel_Rohn_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg',
        w: 883,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/7/77/Edvard_Munch_-_Rosa_Meissner_at_the_Hotel_Rohn_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg',
        w: 3922,
      },
    ],
  },
  {
    alt: 'Self-Portrait',
    width: 415,
    height: 599,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Edvard_Munch_-_Self-Portrait_%281895%29_G0192-59_-_Google_Art_Project.jpg/166px-Edvard_Munch_-_Self-Portrait_%281895%29_G0192-59_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Edvard_Munch_-_Self-Portrait_%281895%29_G0192-59_-_Google_Art_Project.jpg/415px-Edvard_Munch_-_Self-Portrait_%281895%29_G0192-59_-_Google_Art_Project.jpg',
        w: 415,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Edvard_Munch_-_Self-Portrait_%281895%29_G0192-59_-_Google_Art_Project.jpg/532px-Edvard_Munch_-_Self-Portrait_%281895%29_G0192-59_-_Google_Art_Project.jpg',
        w: 532,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Edvard_Munch_-_Self-Portrait_%281895%29_G0192-59_-_Google_Art_Project.jpg/709px-Edvard_Munch_-_Self-Portrait_%281895%29_G0192-59_-_Google_Art_Project.jpg',
        w: 709,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/1/14/Edvard_Munch_-_Self-Portrait_%281895%29_G0192-59_-_Google_Art_Project.jpg',
        w: 2416,
      },
    ],
  },
  {
    alt: 'Self-Portrait',
    width: 437,
    height: 600,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Edvard_Munch_-_Self-Portrait_-_Google_Art_Project_%28533070%29.jpg/175px-Edvard_Munch_-_Self-Portrait_-_Google_Art_Project_%28533070%29.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Edvard_Munch_-_Self-Portrait_-_Google_Art_Project_%28533070%29.jpg/350px-Edvard_Munch_-_Self-Portrait_-_Google_Art_Project_%28533070%29.jpg',
        w: 350,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Edvard_Munch_-_Self-Portrait_-_Google_Art_Project_%28533070%29.jpg/559px-Edvard_Munch_-_Self-Portrait_-_Google_Art_Project_%28533070%29.jpg',
        w: 559,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Edvard_Munch_-_Self-Portrait_-_Google_Art_Project_%28533070%29.jpg/746px-Edvard_Munch_-_Self-Portrait_-_Google_Art_Project_%28533070%29.jpg',
        w: 746,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/5/5e/Edvard_Munch_-_Self-Portrait_-_Google_Art_Project_%28533070%29.jpg',
        w: 2383,
      },
    ],
  },
  {
    alt: 'Self-Portrait at 53 Am Strom in Warnemünde',
    width: 627,
    height: 600,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Edvard_Munch_-_Self-Portrait_at_53_Am_Strom_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg/251px-Edvard_Munch_-_Self-Portrait_at_53_Am_Strom_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Edvard_Munch_-_Self-Portrait_at_53_Am_Strom_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg/502px-Edvard_Munch_-_Self-Portrait_at_53_Am_Strom_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg',
        w: 502,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Edvard_Munch_-_Self-Portrait_at_53_Am_Strom_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg/803px-Edvard_Munch_-_Self-Portrait_at_53_Am_Strom_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg',
        w: 803,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Edvard_Munch_-_Self-Portrait_at_53_Am_Strom_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg/1070px-Edvard_Munch_-_Self-Portrait_at_53_Am_Strom_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg',
        w: 1070,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/d/d1/Edvard_Munch_-_Self-Portrait_at_53_Am_Strom_in_Warnem%C3%BCnde_-_Google_Art_Project.jpg',
        w: 4516,
      },
    ],
  },
  {
    alt: 'Self-Portrait in Hell',
    width: 478,
    height: 599,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Edvard_Munch_-_Self-Portrait_in_Hell_-_Google_Art_Project.jpg/191px-Edvard_Munch_-_Self-Portrait_in_Hell_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Edvard_Munch_-_Self-Portrait_in_Hell_-_Google_Art_Project.jpg/478px-Edvard_Munch_-_Self-Portrait_in_Hell_-_Google_Art_Project.jpg',
        w: 478,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Edvard_Munch_-_Self-Portrait_in_Hell_-_Google_Art_Project.jpg/612px-Edvard_Munch_-_Self-Portrait_in_Hell_-_Google_Art_Project.jpg',
        w: 612,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Edvard_Munch_-_Self-Portrait_in_Hell_-_Google_Art_Project.jpg/817px-Edvard_Munch_-_Self-Portrait_in_Hell_-_Google_Art_Project.jpg',
        w: 817,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/f/f4/Edvard_Munch_-_Self-Portrait_in_Hell_-_Google_Art_Project.jpg',
        w: 3717,
      },
    ],
  },
  {
    alt: 'Self-Portrait Somewhere on the Continent I',
    width: 611,
    height: 600,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Edvard_Munch_-_Self-Portrait_Somewhere_on_the_Continent_I_-_Google_Art_Project.jpg/244px-Edvard_Munch_-_Self-Portrait_Somewhere_on_the_Continent_I_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Edvard_Munch_-_Self-Portrait_Somewhere_on_the_Continent_I_-_Google_Art_Project.jpg/489px-Edvard_Munch_-_Self-Portrait_Somewhere_on_the_Continent_I_-_Google_Art_Project.jpg',
        w: 489,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Edvard_Munch_-_Self-Portrait_Somewhere_on_the_Continent_I_-_Google_Art_Project.jpg/782px-Edvard_Munch_-_Self-Portrait_Somewhere_on_the_Continent_I_-_Google_Art_Project.jpg',
        w: 782,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Edvard_Munch_-_Self-Portrait_Somewhere_on_the_Continent_I_-_Google_Art_Project.jpg/1043px-Edvard_Munch_-_Self-Portrait_Somewhere_on_the_Continent_I_-_Google_Art_Project.jpg',
        w: 1043,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/e/eb/Edvard_Munch_-_Self-Portrait_Somewhere_on_the_Continent_I_-_Google_Art_Project.jpg',
        w: 4491,
      },
    ],
  },
  {
    alt: 'Self-Portrait Somewhere on the Continent II',
    width: 644,
    height: 600,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Edvard_Munch_-_Self-Portrait_Somewhere_on_the_Continent_II_-_Google_Art_Project.jpg/258px-Edvard_Munch_-_Self-Portrait_Somewhere_on_the_Continent_II_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Edvard_Munch_-_Self-Portrait_Somewhere_on_the_Continent_II_-_Google_Art_Project.jpg/516px-Edvard_Munch_-_Self-Portrait_Somewhere_on_the_Continent_II_-_Google_Art_Project.jpg',
        w: 516,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Edvard_Munch_-_Self-Portrait_Somewhere_on_the_Continent_II_-_Google_Art_Project.jpg/825px-Edvard_Munch_-_Self-Portrait_Somewhere_on_the_Continent_II_-_Google_Art_Project.jpg',
        w: 825,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Edvard_Munch_-_Self-Portrait_Somewhere_on_the_Continent_II_-_Google_Art_Project.jpg/1100px-Edvard_Munch_-_Self-Portrait_Somewhere_on_the_Continent_II_-_Google_Art_Project.jpg',
        w: 1100,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/7/78/Edvard_Munch_-_Self-Portrait_Somewhere_on_the_Continent_II_-_Google_Art_Project.jpg',
        w: 4272,
      },
    ],
  },
  {
    alt: 'Self-Portrait with a Bottle of Wine',
    width: 660,
    height: 599,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Edvard_Munch_-_Self-Portrait_with_a_Bottle_of_Wine_-_Google_Art_Project.jpg/264px-Edvard_Munch_-_Self-Portrait_with_a_Bottle_of_Wine_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Edvard_Munch_-_Self-Portrait_with_a_Bottle_of_Wine_-_Google_Art_Project.jpg/661px-Edvard_Munch_-_Self-Portrait_with_a_Bottle_of_Wine_-_Google_Art_Project.jpg',
        w: 661,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Edvard_Munch_-_Self-Portrait_with_a_Bottle_of_Wine_-_Google_Art_Project.jpg/846px-Edvard_Munch_-_Self-Portrait_with_a_Bottle_of_Wine_-_Google_Art_Project.jpg',
        w: 846,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Edvard_Munch_-_Self-Portrait_with_a_Bottle_of_Wine_-_Google_Art_Project.jpg/1128px-Edvard_Munch_-_Self-Portrait_with_a_Bottle_of_Wine_-_Google_Art_Project.jpg',
        w: 1128,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/2/2b/Edvard_Munch_-_Self-Portrait_with_a_Bottle_of_Wine_-_Google_Art_Project.jpg',
        w: 4315,
      },
    ],
  },
  {
    alt: 'Self-Portrait with Brushes',
    width: 276,
    height: 599,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Edvard_Munch_-_Self-Portrait_with_Brushes_-_Google_Art_Project.jpg/110px-Edvard_Munch_-_Self-Portrait_with_Brushes_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Edvard_Munch_-_Self-Portrait_with_Brushes_-_Google_Art_Project.jpg/276px-Edvard_Munch_-_Self-Portrait_with_Brushes_-_Google_Art_Project.jpg',
        w: 276,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Edvard_Munch_-_Self-Portrait_with_Brushes_-_Google_Art_Project.jpg/354px-Edvard_Munch_-_Self-Portrait_with_Brushes_-_Google_Art_Project.jpg',
        w: 354,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Edvard_Munch_-_Self-Portrait_with_Brushes_-_Google_Art_Project.jpg/472px-Edvard_Munch_-_Self-Portrait_with_Brushes_-_Google_Art_Project.jpg',
        w: 472,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/1/1d/Edvard_Munch_-_Self-Portrait_with_Brushes_-_Google_Art_Project.jpg',
        w: 2062,
      },
    ],
  },
  {
    alt: 'Self-Portrait with Skeleton Arm',
    width: 423,
    height: 600,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Edvard_Munch_-_Self-Portrait_with_Skeleton_Arm_-_Google_Art_Project.jpg/169px-Edvard_Munch_-_Self-Portrait_with_Skeleton_Arm_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Edvard_Munch_-_Self-Portrait_with_Skeleton_Arm_-_Google_Art_Project.jpg/338px-Edvard_Munch_-_Self-Portrait_with_Skeleton_Arm_-_Google_Art_Project.jpg',
        w: 338,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Edvard_Munch_-_Self-Portrait_with_Skeleton_Arm_-_Google_Art_Project.jpg/542px-Edvard_Munch_-_Self-Portrait_with_Skeleton_Arm_-_Google_Art_Project.jpg',
        w: 542,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Edvard_Munch_-_Self-Portrait_with_Skeleton_Arm_-_Google_Art_Project.jpg/722px-Edvard_Munch_-_Self-Portrait_with_Skeleton_Arm_-_Google_Art_Project.jpg',
        w: 722,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/b/b7/Edvard_Munch_-_Self-Portrait_with_Skeleton_Arm_-_Google_Art_Project.jpg',
        w: 2520,
      },
    ],
  },
  {
    alt: 'Self-Portrait “à la Marat”',
    width: 633,
    height: 600,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Edvard_Munch_-_Self-Portrait_%E2%80%9C%C3%A0_la_Marat%E2%80%9D_-_Google_Art_Project.jpg/253px-Edvard_Munch_-_Self-Portrait_%E2%80%9C%C3%A0_la_Marat%E2%80%9D_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Edvard_Munch_-_Self-Portrait_%E2%80%9C%C3%A0_la_Marat%E2%80%9D_-_Google_Art_Project.jpg/507px-Edvard_Munch_-_Self-Portrait_%E2%80%9C%C3%A0_la_Marat%E2%80%9D_-_Google_Art_Project.jpg',
        w: 507,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Edvard_Munch_-_Self-Portrait_%E2%80%9C%C3%A0_la_Marat%E2%80%9D_-_Google_Art_Project.jpg/811px-Edvard_Munch_-_Self-Portrait_%E2%80%9C%C3%A0_la_Marat%E2%80%9D_-_Google_Art_Project.jpg',
        w: 811,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Edvard_Munch_-_Self-Portrait_%E2%80%9C%C3%A0_la_Marat%E2%80%9D_-_Google_Art_Project.jpg/1081px-Edvard_Munch_-_Self-Portrait_%E2%80%9C%C3%A0_la_Marat%E2%80%9D_-_Google_Art_Project.jpg',
        w: 1081,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/a/ab/Edvard_Munch_-_Self-Portrait_%E2%80%9C%C3%A0_la_Marat%E2%80%9D_-_Google_Art_Project.jpg',
        w: 4108,
      },
    ],
  },
  {
    alt: 'Separation',
    width: 796,
    height: 600,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Edvard_Munch_-_Separation_-_Google_Art_Project.jpg/319px-Edvard_Munch_-_Separation_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Edvard_Munch_-_Separation_-_Google_Art_Project.jpg/637px-Edvard_Munch_-_Separation_-_Google_Art_Project.jpg',
        w: 637,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Edvard_Munch_-_Separation_-_Google_Art_Project.jpg/1020px-Edvard_Munch_-_Separation_-_Google_Art_Project.jpg',
        w: 1020,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Edvard_Munch_-_Separation_-_Google_Art_Project.jpg/1280px-Edvard_Munch_-_Separation_-_Google_Art_Project.jpg',
        w: 1280,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/1/1f/Edvard_Munch_-_Separation_-_Google_Art_Project.jpg',
        w: 4418,
      },
    ],
  },
  {
    alt: 'Shore with Red House',
    width: 800,
    height: 585,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Edvard_Munch_-_Shore_with_Red_House_-_Google_Art_Project.jpg/320px-Edvard_Munch_-_Shore_with_Red_House_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Edvard_Munch_-_Shore_with_Red_House_-_Google_Art_Project.jpg/640px-Edvard_Munch_-_Shore_with_Red_House_-_Google_Art_Project.jpg',
        w: 640,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Edvard_Munch_-_Shore_with_Red_House_-_Google_Art_Project.jpg/1024px-Edvard_Munch_-_Shore_with_Red_House_-_Google_Art_Project.jpg',
        w: 1024,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Edvard_Munch_-_Shore_with_Red_House_-_Google_Art_Project.jpg/1280px-Edvard_Munch_-_Shore_with_Red_House_-_Google_Art_Project.jpg',
        w: 1280,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/0/0e/Edvard_Munch_-_Shore_with_Red_House_-_Google_Art_Project.jpg',
        w: 4400,
      },
    ],
  },
  {
    alt: 'The Brooch. Eva Mudocci',
    width: 467,
    height: 600,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Edvard_Munch_-_The_Brooch._Eva_Mudocci_-_Google_Art_Project.jpg/187px-Edvard_Munch_-_The_Brooch._Eva_Mudocci_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Edvard_Munch_-_The_Brooch._Eva_Mudocci_-_Google_Art_Project.jpg/374px-Edvard_Munch_-_The_Brooch._Eva_Mudocci_-_Google_Art_Project.jpg',
        w: 374,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Edvard_Munch_-_The_Brooch._Eva_Mudocci_-_Google_Art_Project.jpg/598px-Edvard_Munch_-_The_Brooch._Eva_Mudocci_-_Google_Art_Project.jpg',
        w: 598,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Edvard_Munch_-_The_Brooch._Eva_Mudocci_-_Google_Art_Project.jpg/797px-Edvard_Munch_-_The_Brooch._Eva_Mudocci_-_Google_Art_Project.jpg',
        w: 797,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/0/04/Edvard_Munch_-_The_Brooch._Eva_Mudocci_-_Google_Art_Project.jpg',
        w: 2362,
      },
    ],
  },
  {
    alt: 'The Death of Marat II',
    width: 580,
    height: 600,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Edvard_Munch_-_The_Death_of_Marat_II_-_Google_Art_Project.jpg/232px-Edvard_Munch_-_The_Death_of_Marat_II_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Edvard_Munch_-_The_Death_of_Marat_II_-_Google_Art_Project.jpg/464px-Edvard_Munch_-_The_Death_of_Marat_II_-_Google_Art_Project.jpg',
        w: 464,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Edvard_Munch_-_The_Death_of_Marat_II_-_Google_Art_Project.jpg/743px-Edvard_Munch_-_The_Death_of_Marat_II_-_Google_Art_Project.jpg',
        w: 743,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Edvard_Munch_-_The_Death_of_Marat_II_-_Google_Art_Project.jpg/990px-Edvard_Munch_-_The_Death_of_Marat_II_-_Google_Art_Project.jpg',
        w: 990,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/7/7f/Edvard_Munch_-_The_Death_of_Marat_II_-_Google_Art_Project.jpg',
        w: 2628,
      },
    ],
  },
  {
    alt: 'The Haymaker',
    width: 698,
    height: 600,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Edvard_Munch_-_The_Haymaker_-_Google_Art_Project.jpg/279px-Edvard_Munch_-_The_Haymaker_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Edvard_Munch_-_The_Haymaker_-_Google_Art_Project.jpg/559px-Edvard_Munch_-_The_Haymaker_-_Google_Art_Project.jpg',
        w: 559,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Edvard_Munch_-_The_Haymaker_-_Google_Art_Project.jpg/894px-Edvard_Munch_-_The_Haymaker_-_Google_Art_Project.jpg',
        w: 894,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Edvard_Munch_-_The_Haymaker_-_Google_Art_Project.jpg/1191px-Edvard_Munch_-_The_Haymaker_-_Google_Art_Project.jpg',
        w: 1191,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/0/03/Edvard_Munch_-_The_Haymaker_-_Google_Art_Project.jpg',
        w: 4336,
      },
    ],
  },
  {
    alt: 'The Kiss',
    width: 489,
    height: 599,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Edvard_Munch_-_The_Kiss_-_Google_Art_Project.jpg/196px-Edvard_Munch_-_The_Kiss_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Edvard_Munch_-_The_Kiss_-_Google_Art_Project.jpg/490px-Edvard_Munch_-_The_Kiss_-_Google_Art_Project.jpg',
        w: 490,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Edvard_Munch_-_The_Kiss_-_Google_Art_Project.jpg/627px-Edvard_Munch_-_The_Kiss_-_Google_Art_Project.jpg',
        w: 627,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Edvard_Munch_-_The_Kiss_-_Google_Art_Project.jpg/836px-Edvard_Munch_-_The_Kiss_-_Google_Art_Project.jpg',
        w: 836,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/e/ef/Edvard_Munch_-_The_Kiss_-_Google_Art_Project.jpg',
        w: 2591,
      },
    ],
  },
  {
    alt: 'The Seine at Saint-Cloud',
    width: 488,
    height: 599,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Edvard_Munch_-_The_Seine_at_Saint-Cloud_-_Google_Art_Project.jpg/195px-Edvard_Munch_-_The_Seine_at_Saint-Cloud_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Edvard_Munch_-_The_Seine_at_Saint-Cloud_-_Google_Art_Project.jpg/489px-Edvard_Munch_-_The_Seine_at_Saint-Cloud_-_Google_Art_Project.jpg',
        w: 489,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Edvard_Munch_-_The_Seine_at_Saint-Cloud_-_Google_Art_Project.jpg/625px-Edvard_Munch_-_The_Seine_at_Saint-Cloud_-_Google_Art_Project.jpg',
        w: 625,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Edvard_Munch_-_The_Seine_at_Saint-Cloud_-_Google_Art_Project.jpg/834px-Edvard_Munch_-_The_Seine_at_Saint-Cloud_-_Google_Art_Project.jpg',
        w: 834,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/0/07/Edvard_Munch_-_The_Seine_at_Saint-Cloud_-_Google_Art_Project.jpg',
        w: 3549,
      },
    ],
  },
  {
    alt: 'The Sin',
    width: 413,
    height: 599,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Edvard_Munch_-_The_Sin_-_Google_Art_Project.jpg/165px-Edvard_Munch_-_The_Sin_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Edvard_Munch_-_The_Sin_-_Google_Art_Project.jpg/413px-Edvard_Munch_-_The_Sin_-_Google_Art_Project.jpg',
        w: 413,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Edvard_Munch_-_The_Sin_-_Google_Art_Project.jpg/529px-Edvard_Munch_-_The_Sin_-_Google_Art_Project.jpg',
        w: 529,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Edvard_Munch_-_The_Sin_-_Google_Art_Project.jpg/706px-Edvard_Munch_-_The_Sin_-_Google_Art_Project.jpg',
        w: 706,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/3/37/Edvard_Munch_-_The_Sin_-_Google_Art_Project.jpg',
        w: 3546,
      },
    ],
  },
  {
    alt: 'The Sun',
    width: 800,
    height: 464,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Edvard_Munch_-_The_Sun_-_Google_Art_Project.jpg/320px-Edvard_Munch_-_The_Sun_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Edvard_Munch_-_The_Sun_-_Google_Art_Project.jpg/640px-Edvard_Munch_-_The_Sun_-_Google_Art_Project.jpg',
        w: 640,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Edvard_Munch_-_The_Sun_-_Google_Art_Project.jpg/1024px-Edvard_Munch_-_The_Sun_-_Google_Art_Project.jpg',
        w: 1024,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Edvard_Munch_-_The_Sun_-_Google_Art_Project.jpg/1280px-Edvard_Munch_-_The_Sun_-_Google_Art_Project.jpg',
        w: 1280,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/c/cd/Edvard_Munch_-_The_Sun_-_Google_Art_Project.jpg',
        w: 4661,
      },
    ],
  },
  {
    alt: 'The Urn',
    width: 361,
    height: 599,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Edvard_Munch_-_The_Urn_-_Google_Art_Project.jpg/144px-Edvard_Munch_-_The_Urn_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Edvard_Munch_-_The_Urn_-_Google_Art_Project.jpg/361px-Edvard_Munch_-_The_Urn_-_Google_Art_Project.jpg',
        w: 361,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Edvard_Munch_-_The_Urn_-_Google_Art_Project.jpg/463px-Edvard_Munch_-_The_Urn_-_Google_Art_Project.jpg',
        w: 463,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Edvard_Munch_-_The_Urn_-_Google_Art_Project.jpg/617px-Edvard_Munch_-_The_Urn_-_Google_Art_Project.jpg',
        w: 617,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/b/b8/Edvard_Munch_-_The_Urn_-_Google_Art_Project.jpg',
        w: 2597,
      },
    ],
  },
  {
    alt: 'The Voice , Summer Night',
    width: 794,
    height: 600,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Edvard_Munch_-_The_Voice_%2C_Summer_Night_-_Google_Art_Project.jpg/318px-Edvard_Munch_-_The_Voice_%2C_Summer_Night_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Edvard_Munch_-_The_Voice_%2C_Summer_Night_-_Google_Art_Project.jpg/636px-Edvard_Munch_-_The_Voice_%2C_Summer_Night_-_Google_Art_Project.jpg',
        w: 636,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Edvard_Munch_-_The_Voice_%2C_Summer_Night_-_Google_Art_Project.jpg/1017px-Edvard_Munch_-_The_Voice_%2C_Summer_Night_-_Google_Art_Project.jpg',
        w: 1017,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Edvard_Munch_-_The_Voice_%2C_Summer_Night_-_Google_Art_Project.jpg/1280px-Edvard_Munch_-_The_Voice_%2C_Summer_Night_-_Google_Art_Project.jpg',
        w: 1280,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/8/8c/Edvard_Munch_-_The_Voice_%2C_Summer_Night_-_Google_Art_Project.jpg',
        w: 4589,
      },
    ],
  },
  {
    alt: 'The Yellow Log',
    width: 738,
    height: 600,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Edvard_Munch_-_The_Yellow_Log_-_Google_Art_Project.jpg/295px-Edvard_Munch_-_The_Yellow_Log_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Edvard_Munch_-_The_Yellow_Log_-_Google_Art_Project.jpg/591px-Edvard_Munch_-_The_Yellow_Log_-_Google_Art_Project.jpg',
        w: 591,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Edvard_Munch_-_The_Yellow_Log_-_Google_Art_Project.jpg/945px-Edvard_Munch_-_The_Yellow_Log_-_Google_Art_Project.jpg',
        w: 945,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Edvard_Munch_-_The_Yellow_Log_-_Google_Art_Project.jpg/1260px-Edvard_Munch_-_The_Yellow_Log_-_Google_Art_Project.jpg',
        w: 1260,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/6/6a/Edvard_Munch_-_The_Yellow_Log_-_Google_Art_Project.jpg',
        w: 4307,
      },
    ],
  },
  {
    alt: 'Train Smoke',
    width: 785,
    height: 599,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Edvard_Munch_-_Train_Smoke_-_Google_Art_Project.jpg/314px-Edvard_Munch_-_Train_Smoke_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Edvard_Munch_-_Train_Smoke_-_Google_Art_Project.jpg/786px-Edvard_Munch_-_Train_Smoke_-_Google_Art_Project.jpg',
        w: 786,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Edvard_Munch_-_Train_Smoke_-_Google_Art_Project.jpg/1006px-Edvard_Munch_-_Train_Smoke_-_Google_Art_Project.jpg',
        w: 1006,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Edvard_Munch_-_Train_Smoke_-_Google_Art_Project.jpg/1280px-Edvard_Munch_-_Train_Smoke_-_Google_Art_Project.jpg',
        w: 1280,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/2/26/Edvard_Munch_-_Train_Smoke_-_Google_Art_Project.jpg',
        w: 3066,
      },
    ],
  },
  {
    alt: 'Anxiety',
    width: 465,
    height: 599,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Edvard_Munch%2C_1894%2C_Anxiety%2C_oil_on_canvas%2C_94_x_74_cm%2C_Munch_Museum.jpg/186px-Edvard_Munch%2C_1894%2C_Anxiety%2C_oil_on_canvas%2C_94_x_74_cm%2C_Munch_Museum.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Edvard_Munch%2C_1894%2C_Anxiety%2C_oil_on_canvas%2C_94_x_74_cm%2C_Munch_Museum.jpg/372px-Edvard_Munch%2C_1894%2C_Anxiety%2C_oil_on_canvas%2C_94_x_74_cm%2C_Munch_Museum.jpg',
        w: 372,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Edvard_Munch%2C_1894%2C_Anxiety%2C_oil_on_canvas%2C_94_x_74_cm%2C_Munch_Museum.jpg/465px-Edvard_Munch%2C_1894%2C_Anxiety%2C_oil_on_canvas%2C_94_x_74_cm%2C_Munch_Museum.jpg',
        w: 465,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Edvard_Munch%2C_1894%2C_Anxiety%2C_oil_on_canvas%2C_94_x_74_cm%2C_Munch_Museum.jpg/596px-Edvard_Munch%2C_1894%2C_Anxiety%2C_oil_on_canvas%2C_94_x_74_cm%2C_Munch_Museum.jpg',
        w: 596,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/6/6b/Edvard_Munch%2C_1894%2C_Anxiety%2C_oil_on_canvas%2C_94_x_74_cm%2C_Munch_Museum.jpg',
        w: 1164,
      },
    ],
  },
  {
    alt: 'Workers on their Way Home',
    width: 680,
    height: 600,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Edvard_Munch_-_Workers_on_their_Way_Home_-_Google_Art_Project.jpg/272px-Edvard_Munch_-_Workers_on_their_Way_Home_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Edvard_Munch_-_Workers_on_their_Way_Home_-_Google_Art_Project.jpg/544px-Edvard_Munch_-_Workers_on_their_Way_Home_-_Google_Art_Project.jpg',
        w: 544,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Edvard_Munch_-_Workers_on_their_Way_Home_-_Google_Art_Project.jpg/871px-Edvard_Munch_-_Workers_on_their_Way_Home_-_Google_Art_Project.jpg',
        w: 871,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Edvard_Munch_-_Workers_on_their_Way_Home_-_Google_Art_Project.jpg/1161px-Edvard_Munch_-_Workers_on_their_Way_Home_-_Google_Art_Project.jpg',
        w: 1161,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/2/27/Edvard_Munch_-_Workers_on_their_Way_Home_-_Google_Art_Project.jpg',
        w: 4082,
      },
    ],
  },
  {
    alt: 'Weeping Nude',
    width: 733,
    height: 599,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Edvard_Munch_-_Weeping_Nude_-_Google_Art_Project.jpg/294px-Edvard_Munch_-_Weeping_Nude_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Edvard_Munch_-_Weeping_Nude_-_Google_Art_Project.jpg/734px-Edvard_Munch_-_Weeping_Nude_-_Google_Art_Project.jpg',
        w: 734,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Edvard_Munch_-_Weeping_Nude_-_Google_Art_Project.jpg/939px-Edvard_Munch_-_Weeping_Nude_-_Google_Art_Project.jpg',
        w: 939,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Edvard_Munch_-_Weeping_Nude_-_Google_Art_Project.jpg/1252px-Edvard_Munch_-_Weeping_Nude_-_Google_Art_Project.jpg',
        w: 1252,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/b/bf/Edvard_Munch_-_Weeping_Nude_-_Google_Art_Project.jpg',
        w: 4411,
      },
    ],
  },
  {
    alt: 'Vampire',
    width: 732,
    height: 599,
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Edvard_Munch_-_Vampire_%281895%29_-_Google_Art_Project.jpg/293px-Edvard_Munch_-_Vampire_%281895%29_-_Google_Art_Project.jpg',
    srcset: [
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Edvard_Munch_-_Vampire_%281895%29_-_Google_Art_Project.jpg/733px-Edvard_Munch_-_Vampire_%281895%29_-_Google_Art_Project.jpg',
        w: 733,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Edvard_Munch_-_Vampire_%281895%29_-_Google_Art_Project.jpg/938px-Edvard_Munch_-_Vampire_%281895%29_-_Google_Art_Project.jpg',
        w: 938,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Edvard_Munch_-_Vampire_%281895%29_-_Google_Art_Project.jpg/1251px-Edvard_Munch_-_Vampire_%281895%29_-_Google_Art_Project.jpg',
        w: 1251,
      },
      {
        src:
          'https://upload.wikimedia.org/wikipedia/commons/a/a2/Edvard_Munch_-_Vampire_%281895%29_-_Google_Art_Project.jpg',
        w: 5446,
      },
    ],
  },
];
artworks.forEach((info) => {
  const artwork = artworkTemplate.content.cloneNode(true);
  const frame = artwork.querySelector('.frame');
  const artworkName = artwork.querySelector('.artwork-name');
  artworkName.innerHTML = info.alt;

  const img = document.createElement('img', {
    is: 'progressive-image',
  });
  img.setAttribute('width', `${info.width}`);
  img.setAttribute('height', `${info.height}`);
  img.setAttribute('src', `${info.src}`);
  img.setAttribute('alt', `${info.alt}`);
  img.setAttribute(
    'srcset',
    `${info.srcset.map((data) => `${data.src} ${data.w}w`).join()}`,
  );
  img.setAttribute('data-blurry-src', `${info.src}`);
  img.setAttribute('sizes', '(min-width: 415px) 50vw, 80vw');
  frame.appendChild(img);
  fragment.appendChild(artwork);
});

document.body.appendChild(fragment);
