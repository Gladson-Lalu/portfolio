import "./icon_menu.css";

const IconMenu = () => {
  return (
    <div className="header">
      <ul
        className="icon-menu revealator-slideup revealator-once revealator-delay1"
        role="tablist"
      >
        <li
          className="icon-box react-tabs__tab--selected"
          role="tab"
          id="react-tabs-0"
          aria-selected="true"
          aria-disabled="false"
          aria-controls="react-tabs-1"
          tabindex="0"
          data-rttab="true"
        >
          <i className="fa fa-home"></i>
          <h2>Home</h2>
        </li>
        <li
          className="icon-box"
          role="tab"
          id="react-tabs-2"
          aria-selected="false"
          aria-disabled="false"
          aria-controls="react-tabs-3"
          data-rttab="true"
        >
          <i className="fa fa-user"></i>
          <h2>About</h2>
        </li>
        <li
          className="icon-box"
          role="tab"
          id="react-tabs-4"
          aria-selected="false"
          aria-disabled="false"
          aria-controls="react-tabs-5"
          data-rttab="true"
        >
          <i className="fa fa-briefcase"></i>
          <h2>Portfolio</h2>
        </li>
        <li
          className="icon-box"
          role="tab"
          id="react-tabs-6"
          aria-selected="false"
          aria-disabled="false"
          aria-controls="react-tabs-7"
          data-rttab="true"
        >
          <i className="fa fa-envelope-open"></i>
          <h2>Contact</h2>
        </li>
        <li
          className="icon-box"
          role="tab"
          id="react-tabs-8"
          aria-selected="false"
          aria-disabled="false"
          aria-controls="react-tabs-9"
          data-rttab="true"
        >
          <i className="fa fa-comments"></i>
          <h2>Blog</h2>
        </li>
      </ul>
    </div>
  );
};

export default IconMenu;
