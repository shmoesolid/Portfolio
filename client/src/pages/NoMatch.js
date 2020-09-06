import React from "react";
import { Card } from "../components/Card";

function NoMatch() {
  return (
    <Card title="Doh!">
      <div className="text-center">
        <h1>404 Page Not Found</h1>
        <h1><span role="img" aria-label="Face With Rolling Eyes Emoji">🙄</span></h1>
      </div>
    </Card>
  );
}

export default NoMatch;
