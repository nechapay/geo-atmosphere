Array.prototype.shuffle = function () {
  let i;
  let num;
  let d;
  for (i = this.length - 1; i > 0; i--) {
    num = Math.floor(Math.random() * (i + 1));
    d = this[num];
    this[num] = this[i];
    this[i] = d;
  }
  return this;
};

window.addEventListener("load", function () {
  programStart();
});


function programStart() {
  // entry point
}

const app = new Vue({
  el: '#app',
  data() {
    return {
      header: 'АТМОСФЕРА',
      clouds: [
        {
          id: 1,
          text: 'Состав и строение'
        },
        {
          id: 2,
          text: 'Ветер'
        },
        {
          id: 3,
          text: 'Климатические пояса',
          content: [
            {
              h: `<div><img src="./img/001.png"></div>`
            },
            {
              h: `<div><img src="./img/002.png"></div>`
            },
            {
              h: `<div><img src="./img/003.png"></div>`
            },
            {
              h: `<div><img src="./img/004.png"></div>`
            },
            {
              h: `<div><img src="./img/005.png"></div>`
            },
            {
              h: `<div><img src="./img/006.png"></div>`
            },
            {
              h: `<div><img src="./img/007.png"></div>`
            },
            {
              h: `<div><img src="./img/008.png"></div>`
            },
            {
              h: `<div><img src="./img/009.png"></div>`
            },
            {
              h: `<div><img src="./img/010.png"></div>`
            }
          ]
        },
        {
          id: 4,
          text: 'Воздушные массы'
        },
        {
          id: 5,
          text: 'Приборы'
        }
      ],
      suns: [
        {
          id: 1,
          text: 'ГИА'
        },
        {
          id: 2,
          text: 'Словарь'
        },
        {
          id: 3,
          text: 'Рекорды'
        }
      ],
      viewerVisible: false,
      currentIdx: 0,
      currentContent: []
    }
  },
  computed: {
    isViewerVisible() {
      return this.viewerVisible
    },
    isPrevVisible() {
      return this.currentIdx !== 0
    },
    isNextVisible() {
      return this.currentIdx < this.currentContent.length - 1
    },
    info() {
      return this.currentContent[this.currentIdx].h
    }
  },
  methods: {
    handleViewerClick(val) {
      if (val.target === document.querySelector('.my-viewer')) {
        this.viewerVisible = false
      }
    },
    handleCloudClick(val) {
      this.currentContent = _.cloneDeep(val)
      this.currentIdx = 0
      this.viewerVisible = true
    },
    handlePrevClick() {
      if (this.currentIdx > 0) {
        this.currentIdx--
      }
    },
    handleNextClick() {
      if (this.currentIdx < this.currentContent.length - 1) {
        this.currentIdx++
      }
    }
  }
})
