$(document).ready(function(){
//	鼠标悬停的时候出现隐藏框
//	第一个
	var nav0=document.getElementsByName("nav0")[0];
	var navcontent0=document.getElementsByName("navcontent0")[0];
	navcontent0.style.display="none";
	nav0.onmouseover=function(){
		if(navcontent0.style.display=="none"){
			navcontent0.style.display="block";		
   			navcontent1.style.display="none";
   			navcontent2.style.display="none";	
   			navcontent3.style.display="none";	
   			navcontent4.style.display="none";	
   			navcontent5.style.display="none";	
   			navcontent6.style.display="none";	
   			navcontent7.style.display="none";	
   			navcontent8.style.display="none";	
   			navcontent9.style.display="none";	
   			navcontent10.style.display="none";	
   			
		}
		else{
			navcontent0.style.display="none";
		}
	}
	navcontent0.onmouseleave=function(){
		navcontent0.style.display="none";
	}
//		
//	第二个
	var nav1=document.getElementsByName("nav1")[0];
	var navcontent1=document.getElementsByName("navcontent1")[0];
	navcontent1.style.display="none";
	nav1.onmouseover=function(){
		if(navcontent1.style.display=="none"){
			navcontent0.style.display="none";
			navcontent1.style.display="block";	
			navcontent2.style.display="none";	
   			navcontent3.style.display="none";	
   			navcontent4.style.display="none";	
   			navcontent5.style.display="none";	
   			navcontent6.style.display="none";	
   			navcontent7.style.display="none";	
   			navcontent8.style.display="none";	
   			navcontent9.style.display="none";	
   			navcontent10.style.display="none";	
//			$(this).　siblings().children().css("display","none");
		}
		else{
			navcontent1.style.display="none";
		}
	}
	navcontent1.onmouseleave=function(){
		navcontent1.style.display="none";
	}
//第三个
	var nav2=document.getElementsByName("nav2")[0];
	var navcontent2=document.getElementsByName("navcontent2")[0];
	navcontent2.style.display="none";
	
	nav2.onmouseover=function(){
		if(navcontent2.style.display=="none"){
			navcontent0.style.display="none";		
   			navcontent1.style.display="none";
   			navcontent2.style.display="block";	
   			navcontent3.style.display="none";	
   			navcontent4.style.display="none";	
   			navcontent5.style.display="none";	
   			navcontent6.style.display="none";	
   			navcontent7.style.display="none";	
   			navcontent8.style.display="none";	
   			navcontent9.style.display="none";	
   			navcontent10.style.display="none";	
   			
		}
		else{
			navcontent2.style.display="none";
		}
	}
	navcontent2.onmouseleave=function(){
		navcontent2.style.display="none";
	}
//第四个
	var nav3=document.getElementsByName("nav3")[0];
	var navcontent3=document.getElementsByName("navcontent3")[0];
	navcontent3.style.display="none";
	
	nav3.onmouseover=function(){
		if(navcontent3.style.display=="none"){
			navcontent0.style.display="none";		
   			navcontent1.style.display="none";
   			navcontent2.style.display="none";	
   			navcontent3.style.display="block";	
   			navcontent4.style.display="none";	
   			navcontent5.style.display="none";	
   			navcontent6.style.display="none";	
   			navcontent7.style.display="none";	
   			navcontent8.style.display="none";	
   			navcontent9.style.display="none";	
   			navcontent10.style.display="none";	
   			
		}
		else{
			navcontent3.style.display="none";
		}
	}
	navcontent3.onmouseleave=function(){
		navcontent3.style.display="none";
	}
//第五个
	var nav4=document.getElementsByName("nav4")[0];
	var navcontent4=document.getElementsByName("navcontent4")[0];
	navcontent4.style.display="none";
	
	nav4.onmouseover=function(){
		if(navcontent4.style.display=="none"){
			navcontent0.style.display="none";		
   			navcontent1.style.display="none";
   			navcontent2.style.display="none";	
   			navcontent3.style.display="none";	
   			navcontent4.style.display="block";	
   			navcontent5.style.display="none";	
   			navcontent6.style.display="none";	
   			navcontent7.style.display="none";	
   			navcontent8.style.display="none";	
   			navcontent9.style.display="none";	
   			navcontent10.style.display="none";	
   			
		}
		else{
			navcontent4.style.display="none";
		}
	}
	navcontent4.onmouseleave=function(){
		navcontent4.style.display="none";
	}

//第六个
	var nav5=document.getElementsByName("nav5")[0];
	var navcontent5=document.getElementsByName("navcontent5")[0];
	navcontent5.style.display="none";
	
	nav5.onmouseover=function(){
		if(navcontent5.style.display=="none"){
			navcontent0.style.display="none";		
   			navcontent1.style.display="none";
   			navcontent2.style.display="none";	
   			navcontent3.style.display="none";	
   			navcontent4.style.display="none";	
   			navcontent5.style.display="block";	
   			navcontent6.style.display="none";	
   			navcontent7.style.display="none";	
   			navcontent8.style.display="none";	
   			navcontent9.style.display="none";	
   			navcontent10.style.display="none";	
   			
		}
		else{
			navcontent5.style.display="none";
		}
	}
	navcontent5.onmouseleave=function(){
		navcontent5.style.display="none";
	}
	
//第七个
	var nav6=document.getElementsByName("nav6")[0];
	var navcontent6=document.getElementsByName("navcontent6")[0];
	navcontent6.style.display="none";
	
	nav6.onmouseover=function(){
		if(navcontent6.style.display=="none"){
			navcontent0.style.display="none";		
   			navcontent1.style.display="none";
   			navcontent2.style.display="none";	
   			navcontent3.style.display="none";	
   			navcontent4.style.display="none";	
   			navcontent5.style.display="none";	
   			navcontent6.style.display="block";	
   			navcontent7.style.display="none";	
   			navcontent8.style.display="none";	
   			navcontent9.style.display="none";	
   			navcontent10.style.display="none";	
   			
		}
		else{
			navcontent6.style.display="none";
		}
	}
	
	navcontent6.onmouseleave=function(){
		navcontent6.style.display="none";
	}
	

	

//第八个
	var nav7=document.getElementsByName("nav7")[0];
	var navcontent7=document.getElementsByName("navcontent7")[0];
	navcontent7.style.display="none";
	
	nav7.onmouseover=function(){
		if(navcontent7.style.display=="none"){
			navcontent0.style.display="none";		
   			navcontent1.style.display="none";
   			navcontent2.style.display="none";	
   			navcontent3.style.display="none";	
   			navcontent4.style.display="none";	
   			navcontent5.style.display="none";	
   			navcontent6.style.display="none";	
   			navcontent7.style.display="block";	
   			navcontent8.style.display="none";	
   			navcontent9.style.display="none";	
   			navcontent10.style.display="none";	
   			
		}
		else{
			navcontent7.style.display="none";
		}
	}
	navcontent7.onmouseleave=function(){
		navcontent7.style.display="none";
	}

//第九个
	var nav8=document.getElementsByName("nav8")[0];
	var navcontent8=document.getElementsByName("navcontent8")[0];
	navcontent8.style.display="none";
	
	nav8.onmouseover=function(){
		if(navcontent8.style.display=="none"){
			navcontent0.style.display="none";		
   			navcontent1.style.display="none";
   			navcontent2.style.display="none";	
   			navcontent3.style.display="none";	
   			navcontent4.style.display="none";	
   			navcontent5.style.display="none";	
   			navcontent6.style.display="none";	
   			navcontent7.style.display="none";	
   			navcontent8.style.display="block";	
   			navcontent9.style.display="none";	
   			navcontent10.style.display="none";	
   			
		}
		else{
			navcontent8.style.display="none";
		}
	}
	navcontent8.onmouseleave=function(){
		navcontent8.style.display="none";
	}

//第十个
	var nav9=document.getElementsByName("nav9")[0];
	var navcontent9=document.getElementsByName("navcontent9")[0];
	navcontent9.style.display="none";
	
	nav9.onmouseover=function(){
		if(navcontent9.style.display=="none"){
			navcontent0.style.display="none";		
   			navcontent1.style.display="none";
   			navcontent2.style.display="none";	
   			navcontent3.style.display="none";	
   			navcontent4.style.display="none";	
   			navcontent5.style.display="none";	
   			navcontent6.style.display="none";	
   			navcontent7.style.display="none";	
   			navcontent8.style.display="none";	
   			navcontent9.style.display="block";	
   			navcontent10.style.display="none";	
   			
		}
		else{
			navcontent9.style.display="none";
		}
	}
	navcontent9.onmouseleave=function(){
		navcontent9.style.display="none";
	}

//第11个
	var nav10=document.getElementsByName("nav10")[0];
	var navcontent10=document.getElementsByName("navcontent10")[0];
	navcontent10.style.display="none";
	
	nav10.onmouseover=function(){
		if(navcontent10.style.display=="none"){
			navcontent0.style.display="none";		
   			navcontent1.style.display="none";
   			navcontent2.style.display="none";	
   			navcontent3.style.display="none";	
   			navcontent4.style.display="none";	
   			navcontent5.style.display="none";	
   			navcontent6.style.display="none";	
   			navcontent7.style.display="none";	
   			navcontent8.style.display="none";	
   			navcontent9.style.display="none";	
   			navcontent10.style.display="block";	
   			
		}
		else{
			navcontent10.style.display="none";
		}
	}
	navcontent10.onmouseleave=function(){
		navcontent10.style.display="none";
	}
//	轮播图部分动画
		//记录当前位置
  		var i = 0;
		//把第一个位置放在最后一个去
        var clone = $(".banner .img li").first().clone();
        //复制到列表最后
        $(".banner .img").append(clone);
        //返回匹配元素的数量
        var size = $(".banner .img li").size();       
//      测试是否正确
        console.log(size);
        /*循环图片容器的数量，并且向点点按钮的大容器添加几个子节点作为点点按钮*/
        for (var j = 0; j < size-1; j++) {
            $(".banner .num").append("<li></li>");
        }
//设置默认的点燃颜色
        $(".banner .num li").first().addClass("on");
        /*自动轮播*/
//使用函数setinterval进行函数的每个时间轮播时间为4s一次
        var t = setInterval(function () {
            i++;
            move();
            },3000);

        /*鼠标悬停事件*/

        $(".banner").hover(function () {
            clearInterval(t);//鼠标悬停时清除定时器
        }, function () {
            t = setInterval(function () {
                i++;
                move();
                }, 3000); //鼠标移出时开始定时器
        });

        /*鼠标滑入原点事件*/

        $(".banner .num li").hover(function () {

            var index = $(this).index();//获取当前索引值
            i = index;
            $(".banner .img").stop().animate({ left: -index * 1850 }, 1000);
            $(this).addClass("on").siblings().removeClass("on");
        });

        /*向左按钮*/
        $(".banner .btn-l").click(function () {
            i--;
            move();
        });
        /*向右按钮*/
        $(".banner .btn-r").click(function () {
            i++;
            move();
        });

        /*移动事件*/
        function move() {
            if (i == size) {
                $(".banner .img").css({ left: 0 });
                i = 1;
            }
            if (i == -1) {
                $(".banner .img").css({ left: -(size - 1) * 1850 });
                i = size - 2;
            }
//          过度的动画
            $(".banner .img").stop().animate({ left: -i * 1850 }, 1000);

            if (i == size - 1) {
                $(".banner .num li").eq(0).addClass("on").siblings().removeClass("on");
            } else {
                $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
            }
        }
//      链接框的动画
	    var a2=document.getElementById("a2");
		var links=document.getElementById("links");
		a2.onmouseover=function(){
			links.style.display="block";
		}
		links.onmouseleave=function(){
			links.style.display="none";
		}
});

