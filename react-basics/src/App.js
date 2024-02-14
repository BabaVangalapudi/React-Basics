import React from 'react'


let data = [
  {id:1,title:"Bhola",imageURL:"https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABS-VWdG290vfbu7D5JgMSFuy-w3nyoJbMzNBVuZ6LLSkbKDWLJStRWp6TgVQ76uXv_E_SyxsYa5BQGePzwWhz1NqZjmANCgH9Pg.webp?r=34e"},
  {id:2,title:"Hi nanna",imageURL:"https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABfQ3EwzUNMOjgG043HKuEJPaYkDmOwTFcF5WDhjTwsSoNIEYX-o8UXWwpdDUBcIV_76HAAOuvNR2W1-yUnf3APFqgYV6paT35C_szZAiCO6Hiw3c_So3L8Snl9DUSKjKvMMm6ZwUoYV4Wjqew1NVJXXd1J2E5nrzce_dS8FGRYZ6B4iL51EiVI2cdv4wROM8_sQ6az7KrualExZ3LGIl9FAKw03Ihfihq37dhi93anpfuTc3HXIdTkauWqQ_4kL6VmmbyF38cn9MIgMErL-1g2Gg9HNwilqjrkqUfiAeE8UphsiE1Im5g2eKcmLAwnasTV87Crp_MjZmzEicM0ISukk.webp?r=313"},
  {id:3,title:"Guvva Gorinka",imageURL:"https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABa-44bU4tckdIqkWSzcuDdfOzRVk-GU7GILFe081ghC3bnHLXUfWgqeQdgLubcLhVOv1NoAG2dsmjFYUr7SoJgajAnNfV34u74Q.webp?r=9bd"}
  ]

const App = () => {
  return(
    <section className='container'>
        {data.map((each)=>{
            const {id,title,imageURL}=each
            return(
              <Movie key={id} title={title} imageURL={imageURL}/>
                  )
        })}
    </section>
  )
}

const Movie = (props)=>{
  const {imageURL,title}=props
  return (
    <div className='imagecontainer'>
      <img src={imageURL} alt='image1'/>
      <h1>{title}</h1>
    </div>
  )
  }

export default App;
