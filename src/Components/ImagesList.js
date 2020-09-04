import React from "react";
import SadSearch from "./SadSearch";

export default function Images(props) {
  return props.foundImages.length < 1 ? (
    <div>
      <SadSearch />
    </div>
  ) : (
    <div className="masonry">
      {props.foundImages.map((item) => (
        <div key={item.id} className="masonry-item">
          <img src={item.urls.small} alt="" />
          <div className="overlay">
            <div className="content">
              <p>
                {item.likes} <i className="fas fa-heart fa-sm"></i>
              </p>
              <a
                href={item.links.html}
                rel="noopener noreferrer"
                target="_blank"
              >
                Visit page <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
