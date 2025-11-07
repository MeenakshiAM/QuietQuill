export default function Footer(){
    return(
        <footer className="footer">
  <div className="footer-content">
    <h3>QuietQuill ✨</h3>
    <p>Your peaceful space to pen down thoughts, reflect, and create 🌸</p>
    
    <div className="footer-links">
      <a href="/privacy">Privacy Policy</a>
      <a href="/terms">Terms of Use</a>
      <a href="/about">About Us</a>
    </div>
    
    <p className="footer-note">© {new Date().getFullYear()} QuietQuill. All rights reserved.</p>
  </div>
</footer>

    );
}