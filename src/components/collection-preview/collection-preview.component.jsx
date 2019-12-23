import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
  // This filter make sure to return ONLY first four elements from the array
  const fourItems = items.filter((_, index) => index < 4);

  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {fourItems.map(item => {
          return (
            <CollectionItem key={item.id} item={item}>
              {item.name}
            </CollectionItem>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPreview;
