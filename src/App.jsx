let App =()=>{

  let a=10,b=20
  let myname="mani"
  return(
    <>

     <h1>hello how are you</h1>
     <img src="https://images.pexels.com/photos/28588328/pexels-photo-28588328/free-photo-of-vast-ocean-waves-under-a-cloudy-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" height={300} width={300}/>

     <div className="container">

      <h1> {a+b} </h1>
      <h1> {myname} </h1>

     </div>
    </>
    
  )

}

export default App