export interface AudioProject {
  name: string;
  rating: number;
  amount: string;
  url: string;
  photoUrl: string;
}

const audioProjectsList: AudioProject[] = [
  {
    name: 'Skóra',
    rating: 4.7,
    amount: '555',
    url: '/skora.mp3',
    photoUrl: '/skora-small.png'
  },
  {
    name: 'Ukochane dziecko',
    rating: 4.8,
    amount: '2k',
    url: '/ukochanedziecko.mp3',
    photoUrl: '/ukochane-dziecko-small.png'
  },
  {
    name: 'Hydropolis',
    rating: 4.6,
    amount: '408',
    url: '/hydropolis.mp3',
    photoUrl: '/hydropolis-small.png'
  },
  {
    name: 'Stacja',
    rating: 4.6,
    amount: '503',
    url: '/stacja.mp3',
    photoUrl: '/stacja-small.png'
  },
  {
    name: 'Szum',
    rating: 4.7,
    amount: '1.1k',
    url: '/szum.mp3',
    photoUrl: '/szum-small.png'
  },
  {
    name: '3D demo projekt',
    rating: 0,
    amount: '-',
    url: '/3d.mp3',
    photoUrl: '/graysound-small.png'
  }
];

export default audioProjectsList;
