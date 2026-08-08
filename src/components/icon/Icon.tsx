type IconProps = {
  className?: string;
  iconName: string;
};

const Icon = ({ className = "", iconName }: IconProps) => {
  const classes = ["icon", iconName, className].filter(Boolean).join(" ");

  return <span className={classes} aria-hidden="true" />;
};

export default Icon;
