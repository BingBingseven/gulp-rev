# gulp-rev
a solution of version updating by using gulp
为了解决浏览器缓存问题，前台页面需要频繁地更新版本号。为了优化工作流程，避免重复性的低效操作，运用了gulp来自动化流程。
插件：gulp-rev,gulp-rev-collector,gulp-clean,gulp-sequence
环境基础：node、npm、gulp

基础步骤：
1.源码修改：
从根目录依次打开  node_modules--->gulp-rev--->index.js
找到第144行  manifest[originalFile] = revisionedFile;
   修改为    manifest[originalFile] = originalFile + '?v='+ (new Date()).valueOf();//版本号的方式多种方式都行的
   
从根目录依次打开  node_modules--->gulp-rev-collectot--->index.js
找到40行   let cleanReplacement =  path.basename(json[key]).replace(new RegExp( opts.revSuffix ), '' );
    修改为 let cleanReplacement =  path.basename(json[key]).split('?')[0];
    
从根目录依次打开  node_modules--->rev-path--->index.js
找到9行   return modifyFilename(pth, (filename, ext) => `${filename}-${hash}${ext}`);
   修改为 return modifyFilename(pth, (filename, ext) => `${filename}${ext}`);
2.在项目根目录创建gulpfile.js作为gulp的执行文件
3.在gulpfile.js编辑gulp的task（如代码所示）

注：gulp的task是异步的，如果想让gulp按顺序执行task，需要装gulp-sequence；
    revConfig.js可以直接写在gulpfile.js里，为了更好地管理，故加一个版本管理配置脚本
