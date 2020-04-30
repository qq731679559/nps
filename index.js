function g(){
    const url='https://timgsa baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588141112962&di=8610985ca136d5564c04606907872a4a&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fb8014a90f603738d7b820db3b31bb051f919ec53.jpg';
    let promise=Img(url);
    promise.then(data=>{ 
    document.body.append(data);
    }).catch(err=>{
    console.log('图片丢失', err);
    });
}
function Img(url){
    return new Promise((resolve, reject)=>{
        let pic=document.createElement('img');
        pic.src=url;
        pic.onload=function(){
            resolve(pic);
        };
        pic.onerror=function(b){
            console.log(b);
            reject(b);
        }
    })
}