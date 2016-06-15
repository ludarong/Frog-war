(function (){
	//防止变量名污染
	var imgObjs = [];
	window.loadingFn = function (obj) {
	
	var index = 0; //已加载图片的数量

	for (var i = 0; i < obj.imgArr.length; i++) {

		var imgObj = new Image();
		imgObj.src = obj.imgArr[i];
		imgObj.onload = function() {

			//当当前这张图片加载完成执行如下代码
			index++;
			imgObjs.push(this);
			if (obj.loadingProceed){
				obj.loadingProceed(index,this);
			}
			if (index>obj.imgArr.length-1){
				obj.loadingOver(imgObjs);
			}
		}
	}
}
})();
