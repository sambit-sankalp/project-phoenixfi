export const CardImage = ({ src, className, imageClassName, alt }) => {
  return (
    <div className={`card--image ${className && className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover ${
          imageClassName && imageClassName
        }`}
      />
    </div>
  );
};
