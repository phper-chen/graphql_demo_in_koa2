window.onload = function () {
  $('#btn1').hide()
  function userList(data) {
    var str = ''
    data.forEach(function(item) {
      str += '<li>姓名：'+item.name+'，性别：'+item.gender+'，年龄：'+item.age
      if (item.socialInfo) {
        str += '，邮箱：'+item.socialInfo.email+'，手机号：'+item.socialInfo.phone
      }
      str += '</li>'
    })
    $('#userList').html(str)
  }

  $('#btn').click(function() {
    $('#btn').hide()
    $('#btn1').show()
    $.ajax({
      url: '/graphql',
      data: {
        query: `query{
          users{
            _id
            name
            gender
            age
          }
        }`
      },
      success:function (res){
        userList(res.data.users)
      }
    })
  })
  $('#btn1').click(function() {
    $('#btn1').hide()
    $('#btn').show()
    $.ajax({
      url: '/graphql',
      data: {
        query: `query{
            users {
              _id
              name
              gender
              age
              socialInfo {
                email
                phone
              }
            }
        }`
      },
      success:function (res){
        userList(res.data.users)
      }
    })
  })

}