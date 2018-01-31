
import '../../less/a.less';
import $ from 'zepto';
import Tips from '../class/Tips.js';
{
	let metaData={
    title:'abc',
    test:[{
      title:'test',
      desc:'description'
    }]
  }
  let {title:esTitle,test:[{title:cnTitle}]}=metaData;
  console.log(esTitle,cnTitle)
}



