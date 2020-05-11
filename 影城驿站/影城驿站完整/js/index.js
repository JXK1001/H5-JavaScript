	
	
	function $(id){
        		return document.getElementById(id);
        	}
        window.onload = function(){
        	var imgCount = $("sl").getElementsByTagName("img").length;//获取图片个数
	        	// imgCount = $("scroll").children[0].children[0].children.length
	        	for (var i = 0; i < imgCount; i++) {
	        		var li = document.createElement("li");//创建1给个li标签
	        		li.innerHTML = i+1;
	        		//设置初始选中项
	        		if(i == 0){
	        			li.setAttribute("class", "current");
	        		}
	        		li.setAttribute("index", i);
	        		//注册每个选项的onclick事件。排他思想
	        		li.onclick = function(){
	        			var lis = $("sc_nav").getElementsByTagName("li");
	        			for (var i = 0; i < lis.length; i++) {
	        				lis[i].className = "";
	        			};
	        			this.className = "current";
	        			//点击导航选项时，修改target的值，让图片滚动起来
	        			target = this.getAttribute("index") * -1583;
	        		}
	        		$("sc_nav").appendChild(li);
	        	};
	        	var leader = 0;
	        	var target = 0;
	        	setInterval(function(){
	        		leader = leader + (target - leader) / 10;
	        		$("sl_ul").style.left = leader + "px";
	        }, 30);
	        function setCurrent(){
	            var index = Math.abs(target / 1583);//取绝对值
	        	var lis = $("sc_nav").getElementsByTagName("li");
	        	for (var i = 0; i < lis.length; i++) {
	        		lis[i].className = "";
	        	};
	        	lis[index].className = "current";
	        }
        }