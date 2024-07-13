import './Topbar.css'

export default function Topbar() {
  const Navigate = use
  const gotoRegister = () => {
    Navigate('/register');
  }
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className="logo">SV Logo</span>
        </div>
        
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Contact</span>
                <span 
                onClick={gotoRegister} 
                className="topbarLink">Register</span>
            </div>
            
        </div>
      
    </div>
  )
}
