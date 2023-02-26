import { Fragment } from "react";
import { useDrag } from "react-dnd";

interface PictureDropProps {
  url: string;
  width?: string;
  height?: string;
  board?: boolean;
}

export const PictureDrop = ({ url, width = "250", height = "150", board }: PictureDropProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { tag: "image", url: url },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return board ? (
    <a href={url} download>
      <img
        ref={drag}
        src={url}
        alt="some image"
        width={width}
        height={height}
        style={{ border: isDragging ? "var(--drop-border)" : "inherit" }}
      />
    </a>
  ) : (
    <img
      ref={drag}
      src={url}
      alt="some image"
      width={width}
      height={height}
      style={{ border: isDragging ? "var(--drop-border)" : "inherit" }}
    />
  );
};
