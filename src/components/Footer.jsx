import Github from "../assets/github.svg";
import Twitter from "../assets/twitter.svg";
import LinkedIn from "../assets/linkedin.svg";
import LeetCode from "../assets/leetcode.svg";

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/AyushS1304"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img
            src={Github}
            alt="github"
            className="w-6 h-6 transition-transform duration-200 hover:scale-110"
          />
        </a>
        <a
          href="https://x.com/AyushS1304"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img
            src={Twitter}
            alt="twitter"
            className="w-6 h-6 transition-transform duration-200 hover:scale-110"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ayush-sharma-6219352b1/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img
            src={LinkedIn}
            alt="linkedin"
            className="w-6 h-6 transition-transform duration-200 hover:scale-110"
          />
        </a>
        <a
          href="https://leetcode.com/u/AyushS1308/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img
            src={LeetCode}
            alt="leetcode"
            className="w-6 h-6 transition-transform duration-200 hover:scale-110"
          />
        </a>
      </div>

      <p className="text-white-500">© 2025 Ayush. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
