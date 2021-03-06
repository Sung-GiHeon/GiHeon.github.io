/**
 *  file Upload / display
 */

/* image type 이면 true 아니면 false */
function checkImageType(fileName){
	var pattern = /jpg|gif|png|jpeg/i;
	return fileName.match(pattern);
}

function getFileInfo(fullName){
	
	var imgSrc, fileName, getLink;
	
	if(checkImageType(fullName)){
		//이미지 파일
		imgSrc = contextPath+"/displayFile?fileName="+fullName;
		getLink = contextPath+"/displayFile?fileName="+fullName.replace("s_","");
	}else{
		// 일반 파일
		imgSrc = contextPath+"/resources/img/file.png";
		getLink = contextPath+"/displayFile?fileName="+fullName;
	}
	
	fileName = fullName.substr(fullName.lastIndexOf("_")+1);
	return {fileName : fileName, imgSrc : imgSrc, fullName : fullName, getLink : getLink}
}