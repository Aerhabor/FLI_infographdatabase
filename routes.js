const express = require('express');
const router = express.Router();
const {Client} = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://localhost:9200' });




router.get("/infographs", async (req,res)=>{
    const {resp} = await client.get()
});

router.put('/infographs', async(req,res)=>{
    if(req.body){
        client.index({
            index: "infographs",
            body: req.body
        })
    }
});
router.get("/search-text/:query",async (req,res)=>{
     const {resp} = await client.search({
        index: "infographs",
        body: {
            query: {
                multi_match:{
                    query: req.body,
                    fields: ["text","description"]
                }
            }
        }
    })
    return resp;
})
router.get("/search-category/:query", async (req,res)=>{
    const {resp} = await client.search({
        index: "infographs",
        body: {
            query: {

            }
        }
    })
})
module.exports = router;