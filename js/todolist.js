$(function () {
    
 
   $('#title').on('keydown',function (e) {
       if(e.keyCode == 13){
           if($(this).val() == ''){
               alert('请输入内容')
               return false
           }
           else{
           var local = getData();
           local.push({
               title: $(this).val(),
               done: false
           }
           )
          $(this).val('');
          
           }
           saveData(local);
           load();
       }
     })
     //要用.on绑定子元素才能绑定动态生成的元素
 $('ol,ul').on('click','input',function () {
     var data = getData();
     var index = $(this).siblings('a').attr('id');
    data[index].done = $(this).prop('checked');
    saveData(data);
    load();
   })
    function getData() {
        var data = localStorage.getItem('todolist');
        if(data!= null){
       return JSON.parse(data);
        }
        else{
            return [];
        }
      }
      function saveData(data) {
          localStorage.setItem('todolist',JSON.stringify(data))
        }

        function load() {
             var todolistcount = 0
             var donelistcount = 0
            var data = getData();
            $('ol,ul').empty();
            $.each(data,function (i,e) {
                if(e.done){
                    $('#donelist').prepend('<li><input type="checkbox" checked = "checked"> <p>' + e.title + '</p> <a href="javascript:;" id=' + i + '></a></li>')
                    donelistcount++;
                }
                else{
                    $('#todolist').prepend('<li><input type="checkbox"> <p>' + e.title + '</p> <a href="javascript:;" id=' + i + '></a></li>')
                    todolistcount++;
                }
              })
              $('#todocount').html(todolistcount);
              $('#donecount').html(donelistcount);
             
          }
          load();
          function del() {
              $('ol,ul').on('click','a',function () {
                   var data = getData();
                  data.splice($(this).attr('id'), 1)
                  saveData(data);
                  load();
                })
            }
            del();

})