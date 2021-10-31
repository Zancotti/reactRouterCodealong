import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const AlbumDetails = () => {
  const [album, setAlbum] = useState(null);
  const { albumId } = useParams();

  useEffect(() => {
    fetch(`https://theaudiodb.com/api/v1/json/1/album.php?m=${albumId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAlbum(data.album[0]);
      });
  }, [albumId]);

  if (!album) {
    return <div></div>;
  }

  return (
    <div className="container__album-details">
      <img src={album.strAlbumThumb}></img>
      <div>{album.strAlbum}</div>
      <span>{album.strDescriptionEN}</span>
      <span>{album.strStyle}</span>
    </div>
  );
};
