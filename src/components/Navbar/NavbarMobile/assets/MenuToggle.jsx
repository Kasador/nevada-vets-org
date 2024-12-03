const Path = (props) => (
    <path
      fill="transparent"
      strokeWidth="3"
      stroke="var(--background)"
      strokeLinecap="round"
      {...props}
    />
  );
  
  export const MenuToggle = ({ toggle }) => (
    <button onClick={toggle} className="MobileMenuToggle">
      <svg width="25" height="18" viewBox="0 0 23 18">
        <Path
          d="M 2 2.5 L 20 2.5"
          className="MobileMenu-top"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
        <Path
          d="M 2 16.346 L 20 16.346"
          className="MobileMenu-bottom"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
  