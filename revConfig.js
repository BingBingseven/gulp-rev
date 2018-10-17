'use strict';
var path='IOF.Signup',
	destPath='tIOF.Signup';
module.exports={
		src:[path+'/Scripts/NewPayment.Signup.js',path+'/Scripts/NewPayment.config.js'],
		HTMLSrc:path+'/*.html',//只能是个通配字符串
		revJson:destPath+'/*.json',
		dest:destPath,
		HTMLDest:destPath+'/*.html'
}
	