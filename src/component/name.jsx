function Nama (props){
    const {nama , npm , github} = props
      return(
          <div>
          <div className="namaContainer">
              <p>Nama : Adrian Reynaldi {nama}</p>
              <p>Npm : {npm}</p>
              <p>Github : <a href="">{github}</a></p>
          </div>
          </div>
  )
  
  }
  
  export default Nama