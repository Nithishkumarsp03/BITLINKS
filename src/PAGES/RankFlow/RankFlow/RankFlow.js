import React, { useState } from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import "./RankFlow.css"; // Create a CSS file for styling
import Exclaim from "../../../Assets/Rank-3.svg";
import Complete from "../../../Assets/Rank-2.svg";
import Star from "../../../Assets/Rank-1.svg";
import Circle from "../../../Assets/Rank-4.svg";

export default function RankFlow({ viewConnectionIndex }) {
  const [activeFlow, setActiveFlow] = useState("rank");

  console.log("RankFlow =", viewConnectionIndex);

  const handleFlowClick = (rankflow) => {
    setActiveFlow(rankflow);
  };

  const renderNode = (imageSrc, index) => (
    <div
      className="node child"
      onClick={() => handleFlowClick(viewConnectionIndex)}>
        
      <div className={`rectangle rectangle${index}`}>
        
      {/* <div>Connections</div> */}
        <div className="line"></div>
        <div className="account">
          <img src={imageSrc} alt="" className="corner-img" />
          <div className="rank-container">
            <div className="text-item-name">Name</div>
            <div className="text-item-role">Role</div>
            <div className="text-item-profession">Profession</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="rank-flow">
      <p className="rank-connections">&nbsp;Connections {viewConnectionIndex}</p>
      <Tree
        lineColor="grey"
        lineStyle="dashed"
        lineWidth="2px"
        lineHeight="30px"
        label={renderNode(Exclaim)}>
        <TreeNode label={renderNode(Circle, 1)}>
          <TreeNode label={renderNode(Exclaim, 2)}>
            <TreeNode label={renderNode(Complete, 3)}>
              <TreeNode label={renderNode(Star, 4)}>
                </TreeNode>
            </TreeNode>
          </TreeNode>
        </TreeNode>
        <TreeNode label={renderNode(Circle, 1)}>
          <TreeNode label={renderNode(Exclaim, 2)}>
            <TreeNode label={renderNode(Complete, 3)}>
              <TreeNode label={renderNode(Star, 4)}>
                </TreeNode>
            </TreeNode>
          </TreeNode>
        </TreeNode>
        <TreeNode label={renderNode(Circle, 1)}>
          <TreeNode label={renderNode(Exclaim, 2)}>
            <TreeNode label={renderNode(Complete, 3)}>
              <TreeNode label={renderNode(Star, 4)}>
                </TreeNode>
            </TreeNode>
          </TreeNode>
        </TreeNode>
        <TreeNode label={renderNode(Circle, 1)}>
          <TreeNode label={renderNode(Exclaim, 2)}>
            <TreeNode label={renderNode(Complete, 3)}>
              <TreeNode label={renderNode(Star, 4)}>
                </TreeNode>
            </TreeNode>
          </TreeNode>
        </TreeNode>
      </Tree>
    </div>
  );
}
