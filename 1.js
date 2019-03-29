var $images = $('#images>img')
$('#images>img:nth-child(1)').addClass('middleStatus')
.siblings().addClass('rightStatus')
/*$('#images>img:nth-child(2)').addClass('rightStatus')
$('#images>img:nth-child(3)').addClass('rightStatus')*/


let n=1

setInterval(()=>{
  $(` #images > img:nth-child(${setCycleNumber(n)})`).removeClass('middleStatus').addClass('leftStatus')
  .one('transitionend',(e)=>{
    $(e.currentTarget).removeClass('leftStatus').addClass('rightStatus')
  })

  $(` #images > img:nth-child(${setCycleNumber(n+1)})`).removeClass('rightStatus').addClass('middleStatus')
  n +=1
},3000)






//设定循环数字函数
function setCycleNumber(n){
  if (n >$images.length){
    n=n%$images.length
   if(n===0){
    n=$images.length
  }
}
return n
}
