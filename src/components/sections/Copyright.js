const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} </span>
        <span>
          Designed By{" "}
          <br />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/syed-muhammad-hamza-1822a7209/"
          >
             Syed Muhammad Hamza
          </a>
        </span>
        <ul>
          <li>
            <a href = "https://github.com/hamza-smh" >
              <i className="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a href = "https://www.instagram.com/hamza_smh/" >
              <i className="fa-brands fa-instagram" />
            </a>
          </li>
          <li>
            <a href = "https://www.linkedin.com/in/syed-muhammad-hamza-1822a7209/" >
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>
          <li>
            <a href = "https://www.facebook.com/share/1CoLy47Kh4/" >
              <i className="fa-brands fa-facebook" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
