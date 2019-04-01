let $buttons = $('#buttonContainer >button')
let $slides = $('#images')
let $images = $('#images>img')
let current = 0

makeFakeSlides()
$slides.css({transform:'translateX(-920px)'})
bindEvents()

$('#nextPicture').on('click',function(){
  goToSlide(current+1)
})
$('#lastPicture').on('click',function(){
  goToSlide(current-1)
})

let timer = setInterval (function(){
  goToSlide(current+1)
},3000)

$('.wrapper').on('mouseenter',function(){
  window.clearInterval(timer)
}).on('mouseleave',function(){
  timer = setInterval (function(){
    goToSlide(current+1)
  },3000)
})

document.addEventListener('visibilitychange',function(){
  console.log(document.hidden)
  if (document.hidden){
    window.clearInterval(timer)
  }else{
    timer = setInterval (function(){
      goToSlide(current+1)
    },3000)
  }
})
//监听按钮

function bindEvents(){
  $('#buttonContainer').on('click','button',function(e){
    let $button = $(e.currentTarget)
    let index = $button.index()
    goToSlide(index)
  })
}


//轮播到目标图片

function goToSlide(index){
  if (index>$buttons.length-1) {
    index=0
  } else if(index<0) {
    index=$buttons.length-1
  }
  console.log('当前是'+current)
  if(current===$buttons.length-1 && index===0){
    $slides.css({transform:`translateX(${-($buttons.length+1)*920}px)`})
    .one('transitionend',function(){
      $slides.hide()
      .offset()
      $slides.css({transform:`translateX(${-(index+1)*920}px)`})
      $slides.show()
    })

  }else if (current===0 && index===$buttons.length-1){
    $slides.css({transform:'translateX(0px)'})
    .one('transitionend',function(){
      $slides.hide()
      .offset()
      $slides.css({transform:`translateX(${-$buttons.length*920}px)`})
      $slides.show()

    })
  }else{
    $slides.css({transform:`translateX(${-(index+1)*920}px)`})
  }
  current=index
  console.log('下一个'+current)
}
//上一张和下一站的按钮定义


//创造假的第一个和最后一个
function makeFakeSlides( ){
  let $firstCopy = $images.eq(0).clone(true)
  let $lastCopy = $images.eq($images .length-1).clone(true)
  $slides.append($firstCopy)
  $slides.prepend($lastCopy)
}