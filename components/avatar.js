import ContentfulImage from "./contentful-image";

/**
 * This is a JSDoc comment for a function.
 * @param {string} avatar - The first parameter.
 * @param {string} picture - The second parameter.
 */

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 mr-4">
        <ContentfulImage
          src={picture.url}
          layout="fill"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
