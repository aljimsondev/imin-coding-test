import './icon.css';

/**
 * This component uses image icon since pre-built ui kits is not allowed so i assume icons online is not allowed, however in production codebase pre-build icons should be used in here
 * @param param0
 * @returns
 */
function Icon({ imageSrc }: { imageSrc: string }) {
  return (
    <button className="icon">
      <img className="icon-img" src={imageSrc} alt="icon" />
    </button>
  );
}

export default Icon;
