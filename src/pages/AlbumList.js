import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const AlbumList = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`https://theaudiodb.com/api/v1/json/1/album.php?i=112024`)
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data.album);
      });
  }, []);

  console.log(albums);

  return (
    <>
      {albums.map((album) => {
        return (
          <div className="album-container" key={album.idAlbum}>
            <img
              src={`${album.strAlbumThumb}/preview`}
              alt={`${album.strAlbum}cover`}
            ></img>
            <Link to={`/albums/${album.idAlbum}`}>{album.strAlbum}</Link>
            <h3>{album.strArtist}</h3>
          </div>
        );
      })}
    </>
  );
};
