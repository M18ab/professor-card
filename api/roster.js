export default async function handler(request, res) {

    const roster = [
        {
            "imgURL": "https://media.licdn.com/dms/image/D4D03AQHzfmbMoNNrww/profile-displayphoto-shrink_800_800/0/1671642107740?e=2147483647&v=beta&t=ZC1J3poYWxvIe5KsDFsObVcXQlh2-mv5mhIjjwOOkkk",
            "author": "Spenser McLaughlin",
            "professorName": "Professor Bryan Ollendyke",
            "funFact": "This is a picture of a Bing user",
            "topText": "Imagine being IT competent",
            "bottomText": "But using BING",
            "description": "Details",
            "shadowColor": "false"
        },
        {
            "imgURL": "https://media.licdn.com/dms/image/D4D03AQHzfmbMoNNrww/profile-displayphoto-shrink_800_800/0/1671642107740?e=2147483647&v=beta&t=ZC1J3poYWxvIe5KsDFsObVcXQlh2-mv5mhIjjwOOkkk",
            "author": "Spenser McLaughlin",
            "professorName": "Professor Bryan Ollendyke",
            "funFact": "This is a picture of a Bing user",
            "topText": "Imagine being IT competent",
            "bottomText": "But using BING",
            "description": "Details",
            "shadowColor": "false"
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(roster);
  }