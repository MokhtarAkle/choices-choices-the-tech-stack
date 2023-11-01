async function load(query){
    
    const result = await fetch(`https://api.takeshape.io/project/${process.env.TAKESHAPE_API_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.TAKESHAPE_API_KEY}`
      },
      body: JSON.stringify({query})
    })
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(json => {
    //     const data = json;
    //     console.log(data);
    //     return data
    //   });
      
  
    //   return {
    //     props: {result}
    //   }
    const json = await result.json()
    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
    return json.data
  }

  export async function getWishes() {
    const data = await load(`
      {
        getWishList {
            items {
              _id
              date
              description
              heading
              image {
                _id
                description
                mimeType
                path
                sourceUrl
                title
                uploadStatus
              }
              label
              uid
            }
            total
          }
        }
      }
    `)
    return data
  }
  
