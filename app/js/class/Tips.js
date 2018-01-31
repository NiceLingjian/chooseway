import '../../less/dialog.less';
import $ from 'zepto';
let Tips = (content, type, time=1800)=>{
    let html = $(`<div class="__tipModelBox">${content}</div>`);
    html.appendTo(document.body);
    setTimeout(function(){
        html.addClass('bounceOut')
        setTimeout(function(){
            html.remove();
        },5000);
    },1);
    
}

export default Tips