[eslint规范来源](https://github.com/adamlu/javascript-style-guide)
#类型
--
* string
* number
* boolean
* null 
* undefined
* object
* array
* function

>对于静态变量，优先使用const>let,都是块级作用域  
>尽量避免使用var

>`//bad`
`
let dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });
`
`//good`
`const dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });
`
对于只是从store里面取出来的值都需要用const，例如  
`const PAGES = AppStore.queryAllHomePageInfo();`  

#空格的使用
>* 引入模块的时候  
`import { aa }form xxx
`
* 箭头函数的前后  
* `{{}}`前后都要留空,value前面要有空格，后面不要  
* `{}`申明变量的时候要空格，其他时候不要空格
`const { navigator } = this.props;`  
`style={styles.page}`
`source={require('../../image/home/launch-01.png')}`
* `，`号前面没有空格，后面要有空格，例如  
>`//bad`  
`
<View style={{marginTop:20,alignItems:'center'}}>
`  
`//good`  
`<View style={{ marginTop: 20, alignItems: 'center' }}>`

>
* `//`注释的地方要一个空格  例如  : 
>`// 处理viewpager左右滑动和scrollView上下滑动冲突问题`   
* 大括号之前放一个空格，例如:  
`// bad`
`function test(){
  console.log('test');
}`
`
// good`  `
function test() {
  console.log('test');
}
` 

--
#换行
>单行超过100，要换行    
>标签长的要换行，例如:  
>`//bad`
>`<Text style={{ marginLeft: 15, fontSize: 15, color: DictStyle.colorSet.commonTextColor }}>`
>`//good`  
`<Text`
  ` style={{ marginLeft: 15, fontSize: 15, color: 			DictStyle.colorSet.commonTextColor }}`
            `>`   

#组件里面没有别的组件的时候需要自闭和，例如  
>`/bad`  
` <View style={{ height: (Platform.OS === 'ios') ? 49 : 0 }}>  `
` </View>`  
`//good`
`<View style={{ height: (Platform.OS === 'ios') ? 49 : 0 }} />`

#单引号和双引号
>* 组件的属性使用，请用双引号
* 字符串使用单引号  `''`
`//bad`
`<Text
            style={{ position: "absolute", left: Adjust.width(220), top: 0
             }}
          >`  
`//good`
`<Text
            style={{ position: 'absolute', left: Adjust.width(220), top: 0
             }}
          >`
 组建属性使用双引号`""`  
 `//bad`
 `<NavBarView navigator={this.props.navigator} title='首页' showBack={false}>`
 `//good`
 `<NavBarView navigator={this.props.navigator} title="首页" showBack={false}>`
 
#return的使用
>如果一个块里面if里面有了一个return，在else里面没必要再有一个return  no-else-return  
[eslint no-else-return](http://eslint.org/docs/rules/no-else-return)  
`//bad`
`if(this.state.requestState === 'loading'){
return <View> xxx </View>
}else{
return <View> sss </View>
`
`//good`
`if(this.state.requestState === 'loading'){
return <View> xxx </View>
}`  
`return <View>sss</View>
`

#名称的使用
对于已使用的名称尽量使用别的名称  
`//bad`  
`let data = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });`
`_renderPage = (data:Object) => {}`
