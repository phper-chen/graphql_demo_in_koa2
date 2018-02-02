# graphqlTest
Firstly npm i

Secondly open a ide of graphql by visiting ur site localhost:3344/graphiql

Then we can insert some data with the ide by making mutation

Step One:

            mutation{
              infoSave(
                email: "234324@qq.com",
                phone: 137459804345,
                hobby: ["广度", "焺尺"],
                relation: {
                  friends: ["对方的", "豆腐汤"],
                  family: ["保持", "吃不吃"],
                }
               ){
                    _id
                }
              }
and we should get the value of the id called "_id" the last mutation responsed, and use it below to execute a associate data saving.

Step Two:


            mutation{
              userSave(
                name: "大家",
                age: 89,
                gender: "男",
                socialInfo: "5a68a3ad5096cd0e0adf0fe1",
               ){
                _id
              }
            }

Step Three:

            query{
              users {
                name
                age
                gender
                socialInfo {
                  _id
                  email
                  phone
                }
              }
            }



