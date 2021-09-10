function SlideShow (options) {
    if(!options.el) {
        return false
    }
    //기본 디폴트옵션
    const defaultOptions = {
        items: [],
        speed : 2000,
        autoPlay : false,
        useDots:false,
        duration : 2000
    }
    this.options = Object.assign(defaultOptions, options)
    this.index = 0
    this.init()
}

SlideShow.prototype = {
    init: function () {
           //기본화면을 그린다
           this.draw();
           this.setEvents();
           this.startplay()
    },
    draw: function () {
        this.options.el.classList.add("my-slider");
        
        const box = document.createElement('div');
        box.className = "my-slider-box"
        this.box = box

        const container = document.createElement('div');
        container.className = "my-slider-container"
        this.container = container

        const screenSize = parseInt(window.getComputedStyle(this.options.el).width);
        this.screenSize = screenSize
        container.style.width = `${screenSize * this.options.items.length}px`

        //이전 버튼
        const prevBtn = document.createElement("button");
        prevBtn.className = "prev-btn";
        prevBtn.innerHTML = "<";
        this.options.el.appendChild(prevBtn);
        this.prevBtn = prevBtn;
        //다음 버튼
        const nextBtn = document.createElement("button");
        nextBtn.className = "next-btn";
        nextBtn.innerHTML = ">";
        this.options.el.appendChild(nextBtn);
        this.nextBtn = nextBtn;


        // const slideItems = this.options.items.map(item => {
        //     const slideItem = document.createElement("div")
        //     slideItem.className = "slide-item"
        //     slideItem.innerHTML = item;
        //     slideItem.style.width = `${screenSize}px`;
        //     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        //     slideItem.style['background-color'] = `#${randomColor}`;
        //     return slideItem 
        // })

        const slideItems = this.options.items.map(item => {
            const slideItem = document.createElement("img")
            slideItem.className = 'slide-item'
            slideItem.innerHTML = item;
            slideItem.style.width = `${screenSize}px`;
            slideItem.src = 'images/' + item; 
            return slideItem 
        })

        this.options.el.appendChild(box)       
        box.appendChild(container)
        container.append(...slideItems)

    },
    setEvents: function () {
        this.prevBtn.addEventListener("click", function () {
          this.moveLeft();
        }.bind(this));
        this.nextBtn.addEventListener("click", function () {
          this.moveRight();
        }.bind(this));
        this.options.el.addEventListener('mouseenter', function () {
          this.stopPlay();
        }.bind(this))
        this.options.el.addEventListener('mouseleave', function () {
          this.startplay();
        }.bind(this))
      },    
      moveLeft: function () {
        console.log('prev시작')
        const { speed } = this.options;
        this.container.style.transform = `all ${speed}ms` 
        this.container.style['transition'] = `left ease ${speed}ms`;
        this.index--;
        if (this.index == -1) {
          this.index = this.options.items.length -1
        }
        const movePos = this.index * -(this.screenSize);
        this.container.style.left = `${movePos}px`;
      },
      moveRight: function () {
      console.log('next시작')
      const { speed } = this.options;
      this.container.style.transform = `all ${speed}ms` 
      this.container.style['transition'] = `left ease ${speed}ms`;
      this.index++;
      if (this.index >= this.options.items.length) {
        this.index = 0
      }
      const movePos = this.index * -(this.screenSize);
      this.container.style.left = `${movePos}px`;
    },
    startplay: function () {
      this.startShowSlide = setInterval(() => {
        console.log('auto시작')
        this.moveRight()
      }, this.options.duration);
    },
    stopPlay: function () {
      console.log('auto멈춤')
      clearInterval(this.startShowSlide);
    },
}