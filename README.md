# graphqlTest
firstly npm i

secondly open a ide of graphql by visiting ur site localhost:3344/graphiql

then we can insert some data with the ide by making mutation

step one:

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
and we should get the value of the id called "_id", and use it below to execute a associate data saving.

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


