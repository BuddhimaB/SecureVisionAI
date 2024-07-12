import './Topbar.css'

export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className="logo">SV Logo</span>
        </div>
        <div className="topbarCenter"></div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <i className="topbarIcon fab fa-facebook"></i>
                </div>
                <div className="topbarIconItem">
                    <i className="topbarIcon fab fa-twitter"></i>
                </div>
                <div className="topbarIconItem">
                    <i className="topbarIcon fab fa-pinterest"></i>
                </div>
            </div>
        </div>
      
    </div>
  )
}
