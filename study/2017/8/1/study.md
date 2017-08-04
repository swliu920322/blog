>8.4

    document.write();
在body的最上面依次往下插入内容，插入html标签的时候不会插入click事件定义的函数

     alert('');
     
     confirm(str)
     str：在消息对话框中要显示的文本
     返回值: Boolean值
     当用户点击"确定"按钮时，返回true
     当用户点击"取消"按钮时，返回false
       var mymessage=confirm("你喜欢JavaScript吗?");
       if(mymessage){document.write("很好,加油!")}
       else {document.write("JS功能强大，要学习噢!")}       
prompt弹出消息对话框,通常用于询问一些需要与用户交互的信息。弹出消息对话框（包含一个确定按钮、取消按钮与一个文本输入框）。
  
    prompt(str1, str2);
    str1: 要显示在消息对话框中的文本，不可修改
    str2：文本框中的内容，可以修改
    1. 点击确定按钮，文本框中的内容将作为函数返回值
    2. 点击取消按钮，将返回null
    
    var myname=prompt("请输入你的姓名:");
    if(myname!=null)
      {   alert("你好"+myname); }
    else
      {  alert("你好 my friend.");  }
window.open

    window.open([URL], [窗口名称], [参数字符串])
    窗口名称：可选参数，被打开窗口的名称。
        1.该名称由字母、数字和下划线字符组成。
        2."_top"、"_blank"、"_self"具有特殊意义的名称。
           _blank：在新窗口显示目标网页
           _self：在当前窗口显示目标网页
           _top：框架网页中在上部窗口中显示目标网页
        3.相同 name 的窗口只能创建一个，要想创建多个窗口则 name 不能相同。
       4.name 不能包含有空格。
    参数字符串：可选参数，设置窗口参数，各参数用逗号隔开。
![](a.jpg)
   
    window.open('http://www.imooc.com','_blank','width=300,
    height=200,menubar=no,toolbar=no, status=no,scrollbars=yes')
window.close();   //关闭本窗口
    
    window.close();   //关闭本窗口
    <窗口对象>.close();   //关闭指定的窗口
    var mywin=window.open('http://www.imooc.com'); //将新打的窗口对象，存储在变量mywin中
    mywin.close();
 