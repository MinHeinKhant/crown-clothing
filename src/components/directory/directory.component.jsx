import React from "react";
import { connect } from "react-redux";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...props }) => (
        <MenuItem key={id} {...props} />
      ))}
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     directory: state.directory
//   };
// };

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
