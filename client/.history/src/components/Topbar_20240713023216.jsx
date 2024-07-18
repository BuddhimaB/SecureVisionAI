import './Topbar.css'

export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className="logo">SV Logo</span>
        </div>
        <div className="topbarCenter">hey</div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Contact</span>
                <span className="topbarLink">Register</span>
            </div>
            
        </div>
      
    </div>
  )
}