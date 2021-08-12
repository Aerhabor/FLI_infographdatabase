const express = require('express');
const router = express.Router();
const {Client} = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://localhost:9200' });

/*
client.bulk({
    index: {
        _index: "infographs"
        
    }
})*/
let rawData = [
    {
        "id": "1",
        "title" : "The Real Achievement Gap",
        "description" : "Widening achievement gap attributed to educators",
        "category": []
    },
    {
        "id": "2",
        "title" : "Seizing the Moment to Create the School You’d Want for Your Kids",
        "description" : "Use the momentum from the past year to reinvent school culture, making it more equitable and fruitful for your students.",
        "category": []
    },
    {
        "id": "3",
        "title" : "Why Teacher Diversity Matters",
        "description" : "Teacher diversity is crucial to the success of students of color.",
        "category": []        
    },
    {
        "id": "4",
        "title" : "Three Ways Educators Can Support Students Celebrating Eid al-Adha",
        "description" : "Eid al-Adha",
        "category": []   
    },
    {
        "id": "5",
        "title" : "Just-In-Time Supports In Math",
        "description" : "Teacher support in math through transitioning from online to in person learning. ",
        "category": []   
    }
];

rawData.forEach(doc => {
    async ()=>{
        let body = await client.index({
            id: doc.id,
            title: doc.title,
            description: doc.description,
            category: doc.category
        });
        console.log(body);
    }
    
});