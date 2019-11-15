/**
 * Created by Asem Qaffaf
 * https://github.com/asemqaffaf
 *
 * description: this is a  micro service for posts and services
 *
 */
const express = require('express') // express js
const cors = require('cors')
const router = express.Router()
router.use(cors())   ///middleware for network
router.use(express.json())  // middleware as well but this will make all responses with json type !
/*<=====================this path will take the root path======================>*/
/*<===========================this method to fetch all post data ===========================*/
router.get('/', async (request, response) => {
    var arr = []
    if (Object.keys(request.query).length !== 0) {
        if (request.query.q !== undefined) {
            arr.push(searchFunc(await request.query.q))
        }
        if (request.query.q === undefined) {

            arr.push(categoriesFunc(await request.query))
        }
    }
     arr = (arr.length === 0 ? 'no request data found' : arr) 
    response.json(arr)

})
/*<=========================== START. sort in Category has been applied in following func.===========================>*/
/*  params:
        postCategories
        location
        name
        additionalInfo 
        BIG n * 4
*/
function categoriesFunc(name) {
    console.log('name', name) // {postCategories: '' }  {location: ''}name additionalInfo etc.
    var arr = []
    objectData.data.map((post) => {
        Object.keys(post).map(snippet => {
            if (typeof post[snippet] !== 'object' && post[snippet] !== undefined && name[snippet] !== undefined)
                if (post[snippet].toLowerCase().includes(name[snippet].toLowerCase())) {
                    arr.push(post)
                }
        })
    })
    return arr
}
/*<=========================== END. sort in Category  func.===========================>*/

/*<=========================== START. search operation has been applied in following func.===========================>*/
/*  params:
        {q:''}
*/
function searchFunc(target) {
    console.log(target) // {postCategories: '' }  {location: ''}name additionalInfo etc.
    let arr = (target ? [] : 'no data found')
    if (target)
        objectData.data.map((post) => {
            Object.values(post).map((nested) => {
                if (typeof nested !== 'object' && nested !== undefined && target !== undefined)
                    if (nested.toLowerCase().includes(target.toLowerCase())) {
                        arr.push(post)
                    }

            })
        })
    return arr
}
/*<=========================== END. Search  func.===========================>*/

/*<=========================== START.get Posts API has been applied in following func.===========================>*/
/*  params: {sellerID: ''} 
            {buyerOffers: ''}  */
router.get('/getOffers', (async (request, response) => {
    response.json(request.query.sellerID !== undefined ?
        sellerOffers(await request.query.sellerID) :
        buyerOffers(await request.query.buyerOffers)
    )
}))
function sellerOffers(sellerID) {
    var arr = [] /// Asem
    objectData.data.map((post) => {
        if (sellerID !== undefined)
            if (post.sellerID === sellerID) {
                Object.keys(post).map(key => {
                    if (post[key].price !== undefined) {
                        arr.push(post.imgUrl)
                        arr.push({ [key]: post[key].price })
                    }
                })
            }
    })
    arr = (arr.length === 0 ? 'no request data found' : arr) 
    return arr
}
function buyerOffers(buyerName) {
    let arr = [] //buyerOne
    objectData.data.map(post => {
        if (post[buyerName] !== undefined) {
            arr.push(post.imgUrl)
            arr.push(post[buyerName])
        }
    })
    arr = (arr.length === 0 ? 'no request data found' : arr) 
    return arr
}
/*<=========================== END.get Posts API   func.===========================>*/

/*<=========================== START.add new Posts API has been applied in following func.===========================>*/
router.post('/postAdvertisement', (request, response) => {
    let { sellerID, postCategories, location, name, additionalInfo, imgUrl } = request.body
    if (sellerID !== undefined && postCategories !== undefined && location !== undefined && name !== undefined && additionalInfo !== undefined && imgUrl !== undefined) {
        objectData.data.push(request.body)
    }
    response.json(objectData.data[objectData.data.length - 1])
})
/*<=========================== END. add new Posts  func.===========================>*/
/*<=========================== START.add new offer to particular post   func.===========================>*/
router.get('/postOffers', (request, response) => {
    if(request.query.id === undefined){
        response.json('no id found')
    }
    let id = parseInt(request.query.id)
    let offerPrice = request.query[Object.keys(request.query)[1]]
    if(Object.keys(request.query)[1] !== undefined){
    objectData.data[id][Object.keys(request.query)[1]] = { price: offerPrice }
    }
    response.json(objectData.data[id])
})
/*<=========================== END. add new Posts  func.===========================>*/

const objectData = {
    data: [{
        sellerID: "Asem",
        postCategories: "car",
        location: 'Amman',
        name: "BMW",
        additionalInfo: '520i',
        imgUrl: 'https://images.summitmedia-digital.com/topgear/images/2018/07/31/BMW-520d1.jpg',
        buyerOne: {
            price: '20k',
            // date : Date.now(), 
        },
        buyerTwo: {
            price: '18k'
        },
        buyerThree: {
            price: '21k'
        },
        buyerFour: {
            price: '15k'
        }
    }, {
        sellerID: "Asem2",
        postCategories: "cat",
        location: 'Irbid',
        name: "dunno",
        additionalInfo: 'sherazi',
        imgUrl: 'https://images.summitmedia-digital.com/topgear/images/2018/07/31/BMW-520d1.jpg',
        buyerOne2: {
            price: '2'
        },
        buyerTwo2: {
            price: '18'
        },
        buyerThree2: {
            price: '33'
        },
        buyerFour2: {
            price: '15'
        }
    }, {
        sellerID: "Asem", ////////////// ana hooon
        postCategories: "BBBBrsr",
        location: 'aqaba',
        name: "BMW",
        additionalInfo: '520i',
        imgUrl: 'https://images.summitmedia-digital.com/topgear/images/2018/07/31/BMW-520d1.jpg',
        buyerOne: {
            price: '2k'
        },
        buyerTwo: {
            price: '1k'
        },
        buyerThree: {
            price: '2k'
        },
        buyerFour: {
            price: '1k'
        }
    }, {
        sellerID: "Asem",
        postCategories: "bed",
        location: 'non',
        name: "dunno",
        additionalInfo: 'sherazi',
        imgUrl: 'https://images.summitmedia-digital.com/topgear/images/2018/07/31/BMW-520d1.jpg',
        buyerOne2: {
            price: '2'
        },
        buyerTwo2: {
            price: '18'
        },
        buyerThree2: {
            price: '33'
        },
        buyerFour2: {
            price: '15'
        }
    }]
}
module.exports = router