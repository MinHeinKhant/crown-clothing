import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./collection-overview.styles.scss";
import { selectShopCollectionsForPreview } from "../../redux/shop/shop.selector";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverview = ({ collections }) => {
  console.log(collections);

  return (
    // Before shop data normalization
    <div className="collections-overview">
      {collections.map(({ id, ...others }) => (
        <CollectionPreview key={id} {...others} />
      ))}
    </div>
  );
};

// This selector is used before shop data normalization
// const mapStateToProps = createStructuredSelector({
//   collections: selectShopCollections
// });

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
