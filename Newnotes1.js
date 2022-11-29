
function Newnotes1(){

 const header =(
    <header>
      <h1>SUBSCRIBE</h1>
      <h3>signup with your email addresss</h3>
    </header>
 )
 
 const main =(
    <main >
    
      <input className="mainstyle" type="text" placeholder="first name"></input>
      <input  className="mainstyle"type="text" placeholder="last name"></input>
      <input className="mainstyle" type="text" placeholder="Email"></input>
    </main>
 )
 const footer=(
    <footer >
    <button className="fstyle">Subscribe</button>
    </footer>
 )
 
 
return (
    <div className="abc">
    {header}
     {main}
     {footer}
    </div>
)

}

export default Newnotes1;