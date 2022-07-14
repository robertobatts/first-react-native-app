export default [
  {
    type: 'WORD',
    solution: 'BANANA',
    firstDragItemList: [
      {
        text: 'A'
      },
      {
        text: 'B'
      },
      {
        text: 'N'
      },
      {
        text: 'A'
      },
    ],
    firstReceivingItemList: [{}, { text: 'A', blocked: true }, {}, {}, { text: 'N', blocked: true }, {}]
  },
  {
    type: 'WORD',
    solution: 'ABC',
    firstDragItemList: [
      {
        text: 'B'
      },
      {
        text: 'A'
      },
      {
        text: 'C'
      }
    ],
    firstReceivingItemList: [{}, {}, {}]
  },
  {
    type: 'IMAGE',
    firstDragItemList: [
      {
        image: require('../assets/image-game/banana-3.jpeg'),
        pos: 2
      },
      {
        image: require('../assets/image-game/banana-1.jpeg'),
        pos: 0
      },
      {
        image: require('../assets/image-game/banana-2.jpeg'),
        pos: 1
      }
    ],
    firstReceivingItemList: [{}, {}, {}]
  },
  {
    type: 'IMAGE',
    firstDragItemList: [
      {
        image: require('../assets/image-game/kiwi-3.jpeg'),
        pos: 2
      },
      {
        image: require('../assets/image-game/kiwi-1.jpeg'),
        pos: 0
      },
      {
        image: require('../assets/image-game/kiwi-2.jpeg'),
        pos: 1
      }
    ],
    firstReceivingItemList: [{}, {}, {}]
  }
];